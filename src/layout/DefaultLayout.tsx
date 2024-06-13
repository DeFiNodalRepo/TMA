import React, { useState, ReactNode } from 'react';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import HeaderStats from '../components/HeaderStats';

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {

  // const bgStyle = {
  //   backgroundImage: "url('src/assets/df-modern-dark.png')",
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  // };
  // <div className="bg-sky-900" style={bgStyle}>


  return (
    <div className="bg-gray-900">
      <div className="flex h-screen overflow-hidden">
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header />
          <div className='sticky top-4'>
            <HeaderStats />
          </div>
          <main>
            <div className="mx-auto mt-[2px] max-w-screen-2xl p-4">
              {children}
            </div>
          </main>
          <div className="fixed bottom-0 left-0 right-0 mb-4">
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
