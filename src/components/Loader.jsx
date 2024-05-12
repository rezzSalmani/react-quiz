import React from "react";

const Loader = () => {
  return (
    <div className='flex items-center justify-center flex-col gap-4 text-lg text-gray-600 md:text-2xl mt-10 md:mt-20'>
      <div className='loader'></div>
      <p>Loading Questions, Please Wait...</p>
    </div>
  );
};

export default Loader;
