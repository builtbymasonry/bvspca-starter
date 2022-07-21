<template>
  <Popover v-slot="{open}" class="relative z-10 bg-white shadow">
    <!-- upper header bar -->
    <div
      class="min-h-3 bg-purple hidden items-center px-3 py-2 text-white md:px-6 xl:flex"
    >
      <PopoverGroup as="div" class="mr-12 hidden space-x-12 xl:flex">
        <div v-for="item in upperNav" :key="item.label">
          <Popover
            v-if="item.drop"
            class="relative inline-flex"
            v-slot="{ open }"
          >
            <PopoverButton
              :class="[
                open ? 'text-orange' : 'text-white',
                'inline-flex items-center text-sm font-bold transition-colors focus:outline-none'
              ]"
            >
              <span>{{ item.label }}</span>
              <BaseIcon
                name="angleDown"
                :class="[
                  open ? 'rotate-180' : '',
                  'ml-3 mt-1 h-[10px] w-[10px]'
                ]"
              />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div>
                <PopoverPanel
                  class="absolute top-full z-10 -ml-4 max-w-md transform px-2 sm:px-0 lg:-left-9 lg:ml-0"
                >
                  <div class="overflow-hidden rounded-lg rounded-t-none shadow">
                    <div
                      class="bg-purple relative z-10 grid gap-6 px-9 py-9 pt-6"
                    >
                      <a
                        v-for="dropItem in item.drop"
                        :key="dropItem.label"
                        :href="dropItem.url"
                        class="hover:text-orange flex items-start whitespace-nowrap text-sm font-bold"
                      >
                        {{ dropItem.label }}
                      </a>
                    </div>
                  </div>
                </PopoverPanel>
              </div>
            </transition>
          </Popover>
          <a
            v-else
            :href="item.url"
            class="hover:text-orange inline-flex items-center text-sm font-bold text-white"
            >{{ item.label }}</a
          >
        </div>
      </PopoverGroup>
      <SearchBar />
      <Socials
        :socials="socialList"
        class="ml-auto space-x-6"
        variant="white"
      />
    </div>
    <!-- /upper header bar -->

    <!-- main header bar -->
    <div class="px-3 md:px-6">
      <div
        class="flex items-center justify-between space-x-4 py-1 md:justify-end md:py-5 xl:space-x-14"
      >
        <!-- header logo -->
        <div
          class="-my-2 mr-auto max-w-[100px] flex-shrink-0 md:max-w-[150px] lg:max-w-none"
        >
          <a href="#">
            <span class="sr-only">Brandywine Valley SPCA</span>
            <img
              class="w-auto"
              src="@/assets/img/logo.svg"
              alt="Brandywine Valley SPCA"
            />
          </a>
        </div>
        <!-- /header logo -->

        <!-- header button mobile -->
        <Button
          class="xl:hidden shadow-none"
          variant="primary"
          text="Donate"
        />
        <!-- /header button mobile -->

        <!-- main menu burger -->
        <div class="inline-flex xl:hidden">
          <PopoverButton
            class="inline-flex items-center justify-center text-black"
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon
              class="h-10 w-10"
              :class="open ? 'hidden' : ''"
              aria-hidden="true"
            />
            <XIcon
              class="h-10 w-10"
              :class="open ? '' : 'hidden'"
              aria-hidden="true"
            />
          </PopoverButton>
        </div>
        <!-- /main menu burger -->

        <!-- main menu -->
        <PopoverGroup as="nav" class="hidden space-x-10 xl:flex">
          <div v-for="item in lowerNav" :key="item.label">
            <Popover class="relative" v-slot="{ open }">
              <PopoverButton
                :class="[
                  open ? 'text-red' : 'text-dark',
                  'hover:text-red group inline-flex items-center text-lg font-bold focus:outline-none'
                ]"
              >
                <span>{{ item.label }}</span>
                <BaseIcon
                  name="angleDown"
                  :class="[
                    open ? 'fill-red rotate-180' : '',
                    'text-purple ml-3 mt-1 h-[10px] w-[10px]'
                  ]"
                />
              </PopoverButton>

              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 translate-y-1"
              >
                <div>
                  <PopoverPanel
                    class="absolute z-10 -ml-4 mt-2 max-w-md transform px-2 after:absolute after:-top-[0.78rem] after:-left-[0.5rem] after:-right-[0.5rem] after:h-[2.5rem] after:bg-white after:content-[''] sm:px-0 lg:-left-9 lg:ml-0"
                  >
                    <div
                      class="overflow-hidden rounded-lg rounded-t-none shadow"
                    >
                      <div
                        class="relative z-10 grid gap-6 bg-white px-9 pt-5 pb-9"
                      >
                        <a
                          v-for="dropItem in item.drop"
                          :key="dropItem.name"
                          :href="dropItem.url"
                          class="hover:text-red flex items-start whitespace-nowrap text-sm font-bold"
                        >
                          {{ dropItem.label }}
                        </a>
                      </div>
                    </div>
                  </PopoverPanel>
                </div>
              </transition>
            </Popover>
          </div>
        </PopoverGroup>
        <!-- /main menu -->

        <!-- header buttons -->
        <PopoverGroup as="div" class="hidden items-center xl:flex">
          <Popover
            v-for="button in navAdopt"
            :key="button.label"
            class="relative z-10"
            v-slot="{ open }"
          >
            <PopoverButton class="focus:outline-none">
              <Button
                class="mr-9"
                :class="[open ? 'bg-purple hover:bg-purple' : '']"
                variant="primary"
                :text="button.label"
              />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div>
                <PopoverPanel
                  class="absolute z-10 -ml-4 mt-[1.1rem] max-w-md transform px-2 after:absolute after:-top-[0.78rem] after:-left-[0.5rem] after:-right-[0.5rem] after:h-[1.2rem] after:bg-white after:content-[''] sm:px-0 lg:left-0 lg:ml-0"
                >
                  <div class="overflow-hidden rounded-lg rounded-t-none shadow">
                    <div
                      class="relative z-10 grid gap-6 bg-white px-9 pt-0 pb-9"
                    >
                      <a
                        v-for="item in button.drop"
                        :key="item.label"
                        :href="item.url"
                        class="hover:text-red flex items-start whitespace-nowrap text-sm font-bold"
                      >
                        {{ item.label }}
                      </a>
                    </div>
                  </div>
                </PopoverPanel>
              </div>
            </transition>
          </Popover>

          <Popover
            v-for="button in navDonate"
            :key="button.label"
            class="relative z-10"
            v-slot="{ open }"
          >
            <PopoverButton class="focus:outline-none">
              <Button
                :class="[
                  open
                    ? 'bg-red hover:bg-red border-red hover:border-red !text-white'
                    : ''
                ]"
                variant="outline"
                :text="button.label"
              />
            </PopoverButton>

            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div>
                <PopoverPanel
                  class="absolute z-10 -ml-4 mt-[1.1rem] max-w-md transform px-2 after:absolute after:-top-[0.78rem] after:-left-[0.5rem] after:-right-[0.5rem] after:h-[1.2rem] after:bg-white after:content-[''] sm:px-0 lg:right-0 lg:ml-0"
                >
                  <div class="overflow-hidden rounded-lg rounded-t-none shadow">
                    <div
                      class="relative z-10 grid gap-6 bg-white px-9 pt-0 pb-9"
                    >
                      <a
                        v-for="item in button.drop"
                        :key="item.label"
                        :href="item.url"
                        class="hover:text-red flex items-start justify-end whitespace-nowrap text-sm font-bold"
                      >
                        {{ item.label }}
                      </a>
                    </div>
                  </div>
                </PopoverPanel>
              </div>
            </transition>
          </Popover>
        </PopoverGroup>
        <!-- /header buttons -->
      </div>
    </div>
    <!-- /main header bar -->

    <DonateBar />

    <!-- mobile menu -->
    <transition name="opacity">
      <div>
        <PopoverPanel
          focus
          class="absolute inset-x-0 top-[48px] md:top-[90px] lg:top-[100px] origin-top-right transform transition xl:hidden"
        >
          <!-- mobile menu nav -->
          <div class="bg-purple">
            <nav class="text-lg font-bold text-white">
              <div v-for="item in navMobile" :key="item.label">
                <a
                  v-show="activeMobileDrop === null"
                  v-on="{ click: item.drop ? handleNavClick : null }"
                  :id="item.drop ? generateId(item.label) : null"
                  :href="item.url"
                  class="hover:text-orange border-purple-dark flex cursor-pointer items-center border-b-[1px] p-3 transition-colors"
                >
                  {{ item.label }}
                  <BaseIcon
                    v-if="item.drop"
                    name="arrowRight"
                    class="text-orange ml-auto mt-1 inline-flex h-3 w-3"
                  />
                </a>
                <ul
                  v-show="activeMobileDrop === generateId(item.label)"
                  class="divide-purple-dark divide-y text-lg font-bold text-white"
                >
                  <li v-for="subItem in item.drop" :key="subItem.label">
                    <a
                      :href="subItem.url"
                      class="hover:text-orange flex items-center p-3"
                      >{{ subItem.label }}</a
                    >
                  </li>
                </ul>
              </div>

              <!-- mobile search bar -->
              <a
                v-show="activeMobileDrop === null"
                @click="handleNavClick"
                :id="'SearchBar'"
                class="hover:text-orange border-purple flex cursor-pointer select-none items-center justify-between border-b-[1px] p-3 transition-colors"
              >
                <span>Search</span>
                <BaseIcon name="search" class="text-orange h-3 w-3" />
              </a>
              <div
                class="px-7 pt-5 pb-14"
                v-show="activeMobileDrop === 'SearchBar'"
              >
                <h4 class="mb-3 text-center text-lg font-bold text-white">
                  Search
                </h4>
                <div
                  class="relative mx-auto flex w-full max-w-[450px] items-center justify-center rounded-full border-2 border-white"
                >
                  <input
                    class="placeholder:text-gray-light w-full border-none bg-transparent px-5 py-3 text-sm font-normal text-white focus:ring-transparent"
                    type="text"
                    autocomplete="off"
                    spellcheck="false"
                    aria-live="polite"
                    placeholder="Hello, is it me you’re looking for?"
                  />
                  <button
                    aria-label="search"
                    class="text-orange mr-4"
                    type="submit"
                  >
                    <BaseIcon name="search" class="text-orange h-5 w-5" />
                  </button>
                </div>
              </div>
              <!-- /mobile search bar -->
            </nav>

            <div
              v-show="activeMobileDrop !== null"
              class="bg-purple-medium py-2 text-center"
            >
              <ButtonLink
                class="text-white"
                reverse
                text="Back to main menu"
                @click="handleDropClose"
              />
            </div>

            <Socials
              :socials="socialList"
              class="flex justify-center space-x-8 px-3 py-8"
              iconSize="w-[25px] h-[25px]"
              iconShadow
            />
          </div>
          <!-- /mobile menu nav -->
        </PopoverPanel>
      </div>
    </transition>
    <!-- /mobile menu -->
  </Popover>
