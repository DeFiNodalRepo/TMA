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
<<<<<<< HEAD

    <div className="bg-sky-900">
=======
    <div className="bg-gray-900">
>>>>>>> c39fd13c4779c905befe20b6504b16398be9e749
      <div className="flex h-screen overflow-hidden">
        <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
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
