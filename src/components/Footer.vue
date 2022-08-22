<template>
  <div class="text-white py-14 bg-purple">
    <div class="flex flex-col items-center justify-between px-4 text-center 2xl:px-20 xl:items-start xl:flex-row xl:space-x-10 xl:text-left">
      <div class="flex-shrink-0 mb-16 sm:mb-14 xl:mb-0">
        <!-- footer logo -->
        <div class="-mt-2 mb-10 sm:mb-6 mx-auto max-w-[200px] sm:max-w-full">
          <a href="#">
            <span class="sr-only">Brandywine Valley SPCA</span>
            <img
              class="w-auto"
              src="/img/logo-white.svg"
              alt="Brandywine Valley SPCA"
            />
          </a>
        </div>
        <!-- /footer logo -->
        <div class="flex space-x-10">
          <Button variant="secondary" text="Adopt" />
          <Button variant="outlineSecondary" text="Donate" />
        </div>
      </div>

      <!-- footer nav -->
      <nav class="grid grid-cols-1 mb-20 text-center sm:grid-cols-footerNav gap-y-8 sm:gap-y-3 gap-x-12 sm:mb-14 xl:mb-0 sm:text-left">
        <div
          v-for="item in footerNav"
          :key="item.name"
        >
          <a
            :href="item.href"
            class="text-lg font-bold transition-colors  hover:text-orange"
          >
            {{ item.name }}
          </a>
        </div>
      </nav>
      <!-- /footer nav -->

      <div class="flex-shrink-0 w-72">
        <Socials
          :socials="socialList"
          class="justify-between mb-16 space-x-6 sm:mb-7"
          iconSize="w-7 h-7"
        />
        <FormSignUp/>
      </div>
    </div>
  </div>

  <div class="font-bold text-center text-white py-7 sm:py-3 bg-purple-dark text-xxs">
    <div class="px-4 2xl:px-20">
      <p>All rights reserved. © 2022 Brandywine Valley SPCA.<br class="sm:hidden"> <a class="underline transition-colors hover:text-orange" href="#">Terms of Use</a> & <a class="underline transition-colors hover:text-orange" href="#">Privacy Policy</a></p>
    </div>
  </div>
</template>

<script setup>
  import Button from "@/components/Button.vue"
  import Socials from "@/components/Socials.vue"
  import FormSignUp from "@/components/FormSignUp.vue";

  const footerNav = [
    {
      name: 'About us',
      href: '#',
    },
    {
      name: 'Need help?',
      href: '#',
    },
    {
      name: 'Events',
      href: '#',
    },
    {
      name: 'Daycare & boarding',
      href: '#',
    },
    {
      name: 'Foster',
      href: '#',
    },
    {
      name: 'Kitty cam',
      href: '#',
    },
    {
      name: 'Spay & neuter',
      href: '#',
    },
    {
      name: 'Careers',
      href: '#',
    },
    {
      name: 'Resources',
      href: '#',
    },
    {
      name: 'Lost & found pets',
      href: '#',
    },
    {
      name: 'Locations',
      href: '#',
    },
    {
      name: 'End of life',
      href: '#',
    }
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
