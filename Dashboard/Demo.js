const stats = [
    { name: 'Total Subscribers', stat: '71,897' },
    { name: 'Avg. Open Rate', stat: '58.16%' },
    { name: 'Avg. Click Rate', stat: '24.57%' },
    { name: 'Avg. Click Rate', stat: '24.57%' },
  ]
  
  export default function Example() {
    return (
      <div>
        <h3 className="text-lg font-medium  text-gray-900">Last 30 days</h3>
        <dl className=" grid grid-cols-2 gap-6 sm:grid-cols-2">
          {stats.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
            </div>
          ))}
        </dl>
      </div>
    )
  }
  