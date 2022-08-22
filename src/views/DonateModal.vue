<template>
  <Modal :button="{ text: 'Donate' }">
    <div class="mx-auto max-w-[1140px]">
      <!-- mobile version -->
      <div class="block md:hidden">
        <form class="max-w-md mx-auto">
          <div v-if="formPage === 1">
            <div class="mb-4 text-sm text-black">
              <h4 class="mb-2 text-lg font-bold">
                Great or small, all donations are appreciated
              </h4>
              <p>Select donation amount and frequency</p>
            </div>
            <div class="flex -mx-3 mb-7">
              <div class="w-2/5 px-3">
                <Select
                  variant="outline"
                  size="xs"
                  :options="[
                    {
                      value: 25,
                      label: '$25',
                      selected: true
                    },
                    {
                      value: 50,
                      label: '$50'
                    },
                    {
                      value: 75,
                      label: '$75'
                    },
                    {
                      value: 100,
                      label: '$100'
                    },
                    {
                      value: 250,
                      label: '$250'
                    },
                    {
                      value: 500,
                      label: '$500'
                    }
                  ]"
                />
              </div>
              <div class="w-3/5 px-3">
                <Select
                  variant="outline"
                  size="xs"
                  :options="[
                    {
                      value: 1,
                      label: 'Monthly',
                      selected: true
                    },
                    {
                      value: 2,
                      label: 'Weekly'
                    }
                  ]"
                />
              </div>
            </div>
            <h5 class="mb-1 text-lg font-bold tracking-wide text-black">
              Contact Info
            </h5>
            <div class="mb-2">
              <Input label="First Name*" id="fn-mob" />
            </div>
            <div class="mb-2">
              <Input label="Last Name*" id="ln-mob" />
            </div>
            <div class="mb-2">
              <Input label="Email*" id="email-mob" />
            </div>
            <div class="mb-8">
              <Input label="Phone" id="phone-mob" />
            </div>
            <div class="text-center">
              <Button
                as="button"
                type="button"
                text="Next"
                variant="primary"
                icon="arrowRight"
                class="min-w-[105px]"
                @click.prevent="formPage++"
              />
            </div>
          </div>
          <div v-if="formPage === 2">
            <h5 class="mb-1 text-lg font-bold tracking-wide text-black">
              Billing Info
            </h5>
            <div class="mb-2">
              <Input label="Address*" id="address-mob" />
            </div>
            <div class="flex mb-2 -mx-2">
              <div class="w-3/5 px-2">
                <Select :options="countries" size="xs" inputLabel="Country*" />
              </div>
              <div class="w-2/5 px-1">
                <Select :options="states" size="xs" inputLabel="State*" />
              </div>
            </div>
            <div class="mb-2">
              <Input label="City*" id="city-mob" />
            </div>
            <div class="flex mb-2 -mx-2">
              <div class="w-2/3 px-2">
                <Input label="Zip Code*" id="zip-mob" />
              </div>
            </div>
            <div class="mb-7">
              <Input type="textarea" label="Comments" id="comments-mob" />
            </div>
            <div class="mb-7">
              <Checkbox label="I’m not a robot (that I know of)" />
            </div>
            <div class="text-center">
              <Button
                text="Submit"
                as="button"
                type="button"
                variant="primary"
                class="min-w-[105px]"
              />
            </div>
          </div>
        </form>
      </div>

      <!-- desktop version -->
      <div class="hidden md:block">
        <div class="flex flex-col -mx-4 mb-11 lg:-mx-7 lg:flex-row">
          <div class="px-4 lg:w-1/2 lg:px-7">
            <div
              class="max-w-md mx-auto mb-5 overflow-hidden rounded-lg shadow lg:mb-0 lg:max-w-full"
            >
              <img :src="img" alt="puppy" class="w-full" />
            </div>
          </div>
          <div class="px-4 lg:w-1/2 lg:px-7">
            <h4 class="mb-3 font-bold text-black text-1xl">
              Great or small, all donations are appreciated
            </h4>
            <div class="pr-5 text-sm">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur in dapibus nisl. Donec at libero eget odio lacinia
                aliquam non eu arcu. Suspendisse potenti. Pellentesque eu orci
                nisi. Pellentesque finibus lorem dignissim bibendum pretium.
                Maecenas efficitur varius feugiat. Vestibulum eu mi ac Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
                dapibus nisl. Donec at libero eget odio lacinia aliquam non eu
                arcu. Suspendisse potenti. Pellentesque eu orci nisi.
                Pellentesque finibus lorem dignissim bibendum pretium. Maecenas
                efficitur varius feugiat.
              </p>
            </div>
          </div>
        </div>
        <form>
          <div class="flex -mx-4 lg:-mx-7">
            <div class="w-1/2 px-4 lg:px-7">
              <h4 class="mb-2 font-bold text-black text-1xl">
                Step 1 - Select from these suggested amounts
              </h4>
              <p class="mb-8 text-sm">
                Or enter a custom amount in the form to the right
              </p>
            </div>
            <div class="w-1/2 px-4 lg:px-7">
              <h4 class="mb-2 font-bold text-black text-1xl">
                Step 2 - Enter your information
              </h4>
              <p class="mb-5 text-sm">Required fields are indicated with a *</p>
            </div>
          </div>
          <div class="flex -mx-4 lg:-mx-7">
            <div class="w-1/2 px-4 lg:px-7">
              <RadioGroup v-model="selectedAmount" name="selectedAmount">
                <RadioGroupLabel class="sr-only"
                  >Donation amount</RadioGroupLabel
                >
                <RadioGroupOption
                  v-for="amount in amounts"
                  :key="amount.description"
                  :value="amount"
                  v-slot="{ checked }"
                  class="focus:outline-none"
                >
                  <div
                    class="mb-[30px] cursor-pointer rounded-2xl border-2 border-transparent p-[20px] text-black shadow lg:px-[30px] lg:py-[25px]"
                    :class="[checked ? 'border-orange' : '']"
                  >
                    <div class="flex">
                      <div class="mr-[16px] w-[28px] flex-shrink-0">
                        <BaseIcon
                          v-show="checked"
                          name="checkIconChecked"
                          class="h-7 w-7"
                        />
                        <BaseIcon
                          v-show="!checked"
                          name="checkIcon"
                          class="h-7 w-7"
                        />
                      </div>
                      <div>
                        <RadioGroupLabel
                          as="span"
                          class="font-bold leading-none text-1xl"
                        >
                          ${{ amount.value }}
                        </RadioGroupLabel>
                        <RadioGroupDescription as="p" class="text-sm">
                          {{ amount.description }}
                        </RadioGroupDescription>
                      </div>
                    </div>
                  </div>
                </RadioGroupOption>
              </RadioGroup>
            </div>
            <div class="w-1/2 px-4 lg:px-7">
              <div class="max-w-[404px]">
                <div class="mb-7">
                  <h5 class="mb-1 text-lg font-bold tracking-wider">
                    Donation Summary
                  </h5>
                  <div class="flex mb-6 -mx-3">
                    <div class="w-1/2 px-3">
                      <div>
                        <Input
                          placeholder="$25.00"
                          label="Amount"
                          id="amount"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Checkbox
                      class="items-center"
                      label="Show my support by making this a monthly donation"
                    />
                  </div>
                </div>
                <div class="mb-7">
                  <h5 class="mb-1 text-lg font-bold tracking-wider">
                    Contact Info
                  </h5>
                  <div class="flex mb-2 -mx-3">
                    <div class="w-1/2 px-3">
                      <div>
                        <Input label="First Name*" id="first-name" />
                      </div>
                    </div>
                    <div class="w-1/2 px-3">
                      <div>
                        <Input label="Last Name*" id="last-name" />
                      </div>
                    </div>
                  </div>
                  <div class="mb-2">
                    <Input label="Email*" id="email" />
                  </div>
                  <div>
                    <Input label="Phone" id="phone" />
                  </div>
                </div>
                <div class="mb-7">
                  <h5 class="mb-1 text-lg font-bold tracking-wider">
                    Billing Info
                  </h5>
                  <div>
                    <Input label="Address*" id="address" />
                  </div>
                  <div class="flex mb-2 -mx-3">
                    <div class="w-1/2 px-3">
                      <Select :options="countries" inputLabel="Country*" />
                    </div>
                    <div class="w-1/2 px-3">
                      <Select :options="states" inputLabel="State*" />
                    </div>
                  </div>

                  <div class="flex mb-2 -mx-3">
                    <div class="w-1/2 px-3">
                      <div>
                        <Input label="City*" id="city" />
                      </div>
                    </div>
                    <div class="w-1/2 px-3">
                      <div>
                        <Input label="Zip Code*" id="zip-code" />
                      </div>
                    </div>
                  </div>
                  <div class="mb-7">
                    <Input type="textarea" label="Comments" id="comments" />
                  </div>
                  <div class="mb-12">
                    <Checkbox
                      class="items-center"
                      label="I’m not a robot (that I know of)"
                    />
                  </div>
                  <div>
                    <Button
                      text="Submit"
                      as="button"
                      type="button"
                      variant="primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </Modal>
