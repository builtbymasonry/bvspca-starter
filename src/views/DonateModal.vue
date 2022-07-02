<template>
  <div>
    <Modal>
      <!-- mobile version -->
      <div class="block md:hidden">
        <form class="mx-auto max-w-md">
          <div v-if="formPage === 1">
            <div class="mb-4 text-sm text-black">
              <h4 class="mb-2 text-lg font-bold">
                Great or small, all donations are appreciated
              </h4>
              <p>Select donation amount and frequency</p>
            </div>
            <h5 class="text-lg font-bold tracking-wide text-black">
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
                text="Next"
                variant="primary"
                :arrow="true"
                class="min-w-[105px]"
                @click="formPage++"
              />
            </div>
          </div>
          <div v-if="formPage === 2">
            <h5 class="text-lg font-bold tracking-wide text-black">
              Billing Info
            </h5>
            <div class="mb-2">
              <Input label="Address*" id="address-mob" />
            </div>
            <div class="-mx-2 mb-2 flex">
              <div class="w-2/3 px-2">
                <Select :options="countries" inputLabel="Country*" />
              </div>
              <div class="w-1/3 px-1">
                <Select :options="states" inputLabel="State*" />
              </div>
            </div>
            <div class="mb-2">
              <Input label="City*" id="city-mob" />
            </div>
            <div class="-mx-2 mb-2 flex">
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
              <Button text="Submit" variant="primary" class="min-w-[105px]" />
            </div>
          </div>
        </form>
      </div>
      <!-- desktop version -->
      <div class="hidden md:block">
        <div class="-mx-4 mb-11 flex lg:-mx-7">
          <div class="w-1/2 px-4 lg:px-7">
            <div class="overflow-hidden rounded shadow">
              <img :src="img" alt="puppy" class="w-full" />
            </div>
          </div>
          <div class="w-1/2 px-4 lg:px-7">
            <h4 class="mb-2 text-2xl font-bold text-black">
              Great or small, all donations are appreciated
            </h4>
            <div class="pr-5 text-sm leading-7">
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
          <div class="-mx-4 flex lg:-mx-7">
            <div class="w-1/2 px-4 lg:px-7">
              <h4 class="mb-2 text-2xl font-bold text-black">
                Step 1 - Select from these suggested amounts
              </h4>
              <p class="mb-5 text-sm leading-relaxed">
                Or enter a custom amount in the form to the right
              </p>
            </div>
            <div class="w-1/2 px-4 lg:px-7">
              <h4 class="mb-2 text-2xl font-bold text-black">
                Step 2 - Enter your information
              </h4>
              <p class="mb-5 text-sm leading-relaxed">
                Required fields are indicated with a *
              </p>
            </div>
          </div>
          <div class="-mx-4 flex lg:-mx-7">
            <div class="w-1/2 px-4 lg:px-7">
              <RadioGroup v-model="selectedAmount" name="selectedAmount">
                <RadioGroupLabel class="sr-only">Amount</RadioGroupLabel>
                <RadioGroupOption
                  v-for="amount in amounts"
                  :key="amount.description"
                  :value="amount"
                  v-slot="{ checked }"
                >
                  <div
                    class="mb-[30px] cursor-pointer rounded-2xl border-2 border-transparent p-[20px] text-black shadow outline-none focus:outline-none lg:px-[30px] lg:py-[25px]"
                    :class="[checked ? 'border-orange' : '']"
                  >
                    <div class="flex">
                      <div class="mr-[16px] w-[28px] flex-shrink-0">
                        <svg
                          v-show="checked"
                          width="28px"
                          height="23px"
                          viewBox="0 0 28 23"
                        >
                          <g
                            id="Pop-ups"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              id="Donate_Popup"
                              transform="translate(-178.000000, -830.000000)"
                              fill-rule="nonzero"
                            >
                              <g
                                id="check_icon"
                                transform="translate(178.000000, 830.000000)"
                              >
                                <path
                                  d="M22.6727388,12.626917 C22.6075154,12.5940189 22.5421776,12.5775984 22.4763248,12.5775984 C22.3345498,12.5775984 22.2096526,12.632009 22.1008326,12.7410591 L21.0553131,13.7864174 C20.9575924,13.8845395 20.9085031,14.0041741 20.9085031,14.1458933 L20.9085031,18.2946574 C20.9085031,19.0135523 20.6531593,19.6285464 20.1409841,20.1406123 C19.6292093,20.6523922 19.0138208,20.9083107 18.2950475,20.9083107 L4.70443753,20.9083107 C3.98560707,20.9083107 3.37027584,20.6523922 2.85850106,20.1406123 C2.34661184,19.6286036 2.09081026,19.0136094 2.09081026,18.2946574 L2.09081026,4.70419827 C2.09081026,3.98547508 2.34661184,3.37019495 2.85850106,2.85824343 C3.37027584,2.34640633 3.98560707,2.09054501 4.70443753,2.09054501 L18.2951619,2.09054501 C18.5347722,2.09054501 18.7797603,2.12321423 19.0301839,2.18860992 C19.0955789,2.21023684 19.1445537,2.22127916 19.176822,2.22127916 C19.3185971,2.22127916 19.4438946,2.166983 19.5527148,2.05810462 L20.3531317,1.25767975 C20.4836928,1.12717445 20.5328965,0.969149178 20.4999415,0.78417608 C20.4672726,0.609902014 20.3691515,0.484603196 20.205807,0.408451265 C19.6181098,0.136569991 18.9807514,0 18.2947042,0 L4.70443753,0 C3.40855167,0 2.30044054,0.460115572 1.38021855,1.38034672 C0.460110994,2.30069229 0,3.40864281 0,4.70459876 L0,18.2954013 C0,19.5911283 0.460110994,20.6991932 1.38027577,21.6194245 C2.30049776,22.5398845 3.40860889,23 4.70449474,23 L18.2950475,23 C19.5907618,23 20.6989873,22.5398845 21.6192093,21.6194245 C22.5394885,20.6991932 23,19.5911856 23,18.2954013 L23,13.1005351 C23,12.8720221 22.8904361,12.7142257 22.6727388,12.626917 Z"
                                  id="Path"
                                  fill="#511C6C"
                                ></path>
                                <path
                                  d="M26.6662913,3.52324277 L24.8666939,1.74156471 C24.6049676,1.48250126 24.2939671,1.35294118 23.9339789,1.35294118 C23.5744491,1.35294118 23.2632193,1.48250126 23.0017223,1.74156471 L12.4177356,12.2201053 L8.11575293,7.96067567 C7.85396935,7.70144205 7.54308344,7.57205214 7.18332438,7.57205214 C6.82350802,7.57205214 6.51273669,7.70144205 6.25089581,7.96067567 L4.45152756,9.74212683 C4.18980126,10.001247 4.05882353,10.3090373 4.05882353,10.665441 C4.05882353,11.0216745 4.18980126,11.3293513 4.45152756,11.5885849 L11.4855362,18.5525529 C11.7473198,18.8118433 12.0582057,18.9411765 12.4179648,18.9411765 C12.7777239,18.9411765 13.0885525,18.8119 13.3503933,18.5525529 L26.6661195,5.36947397 C26.9276739,5.11041053 27.0588235,4.80256352 27.0588235,4.44633001 C27.0588235,4.09009651 26.9280177,3.78230622 26.6662913,3.52324277 Z"
                                  id="Path"
                                  fill="#D50032"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                        <svg
                          v-show="!checked"
                          width="23px"
                          height="23px"
                          viewBox="0 0 23 23"
                          version="1.1"
                        >
                          <g
                            id="Pop-ups"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fill-rule="evenodd"
                          >
                            <g
                              id="Donate_Popup"
                              transform="translate(-178.000000, -962.000000)"
                              fill="#B4B4B5"
                              fill-rule="nonzero"
                            >
                              <g
                                id="check_icon-copy"
                                transform="translate(178.000000, 962.000000)"
                              >
                                <path
                                  d="M22.6727388,12.626917 C22.6075154,12.5940189 22.5421776,12.5775984 22.4763248,12.5775984 C22.3345498,12.5775984 22.2096526,12.632009 22.1008326,12.7410591 L21.0553131,13.7864174 C20.9575924,13.8845395 20.9085031,14.0041741 20.9085031,14.1458933 L20.9085031,18.2946574 C20.9085031,19.0135523 20.6531593,19.6285464 20.1409841,20.1406123 C19.6292093,20.6523922 19.0138208,20.9083107 18.2950475,20.9083107 L4.70443753,20.9083107 C3.98560707,20.9083107 3.37027584,20.6523922 2.85850106,20.1406123 C2.34661184,19.6286036 2.09081026,19.0136094 2.09081026,18.2946574 L2.09081026,4.70419827 C2.09081026,3.98547508 2.34661184,3.37019495 2.85850106,2.85824343 C3.37027584,2.34640633 3.98560707,2.09054501 4.70443753,2.09054501 L18.2951619,2.09054501 C18.5347722,2.09054501 18.7797603,2.12321423 19.0301839,2.18860992 C19.0955789,2.21023684 19.1445537,2.22127916 19.176822,2.22127916 C19.3185971,2.22127916 18.9807514,0 18.2947042,0 L4.70443753,0 C3.40855167,0 2.30044054,0.460115572 1.38021855,1.38034672 C0.460110994,2.30069229 1.13686838e-12,3.40864281 1.13686838e-12,4.70459876 L1.13686838e-12,18.2954013 C1.13686838e-12,19.5911283 0.460110994,20.6991932 1.38027577,21.6194245 C2.30049776,22.5398845 3.40860889,23 4.70449474,23 L18.2950475,23 C19.5907618,23 20.6989873,22.5398845 21.6192093,21.6194245 C22.5394885,20.6991932 23,19.5911856 23,18.2954013 L23,13.1005351 C23,12.8720221 22.8904361,12.7142257 22.6727388,12.626917 Z"
                                  id="Path"
                                ></path>
                                <path
                                  d="M22.6727388,12.626917 C22.6075154,12.5940189 22.5421776,12.5775984 22.4763248,12.5775984 C22.3345498,12.5775984 22.2096526,12.632009 22.1008326,12.7410591 L21.0553131,13.7864174 C20.9575924,13.8845395 20.9085031,14.0041741 20.9085031,14.1458933 L20.9085031,18.2946574 C20.9085031,19.0135523 20.6531593,19.6285464 20.1409841,20.1406123 C19.6292093,20.6523922 19.0138208,20.9083107 18.2950475,20.9083107 L4.70443753,20.9083107 C3.98560707,20.9083107 3.37027584,20.6523922 2.85850106,20.1406123 C2.34661184,19.6286036 2.09081026,19.0136094 2.09081026,18.2946574 L2.09081026,4.70419827 C2.09081026,3.98547508 2.34661184,3.37019495 2.85850106,2.85824343 C3.37027584,2.34640633 3.98560707,2.09054501 4.70443753,2.09054501 L18.2951619,2.09054501 C18.5347722,2.09054501 18.7797603,2.12321423 19.0301839,2.18860992 C19.0955789,2.21023684 19.1445537,2.22127916 19.176822,2.22127916 C19.3185971,2.22127916 18.9807514,1.8189894e-12 18.2947042,1.8189894e-12 L4.70443753,1.8189894e-12 C3.40855167,1.8189894e-12 2.30044054,0.460115572 1.38021855,1.38034672 C0.460110994,2.30069229 0,3.40864281 0,4.70459876 L0,18.2954013 C0,19.5911283 0.460110994,20.6991932 1.38027577,21.6194245 C2.30049776,22.5398845 3.40860889,23 4.70449474,23 L18.2950475,23 C19.5907618,23 20.6989873,22.5398845 21.6192093,21.6194245 C22.5394885,20.6991932 23,19.5911856 23,18.2954013 L23,13.1005351 C23,12.8720221 22.8904361,12.7142257 22.6727388,12.626917 Z"
                                  id="Path-Copy"
                                  transform="translate(11.500000, 11.500000) rotate(-270.000000) translate(-11.500000, -11.500000) "
                                ></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div>
                        <RadioGroupLabel
                          as="span"
                          class="text-2xl font-bold leading-none"
                        >
                          ${{ amount.value }}
                        </RadioGroupLabel>
                        <RadioGroupDescription
                          as="p"
                          class="text-sm leading-relaxed"
                        >
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
                <div class="mb-6">
                  <h5 class="text-lg font-bold tracking-wider">
                    Donation Summary
                  </h5>
                  <div class="-mx-3 mb-6 flex">
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
                      label="Show my support by making this a monthly donation"
                    />
                  </div>
                </div>
                <div class="mb-6">
                  <h5 class="text-lg font-bold tracking-wider">Contact Info</h5>
                  <div class="-mx-3 mb-2 flex">
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
                <div class="mb-6">
                  <h5 class="text-lg font-bold tracking-wider">Billing Info</h5>
                  <div>
                    <Input label="Address*" id="address" />
                  </div>
                  <div class="-mx-3 mb-2 flex">
                    <div class="w-1/2 px-3">
                      <Select :options="countries" inputLabel="Country*" />
                    </div>
                    <div class="w-1/2 px-3">
                      <Select :options="states" inputLabel="State*" />
                    </div>
                  </div>

                  <div class="-mx-3 mb-2 flex">
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
                    <Checkbox label="I’m not a robot (that I know of)" />
                  </div>
                  <div>
                    <Button text="Submit" variant="primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Modal from "@/components/Modal.vue";
import Input from "@/components/Input.vue";
import Checkbox from "@/components/Checkbox.vue";
import Select from "@/components/Select.vue";

import img from "@/assets/img/donate-img01.jpg";
import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  RadioGroupDescription
} from "@headlessui/vue";
import Button from "@/components/Button.vue";

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
