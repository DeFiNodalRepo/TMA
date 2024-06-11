const stats = [
  { name: 'Harvesting Rate', stat: '71,897', fontColor: 'text-amber-500' },
  { name: 'Total Coins', stat: '58,700,034', fontColor: 'text-sky-500' },

]

function HeaderStats() {
  return (
    <div>
      <dl className="grid grid-cols-2 gap-1 px-4 mt-5">
        {stats.map((item) => (
          <div key={item.name} className="px-2 py-3 overflow-hidden bg-gray-900 rounded-lg shadow">
            <dt className={`text-md font-medium truncate ${item.fontColor} text-center`}>{item.name}</dt>
            <dd className="mt-1 text-base font-semibold tracking-tight text-center text-gray-300">{item.stat}{item.name === 'Harvesting Rate' ? "/hour" : null}</dd>

          </div>
        ))}
      </dl>
    </div>
  )
}

export default HeaderStats

