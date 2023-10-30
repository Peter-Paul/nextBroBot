export default function Example() {
    return (
      <div>
        <h3 className="text-lg font-medium text-gray-900">Last 30 days</h3>
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-2">
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="truncate text-2xl font-medium text-blue-700">Recent Signals
            </dt>
            <dd className="mt-1 text-2xl font-bold tracking-tight text-green-100">ETH 5%</dd>
          </div>
          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
            <dt className="text-2xl font-medium text-green-400">New Coin Launch</dt>
            <dd className="mt-1 text-2xl font-bold tracking-tight text-green-100">Zelda Token</dd>
          </div>

          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="text-2xl font-medium text-green-400">Market Insights</dt>
          <dd className="mt-1 text-2xl font-bold tracking-tight text-green-100">(BTC) ETF Approval Expected this year</dd>
        </div>

          <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="text-2xl font-medium text-green-400">Profit/Loss</dt>
          <dd className="mt-1 text-2xl font-bold tracking-tight text-green-100">+$500 Profit 
          <p>last 24 hours</p></dd>
        </div>
         
        </dl>
      </div>
    );
  }
  