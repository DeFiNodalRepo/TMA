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
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header />
            <div className='sticky top-4'>
              <HeaderStats />
            </div>
            <main className="flex-grow overflow-auto">
              <div className="mx-auto mt-[2px] max-w-screen-2xl p-4">
                {isFetching ? <Loader /> : children}
              </div>
            </main>
            <div className="sticky bottom-0 left-0 right-0 my-2">
              <MenuBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
