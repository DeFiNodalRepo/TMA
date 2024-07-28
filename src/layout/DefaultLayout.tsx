import React, { ReactNode } from 'react';
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
    <div className="bg-sky-900 min-h-screen">
      <div className="bg-gray-900 flex flex-col h-screen">
        <Header />
        <div className='sticky top-0 z-10'>
          <HeaderStats />
        </div>
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto p-4">
            {isFetching ? <Loader /> : children}
          </div>
        </main>
        <div className="sticky bottom-0 left-0 right-0 bg-gray-900">
          <MenuBar />
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
