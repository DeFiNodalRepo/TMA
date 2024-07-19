import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { getCryptoStats } from '../api/apiCalls'
import { useQuery } from "@tanstack/react-query";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function DashboardCryptoStats() {

  const { data, isLoading, isError } = useQuery({
    queryKey: ['cryptoData'],
    queryFn: getCryptoStats,
    staleTime: 10 * 60 * 1000,
    refetchOnMount: false,
    // gcTime: 5 * 60 * 1000
  })


  if (isLoading) {
    return <div>loading....</div>
  }

  if (isError) {
    return <div>Err</div>
  }

  return (
    <div>
      <h3 className="text-2xl leading-6 text-gray-300">Market Move</h3>

      <dl className="grid grid-cols-2 gap-2 mt-5">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative px-2 pt-2 pb-2 overflow-hidden bg-gray-700 rounded-lg shadow"
          >
            <dt>
              <div className="absolute rounded-md">
                <img src={item.image} height={30} width={30} />
              </div>
              <p className="text-xl font-medium text-center text-gray-300 truncate">{item.symbol}</p>
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
                  <FaArrowUp className="self-center flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
                ) : (
                  <FaArrowDown className="self-center flex-shrink-0 w-5 h-5 text-red-500" aria-hidden="true" />
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