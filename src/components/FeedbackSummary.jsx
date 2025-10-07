import { useEffect, useState } from "react";
import axios from "axios";

const FeedbackSummary = () => {
  const [summary, setSummary] = useState({
    totalFeedbacks: 0,
    avgRating: 0,
    recentFeedbacks: [],
  });

  useEffect(() => {
    axios.get("http://localhost:5000/api/feedback/summary")
      .then(res => setSummary(res.data))
      .catch(err => console.log(err));
  }, []);

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
        {summary.recentFeedbacks.map(fb => (
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