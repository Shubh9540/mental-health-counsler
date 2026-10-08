'use client';

import React from 'react';
import { CounterData } from '@/types/templates.types';
import CountUp from 'react-countup';
import { FaAward, FaUsers, FaComments, FaTasks, FaUserFriends, FaHeart } from 'react-icons/fa';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaAward': return <FaAward size={32} />;
    case 'FaUsers': return <FaUsers size={32} />;
    case 'FaComments': return <FaComments size={32} />;
    case 'FaTasks': return <FaTasks size={32} />;
    case 'FaUserFriends': return <FaUserFriends size={32} />;
    case 'FaHeart': return <FaHeart size={32} />;
    default: return <FaAward size={32} />;
  }
};

export const CounterSection = ({ data }: { data?: CounterData }) => {
  if (!data || !data.items) return null;

  return (
    <section className="relative py-16 lg:py-12 bg-[var(--color-primary)]">
      <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/20 gap-y-12 lg:gap-y-0">

          {data.items.map((item, idx) => (
            <div key={item.id} className={`flex flex-col items-center text-center px-4 xl:px-8`}>

              {/* Icon Circle */}
              <div className="w-20 h-20 rounded-full bg-[#e8f0ea] flex items-center justify-center text-[var(--color-primary)] mb-6 shadow-md">
                {renderIcon(item.icon)}
              </div>

              {/* Top Title */}
              {item.title && (
                <h3 className="text-xl lg:text-[22px] font-bold text-white mb-6 whitespace-pre-line leading-snug h-[56px] flex items-center justify-center">
                  {item.title}
                </h3>
              )}

              {/* Number and Label Box */}
              <div className="w-full bg-white/10 rounded-xl py-4 px-6 flex items-center justify-center gap-4 border border-white/10">

                {/* Number Component */}
                <div className="text-3xl lg:text-[34px] font-bold text-white tracking-tight shrink-0">
                  <CountUp
                    end={item.number}
                    duration={2.5}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                  {item.suffix && <span>{item.suffix}</span>}
                </div>

                {/* Vertical Divider */}
                <div className="w-px h-10 bg-white/30 shrink-0" />

                {/* Sub-label */}
                <p className="text-white text-sm text-left leading-tight whitespace-pre-line font-medium opacity-90">
                  {item.label}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
