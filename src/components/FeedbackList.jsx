import { useEffect, useState } from "react";
import axios from "axios";

const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get("https://intelligent-inspiration-production.up.railway.app/api/feedback")
      .then(res => setFeedbacks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="mt-4">
      {feedbacks.map(fb => (
        <div key={fb._id} className="border p-3 mb-2 rounded bg-white text-black shadow-sm">
          <div className="font-bold">{fb.username} - {fb.rating} ⭐</div>
          <div>{fb.comment}</div>
        </div>
      ))}
    </div>
  );
};

export default FeedbackList;