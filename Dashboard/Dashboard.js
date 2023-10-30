import React from 'react'
import Chart from './Chart'
import Table from './Table'
import Table2 from './Table2'
const Dashboard = () => {
  return (
    <main class="p-6 sm:p-10 space-y-6">
    <div class="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
    <div class="mr-6">

      <h1 class="text-4xl text-white font-semibold mb-2">BRO BOT DASHBOARD</h1>
     
    </div>
   
  </div>
  <h1 className='text-white text-2xl'>Recent Trades</h1>
  <section class="grid md:grid-cols-3 xl:grid-cols-4 gap-6">

  <div class="flex items-center p-8 bg-white shadow rounded-lg">
    <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
    <img
    className="h-10 w-10 rounded-full"
    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    alt=""
  />
    </div>
    <div>
      <span class="block text-2xl font-bold">Alex</span>
      <span class=" font-bold text-xl text-green-900">+$1000</span>
    </div>
  </div>
  <div class="flex items-center p-8 bg-white shadow rounded-lg">
    <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
    <img
    className="h-10 w-10 rounded-full"
    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
    alt=""
  />
    </div>
    <div>
      <span class="block text-2xl font-bold">Jenny</span>
      <span class=" font-bold text-xl text-green-500">-$500</span>
    </div>
  </div>
  <div class="flex items-center p-8 bg-white shadow rounded-lg">
    <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
    <img
    className="h-10 w-10 rounded-full"
    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww"
    alt=""
  />
    </div>
    <div>
      <span class="block text-2xl font-bold">Mike</span>
     
      <span class="font-bold text-xl text-green-500">+$1200</span>
    </div>
  </div>

  
  
</section>

<section class="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 pt-5 xl:grid-flow-col gap-6">
  <div class="flex flex-col md:col-span-2 md:row-span-2 w-[300vh] shadow rounded-lg pt-4">
    <Chart />
   
  </div>

 

  <div class="row-span-3 rounded-xl"></div>
  
  <div class="row-span-3">

  </div>
</section>


    </main>
  )
}

export default Dashboard
