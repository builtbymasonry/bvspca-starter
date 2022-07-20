<template>
  <Modal
    :button="{ text: 'Volunteer', variant: 'secondary' }"
    @modalShowed="delayedSetRightColHeight"
  >
    <div class="mx-auto max-w-[1140px]">
      <!-- desktop version -->
      <div class="hidden lg:block">
        <div class="mb-16">
          <h2 class="mb-2 text-center text-5xl font-bold text-black">
            Volunteer Application
          </h2>
          <div class="mx-auto max-w-[404px]">
            <div class="mb-5">
              <Select inputLabel="Select Category" :options="categories" />
            </div>
            <Select inputLabel="Select Location" :options="locations" />
          </div>
        </div>
        <div class="border-gray-dark border-t-2"></div>
        <div class="-mx-6 flex items-start pt-12 xl:-mx-11">
          <div
            class="flex-shrink flex-grow px-6 text-sm leading-loose text-black xl:px-11"
            ref="leftCol"
          >
            <h3 class="text-1xl mb-2 font-bold">
              Please complete this application form if you are interested in
              becoming a Brandywine Valley SPCA volunteer at our Georgetown
              Campus.
            </h3>
            <p class="mb-5">
              Once you complete the form, click the submit button at the bottom.
              Please set a reminder for the orientation date you select.
            </p>
            <p class="mb-5">
              Junior volunteers (8-12 years of age) are always welcomed however
              we require that they are accompanied by an adult volunteer (18+),
              applicants 13+ can volunteer as adults once they have completed
              training. You must submit a form for everyone that will be coming
              to volunteer.
            </p>
            <p class="mb-5">
              <a href="#!" class="text-red hover:text-red-light font-bold"
                >NON-SOLICITATION/ CONFIDENTIALITY AGREEMENT</a
              >
            </p>
            <p class="mb-5">
              <a href="#!" class="text-red hover:text-red-light font-bold"
                >VOLUNTEER WAIVER</a
              >
            </p>
            <p class="mb-12">
              <a href="#!" class="text-red hover:text-red-light font-bold"
                >NO GOSSIP POLICY</a
              >
            </p>
            <h3 class="text-1xl mb-2 font-bold">Confirmation</h3>
            <p class="mb-8">
              In checking the following box, I agree to the above contracts and
              confirm that the information submitted above is true, accurate and
              does not contain any intentional misrepresentations in regard to
              my personal situation, professional situation, viewpoints, etc.
            </p>
            <Checkbox class="items-center" label="I Agree*" />
          </div>
          <div
            class="w-[460px] flex-shrink-0 flex-grow-0 px-6 xl:w-[576px] xl:px-11"
            ref="rightCol"
          >
            <PerfectScrollbar watchOptions>
              <div class="pl-1 pr-10 pb-[1px] xl:pr-20">
                <form>
                  <h3 class="text-1xl mb-2 font-bold">Your info</h3>
                  <p class="mb-6 text-sm text-black">
                    Required fields are indicated with a *
                  </p>
                  <div class="-mx-3 mb-3 flex">
                    <div class="w-1/2 px-3">
                      <Input label="First Name*" id="fn" />
                    </div>
                    <div class="w-1/2 px-3">
                      <Input label="Last Name*" id="ln" />
                    </div>
                  </div>
                  <div class="mb-3">
                    <Input label="Email*" id="em" />
                  </div>
                  <div class="mb-3">
                    <Input label="Phone*" id="ph" />
                  </div>
                  <div class="mb-3">
                    <Input label="Address" id="ad" />
                  </div>
                  <div class="mb-3">
                    <Input label="Address line 2" id="ad2" />
                  </div>
                  <div class="-mx-3 mb-3 flex">
                    <div class="w-1/2 px-3">
                      <Input label="City*" id="ct" />
                    </div>
                    <div class="w-1/2 px-3">
                      <Input label="State*" id="st" />
                    </div>
                  </div>
                  <div class="-mx-3 mb-3 flex">
                    <div class="w-1/2 px-3">
                      <Input label="Zip code*" id="zip" />
                    </div>
                    <div class="w-1/2 px-3">
                      <Input label="Country*" id="cnt" />
                    </div>
                  </div>
                  <div class="-mx-3 mb-3">
                    <div class="w-1/2 px-3">
                      <Datepicker
                        label="Birth date*"
                        placeholder="MM/DD/YYYY"
                      />
                    </div>
                  </div>
                  <div class="-mx-3 mb-3 flex items-end">
                    <div class="w-1/2 px-3">
                      <Input label="Emergency contact name*" id="emg-n" />
                    </div>
                    <div class="w-1/2 px-3">
                      <Input label="Last Name*" id="emg-lst" />
                    </div>
                  </div>
                  <div class="mb-3">
                    <Input label="Emergency contact phone*" id="emg-ph" />
                  </div>
                  <div>
                    <Select inputLabel="T-Shirt size*" :options="sizes" />
                  </div>
                </form>
              </div>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
      <!-- mobile version -->
      <div class="block lg:hidden">
        <div v-if="formPage === 1">
          <h2 class="mb-5 text-center text-xl font-bold text-black">
            Volunteer Application
          </h2>
          <div class="mx-auto max-w-[404px]">
            <div class="mb-5">
              <Select inputLabel="Select Category" :options="categories" />
            </div>
            <Select inputLabel="Select Location" :options="locations" />
            <div class="mt-14 text-center">
              <Button
                text="Next"
                icon="arrowRight"
                variant="primary"
                @click="formPage++"
              />
            </div>
          </div>
        </div>
        <div v-if="formPage === 2">
          <div class="text-xs leading-relaxed text-black sm:text-base">
            <h3 class="mb-3 font-bold">
              Please complete this application form if you are interested in
              becoming a Brandywine Valley SPCA volunteer at our Georgetown
              Campus.
            </h3>
            <p class="mb-5">
              Once you complete the form, click the submit button at the bottom.
              Please set a reminder for the orientation date you select.
            </p>
            <p class="mb-5">
              Junior volunteers (8-12 years of age) are always welcomed however
              we require that they are accompanied by an adult volunteer (18+),
              applicants 13+ can volunteer as adults once they have completed
              training. You must submit a form for everyone that will be coming
              to volunteer.
            </p>
            <p class="mb-5">
              <a
                href="#!"
                class="text-red hover:text-red-light text-sm font-bold sm:text-lg"
                >NON-SOLICITATION/ CONFIDENTIALITY AGREEMENT</a
              >
            </p>
            <p class="mb-5">
              <a
                href="#!"
                class="text-red hover:text-red-light text-sm font-bold sm:text-lg"
                >VOLUNTEER WAIVER</a
              >
            </p>
            <p class="mb-8">
              <a
                href="#!"
                class="text-red hover:text-red-light text-sm font-bold sm:text-lg"
                >NO GOSSIP POLICY</a
              >
            </p>
            <Checkbox class="items-center" label="I Agree*" />
            <div class="mt-10 text-center">
              <Button
                text="Next"
                icon="arrowRight"
                variant="primary"
                @click="formPage++"
              />
            </div>
          </div>
        </div>
        <div v-if="formPage === 3">
          <div class="mx-auto max-w-[404px]">
            <h3 class="mb-1 text-lg font-bold tracking-wider text-black">
              Your info
            </h3>
            <div class="mb-2">
              <Input label="First Name*" id="fn-mob" />
            </div>
            <div class="mb-2">
              <Input label="Last Name*" id="ln-mob" />
            </div>
            <div class="mb-2">
              <Input label="Email*" id="email-mob" />
            </div>
            <div class="mb-2">
              <Input label="Phone" id="ph-mob" />
            </div>
            <div class="mb-2 max-w-[200px]">
              <Datepicker label="Birth date*" placeholder="MM/DD/YYYY" />
            </div>
            <div class="mb-11">
              <Select inputLabel="T-Shirt size*" :options="sizes" />
            </div>
            <div class="text-center">
              <Button
                text="Next"
                variant="primary"
                icon="arrowRight"
                @click="formPage++"
              />
            </div>
          </div>
        </div>
        <div v-if="formPage === 4">
          <div class="mx-auto max-w-[404px]">
            <h3 class="text-lg font-bold tracking-wider text-black">Adress</h3>
            <div class="mb-2">
              <Input label="Address*" id="ad-mob" />
            </div>
            <div class="-mx-2 mb-2 flex">
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
            <div class="mb-2 flex">
              <div class="w-2/3">
                <Input label="Zip Code*" id="zip-mob" />
              </div>
            </div>
            <div class="mb-2">
              <Input label="Emergency contact name*" id="emg-mob" />
            </div>
            <div class="mb-11">
              <Input label="Emergency contact phone*" id="emgph-mob" />
            </div>
            <div class="text-center">
              <Button text="Submit" variant="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Modal>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";

