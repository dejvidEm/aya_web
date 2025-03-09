import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full text-white py-16 px-8 flex flex-col items-center text-center"
         style={{ 
           background: 'linear-gradient(135deg, #07233F, #0F355B)', 
           clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0% 100%)' 
         }}>
      <h1 className="text-4xl font-bold">Hlavný nadpis</h1>
      <p className="text-lg mt-4">Toto je podnadpis bannera</p>
      <div className="mt-6 flex gap-4">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Začať investovať</button>
      <button type="button" className="text-blue-700 bg-white hover:bg-slate-100 border-[1px] border-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Kontaktovať Nás</button>
      </div>
    </div>
  );
};

export default Banner;
