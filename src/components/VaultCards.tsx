import { useState } from 'react'
import CardPopUp from '../components/CardPopUp'

function VaultCards({ updateVault, img, name, description, currentLevel, price, id, earnings }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  function handlePopUpToggle() {
    setIsPopupOpen(!isPopupOpen)
  }

  const popup = isPopupOpen && <CardPopUp updateVault={updateVault} img={img} name={name} description={description} currentLevel={currentLevel} price={price} earnings={earnings} id={id} isPopupOpen={isPopupOpen} />

  return (

    <div className="my-2 flex max-w-md overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow-md shadow-blue-900/30" onClick={handlePopUpToggle}>
      <CardPopUp show={open} />
      <div className="my-2 mx-2">
        <div className="grid grid-cols-2 gap-2 items-center">
          <img className="rounded-lg w-16 h-16" src={img} alt={name} />
          <div className='grip grid-rows-2'>
            <h1 className="text-sm font-bold mb-1">{name}</h1>
            <p className="text-xs">Per Hour: {earnings}</p>
          </div>
        </div>
        <div className="item-center mt-3 mx-4 flex justify-between">
          <h1 className="text-sm  ">Lvl: {currentLevel}</h1>
          <h1 className="text-sm ">Cost: {price}</h1>
        </div>
      </div>
      {popup}
    </div >
  )
}


export default VaultCards