import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';

import VaultCards from '../components/VaultCards'
import DefaultLayout from '../layout/DefaultLayout'
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

      {data.map((item, index) => (
    <motion.div
      key={item.id}
      initial={{ x: -100 }} // Start off-screen to the left
      animate={{ x: 0 }} // Move to original position
      exit={{ x: 100 }} // Slide out to the right
      transition={{ duration: 0.12 * index }}
    >
    <VaultCards
      img={item.img}
      name={item.name}
      description={item.description}
      level={item.level}
      price={item.price}
    />
  </motion.div>
))}

    </DefaultLayout>
  )
}

export default Vaults