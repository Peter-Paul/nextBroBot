import React from 'react';

const Card = () => {
  return (
    <div>
      <section className="py-12 bg-gradient-to-b from-[#08201D] relative to-[#000000] sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="text-center">
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj">
                BRO Bot: Your Ultimate Trading Ally
              </h2>
            </div>

            <div className="mt-8 text-center md:mt-16 md:order-3">
              <a
                href="#"
                title=""
                className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
              >
                Check all xxxx reviews
              </a>
            </div>

            <div className="relative mt-10 md:mt-24 md:order-2">
              <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                <div
                  className="max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
                    height: '50vh',
                    width: '50vw',
                  }}
                ></div>
              </div>

              <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto md:max-w-none lg:gap-10">
                <div className="flex flex-col overflow-hidden shadow-xl w-full max-w-sm mx-auto">
                  <div className="flex-1 p-4 lg:py-8 lg:px-7 bg-black text-white rounded-3xl">
                    <div className="flex-1">
                      <p className="text-lg leading-relaxed text-white font-pj">
                        🚀 Prime Signals: Our core promise is delivering the best trading signals in the industry. We&apos;re not just another trading bot; we are THE benchmark when it comes to accurate and timely signals.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden shadow-xl w-full max-w-sm mx-auto">
                  <div className="flex-1 p-4 lg:py-8 lg:px-7 bg-black text-white rounded-3xl">
                    <div className="flex-1">
                      <p className="text-lg leading-relaxed text-white font-pj">
                        🎯 Auto Sniping: With our advanced algorithms, snipe new tokens the moment they hit the market, ensuring you&apos;re always ahead of the crowd.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden shadow-xl w-full max-w-sm mx-auto">
                  <div className="flex-1 p-4 lg:py-8 lg:px-7 bg-black text-white rounded-3xl">
                    <div className="flex-1">
                      <p className="text-lg leading-relaxed text-white font-pj">
                        💼 Manual Buying & Selling: Full control in your hands. Decide when to buy or sell based on the impeccable signals provided by BRO Bot.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden shadow-xl w-full max-w-sm mx-auto">
                  <div className="flex-1 p-4 lg:py-8 lg:px-7 bg-black text-white rounded-3xl">
                    <div className="flex-1">
                      <p className="text-lg leading-relaxed text-white font-pj">
                        ⚙️ Limit Orders Perfected: Set your buy and sell limits with precision:
                      </p>
                      <ul className="list-disc pl-6">
                        <li>Buy Limits: Decide how much ETH to spend with adjustable slippage.</li>
                        <li>Sell Limits: Fine-tune your strategy with options like take profit, stop loss, trailing stop loss, and tailored slippage.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden shadow-xl w-full max-w-sm mx-auto">
                  <div className="flex-1 p-4 lg:py-8 lg:px-7 bg-black text-white rounded-3xl">
                    <div className="flex-1">
                      <p className="text-lg leading-relaxed text-white font-pj">
                        🚧 Unlaunched Token Orders: Why wait for the launch? Position yourself early by setting orders for tokens even before they launch.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
