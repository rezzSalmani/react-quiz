import React from "react";

const Header = () => {
  return (
    <div className='flex items-center justify-center flex-col p-6 text-zinc-600 border-b-2 text-center gap-4 border-zinc-500'>
      <h1 className='font-RocknRoll text-2xl md:text-3xl '>React Quiz App</h1>
      <div className='flex items-center gap-4'>
        <img src='/quiz-logo.png' alt='quiz image' className='w-8' />
        <p className='text-xl'>Total Questions: 15</p>
      </div>
    </div>
  );
};

export default Header;
