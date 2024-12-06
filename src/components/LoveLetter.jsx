// import React from 'react';

// const LoveLetter = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-r from-pink-200 via-purple-300 to-blue-200 flex items-center justify-center px-4">
//       <div className="bg-[url('https://img.freepik.com/free-vector/aged-paper-texture-background-design_60389-81.jpg?t=st=1733232711~exp=1733236311~hmac=93978de4d3e3d963dfbc580147f0a28bf915fae1e51a7653d1e5e6a161f4834d&w=900')] bg-cover bg-center p-6 rounded-lg shadow-lg w-full sm:w-11/12 md:w-3/4 max-w-2xl border border-gray-300">
//         <h1 className="text-3xl md:text-4xl font-heading text-red-700 text-center mb-6 italic tracking-wide">
//           My Kuchi Kuchi, 💖
//         </h1>
//         <p className="text-base md:text-lg font-serif leading-relaxed text-gray-800 tracking-wide text-justify indent-6">
//         Today marks 10 months of you baring with me and I am so Thankful for you coming into my life 
//           & giving me the most beautiful 10 months.
//           {/* write here */}
//         </p>
//         <p className="text-base md:text-lg font-serif leading-relaxed text-gray-800 tracking-wide text-justify indent-6 mt-4">
//           You are all I could ask for, my support system, and the reason I smile
//           every single day. Your Good Morning text cheers me up and your Good Night & I Love You 
//           text give me a peaceful sleep. Looking at your picture makes me happy, seeing you happy makes me happy.
//           {/* write here */}
//         </p>
//         <p className="text-base md:text-lg font-serif leading-relaxed text-gray-800 tracking-wide text-justify mt-4">
//           I wish to see you soon and explore everything with you by my side.<br />
//           I wish these monthly anniversaries change to yearly anniversaries.<br />
//           <p className="text-2xl">I LOVE YOU ❤️</p>
//           {/* write here */}
//         </p>
//         <p className="text-base md:text-lg font-serif leading-relaxed text-gray-800 tracking-wide text-right mt-8">
//           Yours forever and always, <br />
//           <span className="italic font-bold text-xl md:text-2xl">Akash</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoveLetter;


// import React, { useEffect, useState } from "react";

// const LoveLetter = () => {
//   const [showHearts, setShowHearts] = useState(true);

//   useEffect(() => {
//     // Set a timeout to hide the hearts after 3 seconds
//     const timer = setTimeout(() => {
//       setShowHearts(false);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-pink-200 via-purple-300 to-blue-200 flex items-center justify-center px-4 relative">
//       {showHearts && (
//         <div className="absolute inset-0 flex items-center justify-center z-50">
//           <div className="heart-popup animate-burst">
//             💖
//           </div>
//         </div>
//       )}
//       <div className="bg-[url('https://img.freepik.com/free-vector/aged-paper-texture-background-design_60389-81.jpg?t=st=1733232711~exp=1733236311~hmac=93978de4d3e3d963dfbc580147f0a28bf915fae1e51a7653d1e5e6a161f4834d&w=900')] bg-cover bg-center p-6 rounded-lg shadow-lg w-full sm:w-11/12 md:w-3/4 max-w-2xl border border-gray-300">
//         <h1 className="text-3xl md:text-4xl font-heading text-red-700 text-center mb-6 italic tracking-wide">
//           My Kuchi Kuchi, 💖
//         </h1>
//         <p className="text-base md:text-lg font-serif leading-relaxed text-gray-800 tracking-wide text-justify indent-6">
//           Today marks 10 months of you baring with me and I am so Thankful for you coming into my life
//           & giving me the most beautiful 10 months.
//         </p>
//         <p className="text-base md:text-lg font-serif leading-relaxed text-gray-800 tracking-wide text-justify indent-6 mt-4">
//           You are all I could ask for, my support system, and the reason I smile
//           every single day. Your Good Morning text cheers me up and your Good Night & I Love You
//           text give me a peaceful sleep. Looking at your picture makes me happy, seeing you happy makes me happy.
//         </p>
//         <p className="text-base md:text-lg font-serif leading-relaxed text-gray-800 tracking-wide text-justify mt-4">
//           I wish to see you soon and explore everything with you by my side.<br />
//           I wish these monthly anniversaries change to yearly anniversaries.<br />
//           <span className="text-2xl">I LOVE YOU ❤️</span>
//         </p>
//         <p className="text-base md:text-lg font-serif leading-relaxed text-gray-800 tracking-wide text-right mt-8">
//           Yours forever and always, <br />
//           <span className="italic font-bold text-xl md:text-2xl">Akash</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoveLetter;


// import React, { useEffect, useState } from "react";

// const LoveLetter = () => {
//   const [showHearts, setShowHearts] = useState(true);

