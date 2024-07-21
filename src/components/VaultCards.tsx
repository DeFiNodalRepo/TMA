import { useState } from 'react'
import CardPopUp from '../components/CardPopUp'


function VaultCards({ img, name, description, currentLevel, price, id, earnings, profitPerHourDelta, onInvestClick }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  function handlePopUpToggle() {
    setIsPopupOpen(!isPopupOpen)
  }

  const popup = isPopupOpen && <CardPopUp img={img} name={name} description={description} currentLevel={currentLevel} price={price} earnings={earnings} id={id} profitPerHourDelta={profitPerHourDelta} isPopupOpen={isPopupOpen} onInvestClick={onInvestClick} />

  return (

    <div className="flex max-w-md my-2 overflow-hidden bg-gray-900 border border-gray-700 rounded-lg shadow-md shadow-blue-900/30" onClick={handlePopUpToggle}>
      <CardPopUp show={open} />
      <div className="mx-2 my-2">
        <div className="grid items-center grid-cols-2 gap-2">
          <img className="w-16 h-16 rounded-lg" src={img} alt={name} />
          <div className='grid-rows-2 grip'>
            <h1 className="mb-1 text-sm font-bold">{name}</h1>
            <p className="text-xs">Per Hour: {earnings}</p>
          </div>
        </div>
        <div className="flex justify-between mx-4 mt-3 item-center">
          <h1 className="text-sm ">Lvl: {currentLevel}</h1>
          <h1 className="text-sm ">Cost: {price}</h1>
        </div>
      </div>
      {popup}
    </div >
  )
}


export default VaultCards