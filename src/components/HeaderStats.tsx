const stats = [
  { name: 'Harvesting Rate', stat: '71,897', fontColor: 'text-amber-500' },
  { name: 'Total Coins', stat: '58,700,034', fontColor: 'text-sky-500' },

]

function HeaderStats() {
  return (
    <div className="w-full">
      <dl className="grid grid-cols-2 gap-2 px-4">
        {stats.map((item) => (
          <div key={item.name} className="overflow-hidden rounded-lg border border-gray-700 bg-gray-900 px-2 py-3 shadow">

            <dt className={`text-md font-medium truncate ${item.fontColor} text-center`}>{item.name}</dt>
            <dd className="mt-1 text-center text-base font-semibold tracking-tight text-gray-300">{item.stat}{item.name === 'Harvesting Rate' ? "/hour" : null}</dd>

          </div>
        ))}
      </dl>
    </div>
  )
}

export default HeaderStats

