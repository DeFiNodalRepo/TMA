
import VaultCards from '../components/VaultCards'
import DefaultLayout from '../layout/DefaultLayout'
import { tmaData } from '../../notes'
import { useQuery } from '@tanstack/react-query';
import { getAllData } from '../api/apiCalls';

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
      <div className='w-full py-2 text-2xl font-semibold text-center bg-gray-900 rounded-md text-amber-300'>Vaults</div>
      {tmaData.upgradesForBuy.map(item => (<VaultCards key={item.id} img={item.img} name={item.name} description={item.name} level={item.level} price={item.price} />))}

    </DefaultLayout>
  )
}

export default Vaults