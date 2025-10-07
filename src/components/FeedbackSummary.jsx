import { useEffect, useState } from "react";
import axios from "axios";

const FeedbackSummary = () => {
  const [summary, setSummary] = useState({
    totalFeedbacks: 0,
    avgRating: 0,
    recentFeedbacks: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const res = await axios.get("https://intelligent-inspiration-production.up.railway.app/api/feedback");
        const data = res.data;

        // 🔍 Safe structure check
        if (Array.isArray(data)) {
          setSummary({
            totalFeedbacks: data.length,
            avgRating:
              data.length > 0
                ? (data.reduce((sum, fb) => sum + (fb.rating || 0), 0) / data.length).toFixed(1)
                : 0,
            recentFeedbacks: data.slice(-3).reverse(),
          });
        } else if (data && typeof data === "object") {
          setSummary({
            totalFeedbacks: data.totalFeedbacks || 0,
            avgRating: data.avgRating || 0,
            recentFeedbacks: data.recentFeedbacks || [],
          });
        }
      } catch (err) {
        console.error("Error fetching feedback summary:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  if (loading) return <div className="text-center text-gray-500">Loading feedback...</div>;

  return (
    <div className="p-6 bg-white shadow-md rounded-md mt-6 text-black">
      <h2 className="text-xl font-bold mb-2">User Feedback & Ratings</h2>
      <div className="mb-4">
        <span className="font-bold">{summary.totalFeedbacks}</span> Users Rated
        <br />
        Average Rating: <span className="font-bold">{summary.avgRating} ⭐</span>
      </div>
      <h3 className="font-semibold mb-2">Recent Comments:</h3>
      <div className="space-y-2">
        {summary.recentFeedbacks.length === 0 && <div>No feedback yet</div>}
        {summary.recentFeedbacks.map((fb) => (
          <div key={fb._id} className="border p-2 rounded bg-white text-black shadow-sm">
            <div className="font-bold">{fb.username} - {fb.rating} ⭐</div>
            <div>{fb.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSummary;
