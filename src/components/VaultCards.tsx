import { useState } from 'react'
import CardPopUp from '../components/CardPopUp'

function VaultCards({ img, name, description, level, price }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  function handlePopUpToggle(){
    setIsPopupOpen(!isPopupOpen)
  }

  const popup = isPopupOpen && <CardPopUp isPopupOpen={isPopupOpen}/>

  return (

    <div className="my-4 flex max-w-md overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow-md shadow-blue-900/30" onClick={handlePopUpToggle}>
<CardPopUp show={open}/>
      <img className="w-1/3 bg-cover" src={img} alt={name} />

      <div className="w-2/3 p-4 md:p-4">
        <h1 className="text-xl font-bold text-gray-300">{name}</h1>

        <p className="mt-2 text-sm text-gray-300">{description}</p>

        <div className="item-center mt-3 flex justify-between">
          <h1 className="text-lg font-bold text-gray-300">Lvl: {level}</h1>
          <h1 className="text-lg font-bold text-gray-300">Cost: {price}</h1>

        </div>
      </div>
      {popup}
    </div >
  )
}


export default VaultCards