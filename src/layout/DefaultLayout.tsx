import React, { useState, ReactNode } from 'react';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import HeaderStats from '../components/HeaderStats';
import { useIsFetching } from "@tanstack/react-query";
import Loader from '../components/Loader';


const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {

  const isFetching = useIsFetching()

  // if (isFetching) {
  //   console.log("true")
  // }

  return (
    <div className="bg-sky-900">
      <div className="bg-gray-900">
        <div className="flex h-screen overflow-hidden">
          <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
            <Header />
            <div className='sticky top-4'>
              <HeaderStats />
            </div>
            <main>
              <div className="mx-auto mt-[2px] max-w-screen-2xl p-4">
                {isFetching ? <Loader /> : children}
              </div>
            </main>
            <div className="fixed bottom-0 left-0 right-0 mb-4">
              <MenuBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
