// import React, { useState } from 'react';

// const reasons = [
//     "You make me smile every single day. 😊",
//     "You always believe in me, even when I doubt myself.",
//     "You give the warmest hugs. 🤗",
//     "You have the most beautiful eyes I've ever seen. 👀",
//     "Your voice is the best sound in the world.",
//     "You’re my safe space. 🏡",
//     "You are give me comfort. 💕",
//     "You give me peace. 🫶🏻",
//     "You confessed in the smoothest way possible. 🫰🏻",
//     "You spoil me with your hand made gifts. 🫶🏻",
//     "You are a BADDIEEEEEEE. 💅🏻💅🏻💅🏻",
//     "Your 🍑 is 🥵.",
//     "You are the most beautiful looking woman to set foot on earth 🌎",
//     "You sing me beautiful songs. 🎤",
//     "You give me butterflies and also a boner🦋",
//     "You are the most talented woman I have ever met 🫶🏻🫶🏻",
//     "You are so HAWWWWTTTTTTTTTTT 🥵🥵🥵🥵",
//     "You are so freaky🫦🫦",
//     "You discuss you pait ki dikkatein with me",
//     "You have such good lips (both)",
//     "You give such goood kisses 😘😘",
//     "You give such hyuuuuuugeeeee bicepsssss 💪🏻💪🏻",
//     "You are the best chef in the world 👩🏻‍🍳(I haven't eaten but I know)",
//     "Kalesh karte ho lekin pyaar us se bhi laakhon guna zyaada <3 <3 <3",
//     "Kalesh karte ho lekin pyaar us se bhi laakhon guna zyaada <3 <3 <3",
//   ];

// const MainBox = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % reasons.length);
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? reasons.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-10 max-w-lg w-full text-center flex flex-col items-center">
//       {/* Hero Section */}
//       <h2 className="text-4xl font-heading text-purple-700 mb-4">
//         Hey Love, 💕
//       </h2>
//       <p className="text-lg font-body text-gray-700 mb-8">
//         Here are all the reasons why you're so amazing!
//       </p>

//       <div className="bg-gray-100 shadow-inner p-6 rounded-lg w-full">
//         <p className="text-lg font-body text-gray-800">{reasons[currentIndex]}</p>
//       </div>
//       <div className="flex justify-between w-full mt-6">
//         <button
//           onClick={handlePrevious}
//           className="bg-purple-500 text-white px-4 py-2 rounded-md font-body hover:bg-purple-700 transition"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-purple-500 text-white px-4 py-2 rounded-md font-body hover:bg-purple-700 transition"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MainBox;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const reasons = [
    "You make me smile every single day. 😊",
    "You always believe in me, even when I doubt myself.",
    "You give the warmest hugs. 🤗",
    "You have the most beautiful eyes I've ever seen. 👀",
    "Your voice is the best sound in the world.",
    "You’re my safe space. 🏡",
    "You give me comfort. 💕",
    "You give me peace. 🫶🏻",
    "You confessed in the smoothest way possible. 🫰🏻",
    "You spoil me with your handmade gifts. 🫶🏻",
    "You are a BADDIEEEEEEE. 💅🏻💅🏻💅🏻",
    "Your 🍑 is 🥵.",
    "You are the most beautiful-looking woman to set foot on Earth 🌎",
    "You sing me beautiful songs. 🎤",
    "You give me butterflies and also a boner🦋",
    "You are the most talented woman I have ever met 🫶🏻🫶🏻",
    "You are so HAWWWWTTTTTTTTTTT 🥵🥵🥵🥵",
    "You are so freaky🫦🫦",
    "You discuss your pait ki dikkatein with me.",
    "You have such good lips (both).",
    "You give such good kisses 😘😘",
    "You have such hyuuuuuugeeeee bicepsssss 💪🏻💪🏻",
    "You are the best chef in the world 👩🏻‍🍳(I haven't eaten but I know)",
    "Kalesh karte ho lekin pyaar us se bhi laakhon guna zyaada <3 <3 <3",
];

const MainBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reasons.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reasons.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-purple-300 to-blue-200 flex flex-col items-center justify-center">
    <div className="bg-white shadow-lg rounded-lg p-10 max-w-lg w-full text-center flex flex-col items-center">
      <h2 className="text-4xl font-heading text-purple-700 mb-4">
        Hey Love, 💕
      </h2>
      <p className="text-lg font-body text-gray-700 mb-8">
        Here are all the reasons why you're so amazing!
      </p>

      <div className="bg-gray-100 shadow-inner p-6 rounded-lg w-full">
        <p className="text-lg font-body text-gray-800">{reasons[currentIndex]}</p>
      </div>
      <div className="flex justify-between w-full mt-6">
        <button
          onClick={handlePrevious}
          className="bg-purple-500 text-white px-4 py-2 rounded-md font-body hover:bg-purple-700 transition"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-purple-500 text-white px-4 py-2 rounded-md font-body hover:bg-purple-700 transition"
        >
          Next
        </button>
      </div>
      <button
        onClick={() => navigate('/love-letter')}
        className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md font-body hover:bg-pink-700 transition"
      >
        Here is a message for you 💌
      </button>
    </div>
    </div>
  );
};

export default MainBox;
