import { useState } from "react";
import axios from "axios";

const FeedbackForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/feedback", { username, email, rating, comment });
      alert("Feedback submitted!");
      setUsername(""); setEmail(""); setRating(0); setComment("");
    } catch (err) {
      alert("Error submitting feedback");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-md text-black">
      <input 
        placeholder="Name" 
        value={username} 
        onChange={e=>setUsername(e.target.value)} 
        className="border p-2 w-full mb-2 text-black" 
      />
      <input 
        placeholder="Email" 
        value={email} 
        onChange={e=>setEmail(e.target.value)} 
        className="border p-2 w-full mb-2 text-black" 
      />
      <select 
        value={rating} 
        onChange={e=>setRating(Number(e.target.value))} 
        className="border p-2 w-full mb-2 text-black"
      >
        <option value={0}>Select Rating</option>
        <option value={1}>1 ⭐</option>
        <option value={2}>2 ⭐⭐</option>
        <option value={3}>3 ⭐⭐⭐</option>
        <option value={4}>4 ⭐⭐⭐⭐</option>
        <option value={5}>5 ⭐⭐⭐⭐⭐</option>
      </select>
      <textarea 
        placeholder="Comment" 
        value={comment} 
        onChange={e=>setComment(e.target.value)} 
        className="border p-2 w-full mb-2 text-black"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;