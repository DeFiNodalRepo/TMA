
import VaultCards from '../components/VaultCards'
import DefaultLayout from '../layout/DefaultLayout'
import { tmaData } from '../../notes'
<<<<<<< HEAD
import { useQuery } from '@tanstack/react-query';
import { getAllData } from '../api/apiCalls';
=======
import CardTabs from '../components/CardTabs';
>>>>>>> c39fd13c4779c905befe20b6504b16398be9e749

function Vaults() {

  const img = "path/to/image.jpg"; // Example image path
  const name = "Example Name"; // Example name
  const level = 1; // Example level
  const price = 99; // Example price

  console.log(tmaData.upgradesForBuy)

  const { data, isError } = useQuery({
    queryKey: ['vaults'],
    queryFn: getAllData,
  })

  console.log(data, isError)

  return (
    <DefaultLayout >
<<<<<<< HEAD
      <div className='w-full py-2 text-2xl font-semibold text-center bg-gray-900 rounded-md text-amber-300'>Vaults</div>
=======
      <div className='w-full rounded-md bg-gray-900 py-2 text-center text-2xl font-semibold text-amber-300'>Vaults</div>
      <CardTabs />
>>>>>>> c39fd13c4779c905befe20b6504b16398be9e749
      {tmaData.upgradesForBuy.map(item => (<VaultCards key={item.id} img={item.img} name={item.name} description={item.name} level={item.level} price={item.price} />))}

    </DefaultLayout>
  )
}

export default Vaults