import Modal from "@/components/Modal.vue";
import Select from "@/components/Select.vue";
import Checkbox from "@/components/Checkbox.vue";
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import Datepicker from "../components/Datepicker.vue";
import { PerfectScrollbar } from "vue3-perfect-scrollbar";

const leftCol = ref(null);
const rightCol = ref(null);
const formPage = ref(1);

onMounted(() => {
  // delayedSetRightColHeight();

  window.addEventListener("resize", setRightColHeight);
});

onUnmounted(() => {
  window.removeEventListener("resize", setRightColHeight);
});

const setRightColHeight = () => {
  const viewHeight = leftCol.value.clientHeight;

  rightCol.value.style.setProperty("--viewHeight", viewHeight + "px");
};

const delayedSetRightColHeight = () =>
  setTimeout(() => setRightColHeight(), 50);

const categories = [
  {
    value: 0,
    label: "Select",
    disabled: true,
    selected: true
  },
  {
    value: 1,
    label: "Administration"
  },
  {
    value: 2,
    label: "Adoption Counselors"
  },
  {
    value: 3,
    label: "Dog & Cat Volunteer"
  },
  {
    value: 4,
    label: "Dog & Cat Tours"
  },
  {
    value: 5,
    label: "Photography"
  },
  {
    value: 6,
    label: "Healthcare"
  },
  {
    value: 7,
    label: "Junior Volunteers"
  },
  {
    value: 8,
    label: "Children Programs"
  },
  {
    value: 9,
    label: "Henry’s Cupboard"
  }
];
const locations = [
  {
    value: 0,
    label: "Select",
    disabled: true,
    selected: true
  },
  {
    value: 1,
    label: "Dover"
  },
  {
    value: 2,
    label: "New Castle"
  },
  {
    value: 3,
    label: "Georgetown"
  },
  {
    value: 4,
    label: "West Chester"
  },
  {
    value: 5,
    label: "Malvern"
  },
  {
    value: 6,
    label: "Plymouth Meeting"
  },
  {
    value: 7,
    label: "Animal Rescue Center"
  },
  {
    value: 8,
    label: "Eastern Shore Pet Resort"
  }
];
const sizes = [
  {
    value: 0,
    label: "Select",
    disabled: true,
    selected: true
  },
  {
    value: 1,
    label: "XS"
  },
  {
    value: 2,
    label: "S"
  },
  {
    value: 3,
    label: "M"
  },
  {
    value: 4,
    label: "L"
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
</script>
<style>
@import url("vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css");
.ps {
  height: var(--viewHeight, 400px);
}
.ps__rail-x {
  display: none !important;
}
.ps__rail-y {
  display: flex !important;
  justify-content: center !important;
  border: 1px solid #efefef !important;
  border-width: 12px 0 !important;
  border-radius: 5px !important;
}
.ps__thumb-y {
  position: relative !important;
  right: 0 !important;
  width: 10px !important;
  border-radius: 5px !important;
  background-color: #511c6c !important;
}
.ps__rail-y.ps--clicking .ps__thumb-y {
  width: 10px !important;
  border-radius: 10px !important;
}
.ps--active-y > .ps__rail-y {
  background-color: #efefef !important;
  opacity: 1 !important;
  width: 18px !important;
  border-radius: 10px !important;
}
</style>
