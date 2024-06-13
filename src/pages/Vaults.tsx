
import VaultCards from '../components/VaultCards'
import DefaultLayout from '../layout/DefaultLayout'
import { tmaData } from '../../notes'
import CardTabs from '../components/CardTabs';

function Vaults() {

  const img = "path/to/image.jpg"; // Example image path
  const name = "Example Name"; // Example name
  const level = 1; // Example level
  const price = 99; // Example price

  console.log(tmaData.upgradesForBuy)

  return (
    <DefaultLayout >
      <div className='w-full rounded-md bg-gray-900 py-2 text-center text-2xl font-semibold text-amber-300'>Vaults</div>
      <CardTabs />
      {tmaData.upgradesForBuy.map(item => (<VaultCards key={item.id} img={item.img} name={item.name} description={item.name} level={item.level} price={item.price} />))}

    </DefaultLayout>
  )
}

export default Vaults