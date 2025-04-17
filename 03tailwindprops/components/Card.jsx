import React from 'react';

const Card = ({ username, btnText = "Visit Me" }) => {
  return (
    <>
      <div className="max-w-xs p-6 rounded-md shadow-md bg-black text-white">
        <div className="flex justify-center">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/02/11/08/monk-1791113_640.jpg"
            alt="yoga"
            className="object-cover object-center w-64 h-72 rounded-md bg-gray-500"
          />
        </div>
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            Props in React
          </h2>
        </div>
        <p className="text-gray-300 mb-4">
          There we learn props. React mein props ek tareeqa hai jisme ek parent component apne child component ko data bhejta hai.
        </p>
        <button className="px-4 py-2 bg-indigo-500 rounded-md hover:bg-indigo-600 text-white">
          {btnText}
        </button>
      </div>
    </>
  );
};

export default Card;
