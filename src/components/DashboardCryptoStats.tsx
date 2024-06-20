import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { getCryptoStats } from '../api/apiCalls'
import { useQuery } from "@tanstack/react-query";

const stats = [
  { id: 1, name: 'BTC', stat: '71,897', icon: "BTC", change: '122', changeType: 'increase' },
  { id: 2, name: 'ETH', stat: '3,654', icon: "ETH", change: '5.4%', changeType: 'increase' },
  { id: 3, name: 'XRP', stat: '0.65', icon: "XRP", change: '3.2%', changeType: 'decrease' },
  { id: 4, name: 'BNB', stat: '612', icon: "BNB", change: '3.2%', changeType: 'decrease' },
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function DashboardCryptoStats() {

  const { data, isLoading, isError } = useQuery({
    queryKey: ['cryptoData'],
    queryFn: getCryptoStats,
    staleTime: 5 * 60 * 1000,
    // refetchOnMount: false,
    // gcTime: 5 * 60 * 1000
  })


  if (isLoading) {
    return <div>loading....</div>
  }

  if (isError) {
    return <div>Err</div>
  }

  console.log(data)

  return (
    <div>
      <h3 className="text-2xl font-semibold leading-6 text-gray-300">Market Move</h3>

      <dl className="mt-5 grid grid-cols-2 gap-2">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-gray-700 px-2 pb-2 pt-2 shadow"
          >
            <dt>
              <div className="absolute rounded-md">
                <img src={item.image} height={30} width={30} />
              </div>
              <p className="truncate text-center text-xl font-medium text-gray-300">{item.symbol}</p>
            </dt>
            <dd className="flex items-baseline pb-6 text-center sm:pb-7">
              <p className="text-xl font-semibold text-gray-300">{item.current_price}</p>
              <p className="ml-2 text-xl font-semibold text-gray-300">{parseFloat(item.price_change_percentage_24h).toFixed(2)}%</p>
              <p
                className={classNames(
                  item.price_change_percentage_24h > 0 ? 'text-green-600' : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              >
                {item.changeType === 'increase' ? (
                  <FaArrowUp className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                ) : (
                  <FaArrowDown className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                )}

                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                {item.change}
              </p>

            </dd>
          </div>
        ))}
      </dl>
    </div>

  )
}

export default DashboardCryptoStats