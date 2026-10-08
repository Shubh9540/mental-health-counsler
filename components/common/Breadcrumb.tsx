import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export const Breadcrumb = ({ data }: { data?: any }) => {
  if (!data) return null;

  return (
    <section 
      className="w-full relative min-h-[400px] md:min-h-[500px] flex flex-col items-center justify-center bg-cover bg-center -mt-[100px] pt-[100px]"
      style={{ backgroundImage: `url('${data.bgImage || '/main logo/breadcrumb.webp'}')` }}
    >
      {/* Dark Green Overlay */}
      <div className="absolute inset-0 bg-[#0d2a21]/70 z-0"></div>

      <div className="relative z-10 text-center w-full px-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
          {data.title}
        </h1>
        
        <div className="flex items-center gap-3 text-sm md:text-base font-bold text-white">
          {data.paths?.map((path: any, index: number) => (
            <React.Fragment key={index}>
              {path.url ? (
                <Link href={path.url} className="hover:text-gray-300 transition-colors">
                  {path.label}
                </Link>
              ) : (
                <span>{path.label}</span>
              )}
              
              {index < data.paths.length - 1 && (
                <FaArrowRight className="text-white text-xs mx-1" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

