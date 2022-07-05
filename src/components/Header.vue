<template>
  <Popover class="relative z-10 bg-white shadow">
    <div class="px-3 md:px-6 sm:pl-9 bg-purple text-white hidden xl:block">
      <div class="flex items-center justify-between min-h-3 py-2 md:space-x-10">
        <!-- sub menu -->
        <PopoverGroup as="subnav" class="hidden md:flex space-x-12">
          <a href="#" class="inline-flex items-center text-sm font-bold text-white hover:text-orange">Merch</a>

          <Popover class="inline-flex relative" v-slot="{ open }">
            <PopoverButton
              :class="[open ? 'text-orange' : 'text-white', 'group inline-flex items-center text-sm font-bold hover:text-orange focus:outline-none']">
              <span>Locations</span>
              <ChevronDownIcon
                :class="[open ? 'text-current' : 'text-orange', 'ml-2 h-5 w-5 group-hover:text-current']"
                aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute z-10 lg:-left-9 top-full -ml-4 lg:ml-0 px-2 sm:px-0 max-w-md transform">
                <div class="rounded-lg rounded-t-none overflow-hidden shadow">
                  <div class="relative z-10 grid gap-6 px-9 py-9 bg-purple">
                    <a v-for="item in subnavLocations" :key="item.name" :href="item.href"
                      class="flex items-start hover:text-orange text-sm font-bold whitespace-nowrap">
                      {{ item.name }}
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <a href="#" class="inline-flex items-center text-sm font-bold text-white hover:text-orange">News & Events</a>
          <a href="#" class="inline-flex items-center text-sm font-bold text-white hover:text-orange">Contact</a>

          <SearchBar />
        </PopoverGroup>
        <!-- /sub menu -->

        <Socials :socials="socialList" class="space-x-6 text-white" />
      </div>
    </div>

    <div class="px-3 md:px-6">
      <div class="flex items-center justify-between md:justify-end py-1 md:py-6 space-x-4 xl:space-x-12">
        <!-- header logo -->
        <div class="-my-2 mr-auto max-w-[100px] md:max-w-[150px] lg:max-w-none flex-shrink-0">
          <a href="#">
            <span class="sr-only">Brandywine Valley SPCA</span>
            <img class="w-auto" src="@/assets/img/logo.svg" alt="Brandywine Valley SPCA" />
          </a>
        </div>
        <!-- /header logo -->

        <!-- header button mobile -->
        <Button class="xl:hidden" variant="primary" text="Donate" />
        <!-- /header button mobile -->

        <!-- menu burger -->
        <div class="inline-flex xl:hidden">
          <PopoverButton class="inline-flex items-center justify-center text-black">
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-10 w-10" aria-hidden="true" />
          </PopoverButton>
        </div>
        <!-- /menu burger -->

        <!-- main menu -->
        <PopoverGroup as="nav" class="space-x-10 hidden xl:flex">
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[open ? 'text-red' : 'text-dark', 'group inline-flex items-center text-lg font-bold hover:text-red focus:outline-none']">
              <span>For your pet</span>
              <ChevronDownIcon
                :class="[open ? 'text-current' : 'text-purple', 'ml-2 h-5 w-5 group-hover:text-current']"
                aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel
                class="absolute z-10 -ml-4 mt-2 transform px-2 max-w-md sm:px-0 lg:ml-0 lg:-left-9 after:content-[''] after:absolute after:-top-[0.5rem] after:-left-[0.5rem] after:-right-[0.5rem] after:h-[2.5rem] after:bg-white">
                <div class="rounded-lg rounded-t-none overflow-hidden shadow">
                  <div class="relative z-10 grid gap-6 px-9 pt-5 pb-9 bg-white">
                    <a v-for="item in navForYourPet" :key="item.name" :href="item.href"
                      class="flex items-start hover:text-red text-sm font-bold whitespace-nowrap">
                      {{ item.name }}
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[open ? 'text-red' : 'text-dark', 'group inline-flex items-center text-lg font-bold hover:text-red focus:outline-none']">
              <span>Need help?</span>
              <ChevronDownIcon
                :class="[open ? 'text-current' : 'text-purple', 'ml-2 h-5 w-5 group-hover:text-current']"
                aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel
                class="absolute z-10 -ml-4 mt-2 transform px-2 max-w-md sm:px-0 lg:ml-0 lg:-left-9 after:content-[''] after:absolute after:-top-[0.5rem] after:-left-[0.5rem] after:-right-[0.5rem] after:h-[2.5rem] after:bg-white">
                <div class="rounded-lg rounded-t-none overflow-hidden shadow">
                  <div class="relative z-10 grid gap-6 px-9 pt-5 pb-9 bg-white">
                    <a v-for="item in navNeedHelp" :key="item.name" :href="item.href"
                      class="flex items-start hover:text-red text-sm font-bold whitespace-nowrap">
                      {{ item.name }}
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[open ? 'text-red' : 'text-dark', 'group inline-flex items-center text-lg font-bold hover:text-red focus:outline-none']">
              <span>Get involved</span>
              <ChevronDownIcon
                :class="[open ? 'text-current' : 'text-purple', 'ml-2 h-5 w-5 group-hover:text-current']"
                aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel
                class="absolute z-10 -ml-4 mt-2 transform px-2 max-w-md sm:px-0 lg:ml-0 lg:-left-9 after:content-[''] after:absolute after:-top-[0.5rem] after:-left-[0.5rem] after:-right-[0.5rem] after:h-[2.5rem] after:bg-white">
                <div class="rounded-lg rounded-t-none overflow-hidden shadow">
                  <div class="relative z-10 grid gap-6 px-9 pt-5 pb-9 bg-white">
                    <a v-for="item in navGetInvolved" :key="item.name" :href="item.href"
                      class="flex items-start hover:text-red text-sm font-bold whitespace-nowrap">
                      {{ item.name }}
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <Popover class="relative" v-slot="{ open }">
            <PopoverButton
              :class="[open ? 'text-red' : 'text-dark', 'group inline-flex items-center text-lg font-bold hover:text-red focus:outline-none']">
              <span>About Us</span>
              <ChevronDownIcon
                :class="[open ? 'text-current' : 'text-purple', 'ml-2 h-5 w-5 group-hover:text-current']"
                aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel
                class="absolute z-10 -ml-4 mt-2 transform px-2 max-w-md sm:px-0 lg:ml-0 lg:-left-9 after:content-[''] after:absolute after:-top-[0.5rem] after:-left-[0.5rem] after:-right-[0.5rem] after:h-[2.5rem] after:bg-white">
                <div class="rounded-lg rounded-t-none overflow-hidden shadow">
                  <div class="relative z-10 grid gap-6 px-9 pt-5 pb-9 bg-white">
                    <a v-for="item in navAboutUs" :key="item.name" :href="item.href"
                      class="flex items-start hover:text-red text-sm font-bold whitespace-nowrap">
                      {{ item.name }}
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>
        <!-- /main menu -->

        <!-- header buttons -->
        <PopoverGroup as="buttons-nav" class="items-center hidden xl:flex">
          <Popover class="relative z-10" v-slot="{ open }">
            <PopoverButton class="focus:outline-none">
              <Button class="mr-9" :class="[open ? 'bg-purple hover:bg-purple' : '']" variant="primary" text="Adopt" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel
                class="absolute z-10 -ml-4 mt-[1.1rem] transform px-2 max-w-md sm:px-0 lg:ml-0 lg:left-0 after:content-[''] after:absolute after:-top-[0.5rem] after:-left-[0.5rem] after:-right-[0.5rem] after:h-[1.2rem] after:bg-white">
                <div class="rounded-lg rounded-t-none overflow-hidden shadow">
                  <div class="relative z-10 grid gap-6 px-9 pt-0 pb-9 bg-white">
                    <a v-for="item in buttonsNavAdopt" :key="item.name" :href="item.href"
                      class="flex items-start hover:text-red text-sm font-bold whitespace-nowrap">
                      {{ item.name }}
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <Popover class="relative z-10" v-slot="{ open }">
            <PopoverButton class="focus:outline-none">
              <Button :class="[open ? 'bg-red hover:bg-red border-red hover:border-red !text-white' : '']"
                variant="outline" text="Donate" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel
                class="absolute z-10 -ml-4 mt-[1.1rem] transform px-2 max-w-md sm:px-0 lg:ml-0 lg:right-0 after:content-[''] after:absolute after:-top-[0.5rem] after:-left-[0.5rem] after:-right-[0.5rem] after:h-[1.2rem] after:bg-white">
                <div class="rounded-lg rounded-t-none overflow-hidden shadow">
                  <div class="relative z-10 grid gap-6 px-9 pt-0 pb-9 bg-white">
                    <a v-for="item in buttonsNavDonate" :key="item.name" :href="item.href"
                      class="flex items-start justify-end hover:text-red text-sm font-bold whitespace-nowrap">
                      {{ item.name }}
                    </a>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
        </PopoverGroup>
        <!-- /header buttons -->
      </div>
    </div>

    <!-- mobile menu -->
    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute top-0 inset-x-0 transition transform origin-top-right xl:hidden">

        <!-- mobile menu header -->
        <div class="px-3 md:px-6 py-1 md:py-6 bg-white">
          <div class="flex items-center justify-between space-x-4 xl:space-x-12">
            <div class="-my-2 mr-auto max-w-[100px] md:max-w-[150px] lg:max-w-none flex-shrink-0">
              <a href="#">
                <span class="sr-only">Brandywine Valley SPCA</span>
                <img class="w-auto" src="@/assets/img/logo.svg" alt="Brandywine Valley SPCA" />
              </a>
            </div>
            <Button class="xl:hidden" variant="primary" text="Donate" />
            <PopoverButton class="inline-flex items-center justify-center text-black">
              <span class="sr-only">Close menu</span>
              <XIcon class="h-10 w-10" aria-hidden="true" />
            </PopoverButton>
          </div>
        </div>
        <!-- /mobile menu header -->

        <!-- mobile menu nav -->
        <div class="bg-purple divide-y divide-purple-dark">
          <nav class="divide-y divide-purple-dark text-lg font-bold text-white">
            <a v-for="item in mobileNav" :key="item.name" :href="item.href"
              class="p-3 flex items-center hover:text-orange">
              {{ item.name }}
            </a>
          </nav>

          <a class="p-3 flex items-center justify-between text-white hover:text-orange" href="#">
            <span class="text-lg font-bold">Search</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-3 mt-1" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="3">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </a>

          <Socials :socials="socialList" class="flex justify-center px-3 py-8 space-x-6 text-orange" />
        </div>
        <!-- /mobile menu nav -->

      </PopoverPanel>
    </transition>
    <!-- /mobile menu -->
  </Popover>
