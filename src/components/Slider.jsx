import React from "react";

const images = [
  'https://www.aslg.kz/assets/logo7-aME0br93.jpg',
  'https://www.aslg.kz/assets/logo8-D2-FUWOL.png',
  'https://www.aslg.kz/assets/logo9-Dbd1vRfK.png',
  'https://www.aslg.kz/assets/logo10-75FCo9pc.jpg',
  'https://www.aslg.kz/assets/logo11-BwjlutKH.jpg',
  'https://www.aslg.kz/assets/logo1-DY0sI_Oa.png',
  'https://www.aslg.kz/assets/logo2-D0XtWLm_.png',
  'https://www.aslg.kz/assets/logo3-D_BLZr0P.png',
  'https://www.aslg.kz/assets/logo4-ycg3OKva.jpg',
  'https://www.aslg.kz/assets/logo5-CW0rYnf8.png',
  'https://www.aslg.kz/assets/logo6-CWHAOzyb.jpg'
];

const AutoSlider = () => {
  const fullImages = [...images, ...images]; // loop uchun

  return (
    <div className="relative overflow-hidden w-full bg-blue-50 py-8">
      <div
        className="flex gap-4 w-max animate-slide"
        style={{ animation: "scroll 40s linear infinite" }}
      >
        {fullImages.map((src, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-4 w-[200px] md:w-[260px] h-[160px] flex items-center justify-center"
          >
            <img src={src} alt={`logo-${index}`} className="max-h-full max-w-full object-contain" />
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default AutoSlider;
