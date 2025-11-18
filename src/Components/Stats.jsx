import React from 'react';

const Stats = () => {
    return (
        <div className="w-full bg-gradient-to-r from-purple-600 to-indigo-500 py-15 text-white">
        <div className="max-w-6xl mx-auto text-center px-6">
  
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
            Trusted By Millions, Built For You
          </h2>
  
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <p className="text-sm opacity-80 mb-2">Total Downloads</p>
              <h3 className="text-4xl md:text-5xl font-bold">29.6M</h3>
              <p className="text-sm mt-2 opacity-70">21% More Than Last Month</p>
            </div>

            <div>
              <p className="text-sm opacity-80 mb-2">Total Reviews</p>
              <h3 className="text-4xl md:text-5xl font-bold">906K</h3>
              <p className="text-sm mt-2 opacity-70">46% More Than Last Month</p>
            </div>

            <div>
              <p className="text-sm opacity-80 mb-2">Active Apps</p>
              <h3 className="text-4xl md:text-5xl font-bold">132+</h3>
              <p className="text-sm mt-2 opacity-70">31 More Will Launch</p>
            </div>
  
          </div>
        </div>
      </div>
    );
};

export default Stats;