import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const stats = [
    { id: 1, name: 'BTC', stat: '71,897', icon: "BTC", change: '122', changeType: 'increase' },
    { id: 2, name: 'ETH', stat: '3,654', icon: "ETH", change: '5.4%', changeType: 'increase' },
    { id: 3, name: 'XRP', stat: '0.65', icon: "XRP", change: '3.2%', changeType: 'decrease' },
    { id: 3, name: 'BNB', stat: '612', icon: "BNB", change: '3.2%', changeType: 'decrease' },

  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

function DashboardCryptoStats() {
  return (
    <div>
      <h3 className="text-2xl font-semibold leading-6 text-gray-300">Market Move</h3>
      
      <dl className="mt-5 grid grid-cols-2 gap-2">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-gray-700 px-2 pb-2 pt-2 shadow"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <item.icon className="h-6 w-6 text-gray-300" aria-hidden="true" />
              </div>
              <p className="text-center truncate text-xl font-medium text-gray-300">{item.name}</p>
            </dt>
            <dd className="text-center flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-300">{item.stat}</p>
              <p
                className={classNames(
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              >
                {item.changeType === 'increase' ? (
                  <FaArrowUp  className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                ) : (
                  <FaArrowDown  className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
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