</template>

<script setup>
import { ref } from "vue";

import SearchBar from "@/components/SearchBar.vue";
import DonateBar from "@/components/DonateBar.vue";
import Button from "@/components/Button.vue";
import ButtonLink from "@/components/ButtonLink.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import Socials from "@/components/Socials.vue";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel
} from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";

const activeMobileDrop = ref(null);

const handleDropClose = (e) => {
  e.preventDefault();
  activeMobileDrop.value = null;
  scrollToTop();
};

const handleNavClick = (e) => {
  e.preventDefault();
  activeMobileDrop.value = e.currentTarget.id;
  scrollToTop();
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const generateId = (str) =>
  str
    .split(" ")
    .map(
      (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    )
    .join()
    .replace(/[^a-zA-Z]/g, "");

const upperNav = [
  {
    label: "Merch",
    url: "#!"
  },
  {
    label: "Locations",
    drop: [
      {
        label: "Dover",
        url: "#!"
      },
      {
        label: "New Castle",
        url: "#!"
      },
      {
        label: "Georgetown",
        url: "#!"
      },
      {
        label: "West Chester",
        url: "#!"
      },
      {
        label: "Malvern",
        url: "#!"
      },
      {
        label: "Plymouth Meeting",
        url: "#!"
      },
      {
        label: "Animal Rescue Center",
        url: "#!"
      },
      {
        label: "Eastern Shore Pet Resort",
        url: "#!"
      }
    ]
  },
  {
    label: "News & Events",
    url: "#!"
  },
  {
    label: "Contact",
    url: "#!"
  }
];

const lowerNav = [
  {
    label: "For your pet",
    drop: [
      {
        label: "Wellness clinic",
        url: "#!"
      },
      {
        label: "Clinic staff",
        url: "#!"
      },
      {
        label: "Spay & neuter",
        url: "#!"
      },
      {
        label: "Community cats",
        url: "#!"
      },
      {
        label: "Daycare & boarding",
        url: "#!"
      },
      {
        label: "Pet insurance",
        url: "#!"
      },
      {
        label: "End of life",
        url: "#!"
      }
    ]
  },
  {
    label: "Need help?",
    drop: [
      {
        label: "Lost/Found pets",
        url: "#!"
      },
      {
        label: "Reporting cruelty",
        url: "#!"
      },
      {
        label: "Rehoming consultation",
        url: "#!"
      },
      {
        label: "Pet food assistance",
        url: "#!"
      },
      {
        label: "Domestic violence survivors",
        url: "#!"
      },
      {
        label: "Behavior resources",
        url: "#!"
      }
    ]
  },
  {
    label: "Get involved",
    drop: [
      {
        label: "Volunteer",
        url: "#!"
      },
      {
        label: "Foster",
        url: "#!"
      },
      {
        label: "For kids",
        url: "#!"
      },
      {
        label: "Community service",
        url: "#!"
      },
      {
        label: "Therapy pets",
        url: "#!"
      }
    ]
  },
  {
    label: "About us",
    drop: [
      {
        label: "Our impact",
        url: "#!"
      },
      {
        label: "Second chance program",
        url: "#!"
      },
      {
        label: "Animal rescue center",
        url: "#!"
      },
      {
        label: "Cat retreat",
        url: "#!"
      },
      {
        label: "Statistics",
        url: "#!"
      }
    ]
  }
];

const navAdopt = [
  {
    label: "Adopt",
    drop: [
      {
        label: "Adopt a dog",
        url: "#!"
      },
      {
        label: "Adopt a cat",
        url: "#!"
      },
      {
        label: "Small animals",
        url: "#!"
      },
      {
        label: "Adoption info",
        url: "#!"
      }
    ]
  }
];

const navDonate = [
  {
    label: "Donate",
    drop: [
      {
        label: "Monthly gift",
        url: "#!"
      },
      {
        label: "Honor a life",
        url: "#!"
      },
      {
        label: "Wish list",
        url: "#!"
      },
      {
        label: "Corporate sponsorship",
        url: "#!"
      },
      {
        label: "Planning giving",
        url: "#!"
      },
      {
        label: "All the ways to give",
        url: "#!"
      }
    ]
  }
];

const navMobile = [...navAdopt, ...navDonate, ...lowerNav, ...upperNav];

const socialList = [
  {
    url: "#",
    icon: "facebook"
  },
  {
    url: "#",
    icon: "instagram"
  },
  {
    url: "#",
    icon: "twitter"
  },
  {
    url: "#",
    icon: "tiktok"
  },
  {
    url: "#",
    icon: "bitcoin"
  }
];
</script>
