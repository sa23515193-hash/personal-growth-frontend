import React from "react";
import { useNavigate } from "react-router-dom";

// 🏋️‍♀️ Imported exercise images
import jumpingjack from "../assets/jump.jpg";
import pushup from "../assets/pushup.jpg";
import squatImg from "../assets/squat.jpg";
import bicycleImg from "../assets/bicycle.jpg";
import buttImg from "../assets/butt.jpg";
import gluteImg from "../assets/Glute.jpg";
import highImg from "../assets/high.jpg";
import legImg from "../assets/leg.jpg";
import lungeImg from "../assets/lunge.jpg";
import mountainImg from "../assets/mountain.jpg";
import plankImg from "../assets/plank.jpg";
import sideImg from "../assets/side.jpg";
import superImg from "../assets/super.jpg";
import triImg from "../assets/tri.jpg";
import wallImg from "../assets/wall.jpg";

const exercises = [
  {
    name: "Jumping Jacks",
    img: jumpingjack,
    duration: "30 sec",
    rest: "15 sec",
    instructions: "Jump while spreading arms and legs. Breathe steadily.",
  },
  {
    name: "Push Ups",
    img: pushup,
    duration: "20 reps",
    rest: "30 sec",
    instructions: "Keep back straight, lower chest, push up. Control breathing.",
  },
  {
    name: "Squats",
    img: squatImg,
    duration: "15 reps",
    rest: "20 sec",
    instructions: "Keep feet shoulder width, bend knees. Go low, come up.",
  },
  {
    name: "Lunges",
    img: lungeImg,
    duration: "12 reps / leg",
    rest: "20 sec",
    instructions: "Step forward, bend knee, come back. Alternate legs.",
  },
  {
    name: "Plank",
    img: plankImg,
    duration: "45 sec",
    rest: "15 sec",
    instructions: "Maintain straight line from head to heels.",
  },
  {
    name: "High Knees",
    img: highImg,
    duration: "30 sec",
    rest: "15 sec",
    instructions: "Run in place, lift knees high.",
  },
  {
    name: "Butt Kicks",
    img: buttImg,
    duration: "30 sec",
    rest: "15 sec",
    instructions: "Run in place, kick heels to glutes.",
  },
  {
    name: "Mountain Climbers",
    img: mountainImg,
    duration: "20 sec",
    rest: "15 sec",
    instructions: "Alternate legs in plank position.",
  },
  {
    name: "Bicycle Crunches",
    img: bicycleImg,
    duration: "20 reps",
    rest: "20 sec",
    instructions: "Alternate elbow to opposite knee.",
  },
  {
    name: "Tricep Dips",
    img: triImg,
    duration: "15 reps",
    rest: "20 sec",
    instructions: "Use a stable surface, lower body, push up.",
  },
  {
    name: "Wall Sit",
    img: wallImg,
    duration: "45 sec",
    rest: "15 sec",
    instructions: "Back flat against wall, knees 90°. Hold.",
  },
  {
    name: "Side Lunges",
    img: sideImg,
    duration: "12 reps / side",
    rest: "20 sec",
    instructions: "Step to side, bend knee, push back.",
  },
  {
    name: "Glute Bridge",
    img: gluteImg,
    duration: "20 reps",
    rest: "20 sec",
    instructions: "Lie down, lift hips, squeeze glutes.",
  },
  {
    name: "Leg Raises",
    img: legImg,
    duration: "15 reps",
    rest: "20 sec",
    instructions: "Lie flat, raise legs, lower slowly.",
  },
  {
    name: "Superman",
    img: superImg,
    duration: "30 sec",
    rest: "15 sec",
    instructions: "Lie face down, lift arms & legs, hold.",
  },
];

const Fitness = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 px-4 pt-24 pb-12 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        {/* 🏋️ Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-green-700">
            Fitness Exercises 🏋️‍♀️
          </h1>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 rounded-lg border border-green-600 text-green-700 hover:bg-green-100 transition"
          >
            ⬅ Back
          </button>
        </div>

        {/* 🧘 Exercises Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {exercises.map((ex, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="w-full h-56 flex justify-center items-center bg-white border-b border-gray-200">
                <img
                  src={ex.img}
                  alt={ex.name}
                  className="w-full h-full object-contain rounded-t-2xl"
                />
              </div>

              <div className="p-5">
                <h2 className="text-xl font-semibold text-green-700 mb-2">
                  {ex.name}
                </h2>
                <p className="text-gray-700 mb-1">
                  <span className="font-medium text-green-700">Duration:</span>{" "}
                  {ex.duration}
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-medium text-green-700">Rest:</span>{" "}
                  {ex.rest}
                </p>
                <p className="text-gray-600 mt-2 italic">
                  {ex.instructions}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fitness;
