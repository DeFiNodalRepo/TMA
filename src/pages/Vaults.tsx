import VaultCards from '../components/VaultCards'
import DefaultLayout from '../layout/DefaultLayout'

import { useQuery } from '@tanstack/react-query';
import { getVaults } from '../api/apiCalls';
import CardTabs from '../components/CardTabs';

function Vaults() {

  const img = "path/to/image.jpg"; // Example image path
  const name = "Example Name"; // Example name
  const level = 1; // Example level
  const price = 99; // Example price


  const { data, isLoading, isError } = useQuery({
    queryKey: ['vaults'],
    queryFn: getVaults,
  })

  console.log(data)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error occurred</div>
  }

  return (
    <DefaultLayout >

      <div className='w-full py-2 text-2xl font-semibold text-center bg-gray-900 rounded-md text-amber-300'>Vaults</div>

      <CardTabs />

      {data.map(item => (<VaultCards key={item.id} img={item.img} name={item.name} description={item.name} level={item.level} price={item.price} />))}

    </DefaultLayout>
  )
}

export default Vaults