</template>

<script setup>
  import SearchBar from "@/components/SearchBar.vue"
  import Button from "@/components/Button.vue"
  import Socials from "@/components/Socials.vue"
  import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
  import {
    MenuIcon,
    XIcon,
  } from '@heroicons/vue/outline'
  import { ChevronDownIcon } from '@heroicons/vue/solid'

  const navForYourPet = [
    {
      name: 'Wellness clinic',
      href: '#',
    },
    {
      name: 'Clinic staff',
      href: '#',
    },
    {
      name: 'Spay & neuter',
      href: '#',
    },
    {
      name: 'Community cats',
      href: '#',
    },
    {
      name: 'Daycare & boarding',
      href: '#',
    },
    {
      name: 'Pet insurance',
      href: '#',
    },
    {
      name: 'End of life',
      href: '#',
    },
  ];
  const navNeedHelp = [
    {
      name: 'Lost/Found pets',
      href: '#',
    },
    {
      name: 'Reporting cruelty',
      href: '#',
    },
    {
      name: 'Rehoming consultation',
      href: '#',
    },
    {
      name: 'Pet food assistance',
      href: '#',
    },
    {
      name: 'Domestic violence survivors',
      href: '#',
    },
    {
      name: 'Behavior resources',
      href: '#',
    },
  ];
  const navGetInvolved = [
    {
      name: 'Volunteer',
      href: '#',
    },
    {
      name: 'Foster',
      href: '#',
    },
    {
      name: 'For kids',
      href: '#',
    },
    {
      name: 'Community service',
      href: '#',
    },
    {
      name: 'Therapy pets',
      href: '#',
    },
  ];
  const navAboutUs = [
    {
      name: 'Our impact',
      href: '#',
    },
    {
      name: 'Second chance program',
      href: '#',
    },
    {
      name: 'Animal rescue center',
      href: '#',
    },
    {
      name: 'Cat retreat',
      href: '#',
    },
    {
      name: 'Statistics',
      href: '#',
    },
  ];
  const buttonsNavAdopt = [
    {
      name: 'Adopt a dog',
      href: '#',
    },
    {
      name: 'Adopt a cat',
      href: '#',
    },
    {
      name: 'Small animals',
      href: '#',
    },
    {
      name: 'Adoption info',
      href: '#',
    },
  ];
  const buttonsNavDonate = [
    {
      name: 'Monthly gift',
      href: '#',
    },
    {
      name: 'Honor a life',
      href: '#',
    },
    {
      name: 'Wish list',
      href: '#',
    },
    {
      name: 'Corporate sponsorship',
      href: '#',
    },
    {
      name: 'Planning giving',
      href: '#',
    },
    {
      name: 'All the ways to give',
      href: '#',
    },
  ];
  const subnavLocations = [
    {
      name: 'Dover',
      href: '#',
    },
    {
      name: 'New Castle',
      href: '#',
    },
    {
      name: 'Georgetown',
      href: '#',
    },
    {
      name: 'West Chester',
      href: '#',
    },
    {
      name: 'Malvern',
      href: '#',
    },
    {
      name: 'Plymouth Meeting',
      href: '#',
    },
    {
      name: 'Animal Rescue Center',
      href: '#',
    },
    {
      name: 'Eastern Shore Pet Resort',
      href: '#',
    },
  ];
  const mobileNav = [
    {
      name: 'Adopt',
      href: '#',
    },
    {
      name: 'Donate',
      href: '#',
    },
    {
      name: 'For your pet',
      href: '#',
    },
    {
      name: 'Need help?',
      href: '#',
    },
    {
      name: 'Get involved',
      href: '#',
    },
    {
      name: 'About us',
      href: '#',
    },
    {
      name: 'Merch',
      href: '#',
    },
    {
      name: 'Locations',
      href: '#',
    },
    {
      name: 'News & events',
      href: '#',
    },
    {
      name: 'Contact',
      href: '#',
    },
  ];
  const socialList = [
    {
      url: "#",
      icon: 'facebook'
    },
    {
      url: "#",
      icon: 'instagram'
    },
    {
      url: "#",
      icon: 'twitter'
    },
    {
      url: "#",
      icon: 'tiktok'
    },
    {
      url: "#",
      icon: 'bitcoin'
    },
  ];
</script>
