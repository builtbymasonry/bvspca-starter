<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-black-light">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-2xl sm:text-3xl font-bold text-white">
          With your help, we can reach our goals!
        </h2>
      </div>
      <dl
        class="mt-10 text-center sm:mx-auto sm:grid sm:max-w-3xl sm:grid-cols-3 sm:gap-8"
      >
        <div class="flex flex-col">
          <dt
            class="order-2 mt-3 text-lg font-bold leading-6 text-white"
          >
            Placements
            <span class="block mt-1 text-sm font-bold text-gray-light">
              Goal: 16,000
            </span>
          </dt>
          <dd class="order-1 text-5xl font-bold text-orange">2,034</dd>
        </div>
        <div class="mt-10 flex flex-col sm:mt-0">
          <dt
            class="order-2 mt-3 text-lg  font-bold leading-6 text-white"
          >
            Spay/ Neuter
            <span class="block mt-1 text-sm font-bold text-gray-light">
              Goal: 19,000
            </span>
          </dt>
          <dd class="order-1 text-5xl font-bold text-orange">1,413</dd>
        </div>
        <div class="mt-10 flex flex-col sm:mt-0">
          <dt
            class="order-2 mt-3 text-lg  font-bold leading-6 text-white"
          >
            Live release rate
            <span class="block mt-1 text-sm font-bold text-gray-light">
              Goal: 95%
            </span>
          </dt>
          <dd class="order-1 text-5xl font-bold text-orange">95%</dd>
        </div>
      </dl>
    </div>
  </div>
</template>
