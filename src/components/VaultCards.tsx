import { useState } from 'react'
import CardPopUp from '../components/CardPopUp'
import { VaultCardProps } from '../types'


function VaultCards({ img, name, description, currentLevel, price, id, earnings, profitPerHourDelta, onInvestClick, userBalance }: VaultCardProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  function handlePopUpToggle() {
    setIsPopupOpen(!isPopupOpen)
  }

  console.log(userBalance)
  console.log(price)

  let buttonDisable = true
  if (userBalance && price && userBalance > price){
    buttonDisable = false
  }

  console.log(buttonDisable)

  return (
    <div className="my-2 flex max-w-md overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow-md shadow-blue-900/30" onClick={buttonDisable ? (() => {}) : handlePopUpToggle}>
      <div className="mx-2 my-2">
        <div className="grid grid-cols-2 items-center gap-2">
          <img className="h-16 w-16 rounded-lg" src={img} alt={name} />
          <div className='grip grid-rows-2'>
            <h1 className="mb-1 text-sm font-bold">{name}</h1>
            <p className="text-xs">Per Hour: {earnings}</p>
          </div>
        </div>
        <div className="item-center mx-4 mt-3 flex justify-between">
          <h1 className="text-sm">Lvl: {currentLevel}</h1>
          <h1 className="text-sm">Cost: {price}</h1>
        </div>
        <div className='mx-4 text-xs text-red-500'>
          {buttonDisable ? "Not enough balance" : null}
        </div>
      </div>
      {isPopupOpen && <CardPopUp img={img} name={name} description={description} price={price} earnings={earnings} id={id} profitPerHourDelta={profitPerHourDelta} isPopupOpen={isPopupOpen} onInvestClick={onInvestClick} />}
    </div >
  )
}


export default VaultCards