</template>

<script setup>
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
import Input from "@/components/Input.vue";
import Checkbox from "@/components/Checkbox.vue";
import Select from "@/components/Select.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import Button from "@/components/Button.vue";

import img from "/img/donate-img01.jpg";
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  RadioGroupDescription
} from "@headlessui/vue";

const amounts = [
  {
    value: 25.0,
    description: "This donation feeds two orphaned animals for 30 days"
  },
  {
    value: 50.0,
    description:
      "Your contribution provides vaccinations and flea treatments for four dogs."
  },
  {
    value: 75.0,
    description: "Your contribution vaccinates four cats for feline leukemia."
  },
  {
    value: 100.0,
    description:
      "This donation helps control pet overpopulation by neutering two cats."
  },
  {
    value: 250.0,
    description:
      "This donation helps control pet overpopulation by neutering two cats."
  },
  {
    value: 500.0,
    description: "Will cover our costs to help find 2 dogs or cats a new home."
  }
];
const countries = [
  { value: 4, label: "Uganda", selected: false },
  {
    value: 1,
    label: "United States",
    selected: true
  },
  { value: 2, label: "United Kingdom", selected: false },
  { value: 3, label: "Ukraine", selected: false }
];

const states = [
  { value: 0, label: "State", selected: true },
  {
    value: 1,
    label: "State 1",
    selected: false
  },
  { value: 2, label: "State 2", selected: false },
  { value: 3, label: "State 3", selected: false }
];
const selectedAmount = ref(amounts[0]);
const formPage = ref(1);
</script>
