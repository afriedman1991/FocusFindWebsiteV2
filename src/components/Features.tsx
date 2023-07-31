import React from 'react';
import VerticalCapsuleNew from '../assets/Verticle\ Capsuel\ NEW.png';

const stats = [
    { id: 1, name: 'Each level has a unique solution', value: 'Solve Exciting Puzzles', image: VerticalCapsuleNew },
    { id: 2, name: 'Make your way through various mazes while avoiding anything that wants to kill you', value: 'Avoid Perilous Enemies', image: VerticalCapsuleNew },
    { id: 3, name: 'Collect memories and re-discover who you are while going through the different stages of grief', value: 'Find Your Escape', image: VerticalCapsuleNew },
  ]
  
  const Features: React.FC = () => {
    return (
      <div id="Features" className="relative py-24 sm:py-32 flex items-center justify-center isolate overflow-x-hidden overflow-y-auto py-24 sm:py-16 min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex items-center justify-center max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-300 text-shadow h-[70px]">{stat.name}</dt>
                <img src={stat.image} className="order-second tracking-tight"></img>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-300 sm:text-5xl text-shadow">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }

export default Features;