//   useEffect(() => {
//     // Hide hearts after 3 seconds
//     const timer = setTimeout(() => {
//       setShowHearts(false);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-pink-200 via-purple-300 to-blue-200 flex items-center justify-center px-4 relative">
//       {showHearts && (
//         <div className="heart-popup animate-rise absolute bottom-0 left-1/2 transform -translate-x-1/2 z-50">
//           💖
//         </div>
//       )}
//       <div className="bg-[url('https://img.freepik.com/free-vector/aged-paper-texture-background-design_60389-81.jpg?t=st=1733232711~exp=1733236311~hmac=93978de4d3e3d963dfbc580147f0a28bf915fae1e51a7653d1e5e6a161f4834d&w=900')] bg-cover bg-center p-6 rounded-lg shadow-lg w-full sm:w-11/12 md:w-3/4 max-w-2xl border border-gray-300">
//         <h1 className="text-3xl md:text-4xl font-heading text-red-700 text-center mb-6 italic tracking-wide">
//           My Kuchi Kuchi, 💖
//         </h1>
//         <p className="text-base md:text-lg font-serif leading-relaxed text-gray-800 tracking-wide text-justify indent-6">
//           Today marks 10 months of you baring with me and I am so Thankful for you coming into my life
//           & giving me the most beautiful 10 months.
//         </p>
//         <p className="text-base md:text-lg font-serif leading-relaxed text-gray-800 tracking-wide text-justify indent-6 mt-4">
//           You are all I could ask for, my support system, and the reason I smile
//           every single day. Your Good Morning text cheers me up and your Good Night & I Love You
//           text give me a peaceful sleep. Looking at your picture makes me happy, seeing you happy makes me happy.
//         </p>
//         <p className="text-base md:text-lg font-serif leading-relaxed text-gray-800 tracking-wide text-justify mt-4">
//           I wish to see you soon and explore everything with you by my side.<br />
//           I wish these monthly anniversaries change to yearly anniversaries.<br />
//           <span className="text-2xl">I LOVE YOU ❤️</span>
//         </p>
//         <p className="text-base md:text-lg font-serif leading-relaxed text-gray-800 tracking-wide text-right mt-8">
//           Yours forever and always, <br />
//           <span className="italic font-bold text-xl md:text-2xl">Akash</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoveLetter;


import React, { useEffect, useState } from "react";

const LoveLetter = () => {
  const [hearts, setHearts] = useState([]);
  const [flowers, setflowers] = useState([]);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prevHearts) => [
        ...prevHearts,
        {
          id: Math.random(),
          left: Math.random() * 100, // Random horizontal position
          animationDuration: `${3 + Math.random() * 2}s`, // Random animation duration (3s to 5s)
        },
      ]);
    }, 300); // Add a new heart every 300ms

    // Stop generating hearts after 5 seconds
    setTimeout(() => clearInterval(interval), 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setflowers((prevflowers) => [
        ...prevflowers,
        {
          id: Math.random(),
          left: Math.random() * 100, // Random horizontal position
          animationDuration: `${3 + Math.random() * 5}s`, // Random animation duration (3s to 5s)
        },
      ]);
    }, 200); // Add a new heart every 200ms

    // Stop generating hearts after 5 seconds
    setTimeout(() => clearInterval(interval), 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-purple-300 to-blue-200 flex items-center justify-center px-4 relative overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="heart-popup"
          style={{
            left: `${heart.left}%`,
            animationDuration: heart.animationDuration,
          }}
        >
          💖
        </div>
      ))}

      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="heart-popup"
          style={{
            left: `${flower.left}%`,
            animationDuration: flower.animationDuration,
          }}
        >
          🌺
        </div>
      ))}
      <div className="bg-[url('https://img.freepik.com/free-vector/aged-paper-texture-background-design_60389-81.jpg?t=st=1733232711~exp=1733236311~hmac=93978de4d3e3d963dfbc580147f0a28bf915fae1e51a7653d1e5e6a161f4834d&w=900')] bg-cover bg-center p-6 rounded-lg shadow-lg w-full sm:w-11/12 md:w-3/4 max-w-2xl border border-gray-300">
        <h1 className="text-3xl md:text-4xl font-heading text-red-700 text-center mb-6 italic tracking-wide">
          My Kuchi Kuchi, 💖
        </h1>
        <p className="text-base md:text-lg font-serif leading-relaxed text-gray-800 tracking-wide text-justify indent-6">
          Today marks 9 months of you baring with me and I am so Thankful for you coming into my life
          & giving me the most beautiful 9 months.
        </p>
        <p className="text-base md:text-lg font-serif leading-relaxed text-gray-800 tracking-wide text-justify indent-6 mt-4">
          You are all I could ask for, my support system, and the reason I smile
          every single day. Your Good Morning text cheers me up and your Good Night & I Love You
          text give me a peaceful sleep. Looking at your picture makes me happy, seeing you happy makes me happy.
        </p>
        <p className="text-base md:text-lg font-serif leading-relaxed text-gray-800 tracking-wide text-justify mt-4">
          I wish to see you soon and explore everything with you by my side.<br />
          I wish these monthly anniversaries change to yearly anniversaries.<br />
          <span className="text-2xl">I LOVE YOU ❤️</span>
        </p>
        <p className="text-base md:text-lg font-serif leading-relaxed text-gray-800 tracking-wide text-right mt-8">
          Yours forever and always, <br />
          <span className="italic font-bold text-xl md:text-2xl">Akash</span>
        </p>
      </div>
    </div>
  );
};

export default LoveLetter;
