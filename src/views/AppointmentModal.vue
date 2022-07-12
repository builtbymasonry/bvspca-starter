<template>
  <Modal>
    <div class="mx-auto max-w-[1140px]">
      <!-- desktop version -->
      <div class="hidden lg:block">
        <div class="mb-16">
          <h2 class="mb-2 text-center text-5xl font-bold text-black">
            Wellness clinic appointment
          </h2>
          <div class="mx-auto max-w-[404px]">
            <div class="mb-5">
              <Select inputLabel="Select Appointment Type" :options="types" />
            </div>
            <Select inputLabel="Select Location" :options="locations" />
          </div>
        </div>
        <div class="border-gray-dark mb-12 border-t-2"></div>
        <form>
          <div class="-mx-5 flex">
            <div class="w-1/2 px-5">
              <div class="mx-auto max-w-[404px]">
                <div class="mb-5 text-sm text-black">
                  <h3 class="mb-1 text-1xl font-bold">Your info</h3>
                  <p>Required fields are indicated with a *</p>
                </div>
                <div class="mb-4">
                  <RadioGroup
                    label="Are you a new client? *"
                    :options="[
                      { value: 1, label: 'Yes' },
                      { value: 2, label: 'No' }
                    ]"
                  />
                </div>
                <div class="-mx-3 mb-3 flex">
                  <div class="w-1/2 px-3">
                    <Datepicker
                      placeholder="MM/DD/YYYY"
                      label="Today’s date*"
                    />
                  </div>
                </div>
                <div class="-mx-3 mb-3 flex">
                  <div class="w-1/2 px-3">
                    <Input label="First Name*" />
                  </div>
                  <div class="w-1/2 px-3">
                    <Input label="Last Name*" />
                  </div>
                </div>
                <div class="mb-3">
                  <Input label="Email*" />
                </div>
                <div class="mb-3">
                  <Input label="Phone*" />
                </div>
                <div class="mb-3">
                  <Input label="Secondary Phone" />
                </div>
                <div class="mb-3">
                  <Input label="Address" />
                </div>
                <div class="mb-3">
                  <Input label="Address line 2" />
                </div>
                <div class="-mx-3 mb-3 flex">
                  <div class="w-1/2 px-3">
                    <Input label="City*" />
                  </div>
                  <div class="w-1/2 px-3">
                    <Input label="State*" />
                  </div>
                </div>
                <div class="-mx-3 mb-5 flex">
                  <div class="w-1/2 px-3">
                    <Input label="Zip code*" />
                  </div>
                  <div class="w-1/2 px-3">
                    <Input label="Country*" />
                  </div>
                </div>
                <div class="mb-4">
                  <RadioGroup
                    label="Preferred Contact Method *"
                    :options="[
                      { value: 1, label: 'Email' },
                      { value: 2, label: 'Primary phone' },
                      { value: 3, label: 'Secondary phone' }
                    ]"
                  />
                </div>
              </div>
            </div>
            <div class="w-1/2 px-5">
              <div class="mx-auto max-w-[404px]">
                <div class="mb-5 text-sm text-black">
                  <h3 class="mb-1 text-1xl font-bold">Pet info</h3>
                  <p>Required fields are indicated with a *</p>
                </div>
                <div class="mb-3">
                  <Input label="Animal Name *" />
                </div>
                <div class="mb-4">
                  <RadioGroup
                    label="Animal Species *"
                    :options="[
                      { value: 1, label: 'Cat' },
                      { value: 2, label: 'Dog' }
                    ]"
                  />
                </div>
                <div class="mb-4">
                  <RadioGroup
                    label="Animal Sex *"
                    :options="[
                      { value: 1, label: 'Male' },
                      { value: 2, label: 'Female' },
                      { value: 3, label: 'Unknown' }
                    ]"
                  />
                </div>
                <div class="mb-3">
                  <Datepicker
                    placeholder="MM/DD/YYYY"
                    label="Animal Birthdate (approximate) *"
                  />
                </div>
                <div class="mb-4">
                  <RadioGroup
                    label="Animal Age Group *"
                    column
                    :options="[
                      { value: 1, label: '2-6 months' },
                      { value: 2, label: '6-12 months' },
                      { value: 3, label: '1-2 years' },
                      { value: 4, label: '2-5 years' },
                      { value: 5, label: '5 or more years' }
                    ]"
                  />
                </div>
                <div class="mb-3">
                  <Input
                    label="Animal Breed (ex. Poodle, Yorkie, Domestic Shorthair, Mixed, Unknown) *"
                  />
                </div>
                <div class="-mx-3 mb-5 flex">
                  <div class="w-1/2 px-3">
                    <Input label="Primary Color *" />
                  </div>
                  <div class="w-1/2 px-3">
                    <Input label="Secondary Color" />
                  </div>
                </div>
                <div class="mb-3">
                  <RadioGroup
                    label="Approximate Weight (DOGS ONLY) *"
                    :options="[
                      { value: 1, label: 'Less than 40 lbs.' },
                      { value: 2, label: '40-79 lbs.' },
                      { value: 3, label: 'More than 80 lbs.' }
                    ]"
                  />
                </div>
                <div class="mb-3">
                  <RadioGroup
                    label="What type of appointment are you requesting? *"
                    :options="[
                      { value: 1, label: 'Sick visit' },
                      { value: 2, label: 'Well visit' },
                      { value: 3, label: 'Post-Adoption Checkup' }
                    ]"
                  />
                </div>
                <div class="mb-3">
                  <Input
                    type="textarea"
                    textAreaSize="md"
                    label="If you are requesting a Sick Visit, please enter the animals' symptoms here:"
                  />
                </div>
                <div class="mb-3">
                  <RadioGroup
                    label="Is your pet spayed/neutered?"
                    :options="[
                      { value: 1, label: 'Yes' },
                      { value: 2, label: 'No' }
                    ]"
                  />
                </div>
                <div class="mb-3">
                  <Input
                    type="textarea"
                    textAreaSize="md"
                    label="Additional questions or concerns:"
                  />
                </div>
                <div class="mb-12">
                  <Checkbox label="I’m not a robot (that I know of)" />
                </div>
                <Button text="Submit" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <!-- mobile version -->
      <div class="block lg:hidden">
        <div v-if="formPage === 1">
          <h2 class="mb-5 text-center text-xl font-bold text-black">
            Wellness clinic appointment
          </h2>
          <div class="mx-auto max-w-[404px]">
            <div class="mb-5">
              <Select inputLabel="Select Appointment Type" :options="types" />
            </div>
            <Select inputLabel="Select Location" :options="locations" />
            <div class="mt-10 text-center">
              <Button text="Next" arrow variant="primary" @click="formPage++" />
            </div>
          </div>
        </div>
        <form v-if="formPage > 1">
          <div class="mx-auto max-w-[404px]">
            <div v-if="formPage === 2">
              <div class="mx-auto max-w-[404px]">
                <div class="mb-5 text-sm text-black">
                  <h3 class="text-xl font-bold">Your info</h3>
                  <p>Required fields are indicated with a *</p>
                </div>
                <div class="mb-3">
                  <RadioGroup
                    label="Are you a new client? *"
                    :options="[
                      { value: 1, label: 'Yes' },
                      { value: 2, label: 'No' }
                    ]"
                  />
                </div>
                <div class="mb-3">
                  <Datepicker placeholder="MM/DD/YYYY" label="Today’s date*" />
                </div>
                <div class="-mx-3 mb-3 flex flex-wrap">
                  <div class="xsm:w-1/2 xsm:mb- mb-3 w-full px-3">
                    <Input label="First Name*" />
                  </div>
                  <div class="xsm:w-1/2 w-full px-3">
                    <Input label="Last Name*" />
                  </div>
                </div>
                <div class="mb-3">
                  <Input label="Email*" />
                </div>
                <div class="mb-3">
                  <Input label="Phone*" />
                </div>
                <div class="mb-3">
                  <Input label="Secondary Phone" />
                </div>
                <div class="mb-3">
                  <Input label="Address" />
                </div>
                <div class="mb-3">
                  <Input label="Address line 2" />
                </div>
                <div class="-mx-3 mb-3 flex flex-wrap">
                  <div class="xsm:w-1/2 xsm:mb-0 mb-3 w-full px-3">
                    <Input label="City*" />
                  </div>
                  <div class="xsm:w-1/2 w-full px-3">
                    <Input label="State*" />
                  </div>
                </div>
                <div class="-mx-3 mb-5 flex flex-wrap">
                  <div class="xsm:w-1/2 xsm:mb-0 mb-3 w-full px-3">
                    <Input label="Zip code*" />
                  </div>
                  <div class="xsm:w-1/2 w-full px-3">
                    <Input label="Country*" />
                  </div>
                </div>
                <div class="mb-16">
                  <RadioGroup
                    label="Preferred Contact Method *"
                    :options="[
                      { value: 1, label: 'Email' },
                      { value: 2, label: 'Primary phone' },
                      { value: 3, label: 'Secondary phone' }
                    ]"
                  />
                </div>
                <div class="text-center">
                  <Button text="Next" arrow @click="formPage++" />
                </div>
              </div>
            </div>
            <div v-if="formPage === 3">
              <div class="mx-auto max-w-[404px]">
                <div class="mb-5 text-sm text-black">
                  <h3 class="text-xl font-bold">Pet info</h3>
                  <p>Required fields are indicated with a *</p>
                </div>
                <div class="mb-3">
                  <Input label="Animal Name *" />
                </div>
                <div class="mb-4">
                  <RadioGroup
                    label="Animal Species *"
                    :options="[
                      { value: 1, label: 'Cat' },
                      { value: 2, label: 'Dog' }
                    ]"
                  />
                </div>
                <div class="mb-4">
                  <RadioGroup
                    label="Animal Sex *"
                    :options="[
                      { value: 1, label: 'Male' },
                      { value: 2, label: 'Female' },
                      { value: 3, label: 'Unknown' }
                    ]"
                  />
                </div>
                <div class="mb-3">
                  <Datepicker
                    placeholder="MM/DD/YYYY"
                    label="Animal Birthdate (approximate) *"
                  />
                </div>
                <div class="mb-4">
                  <RadioGroup
                    label="Animal Age Group *"
                    column
                    :options="[
                      { value: 1, label: '2-6 months' },
                      { value: 2, label: '6-12 months' },
                      { value: 3, label: '1-2 years' },
                      { value: 4, label: '2-5 years' },
                      { value: 5, label: '5 or more years' }
                    ]"
                  />
                </div>
                <div class="mb-3">
                  <Input
                    label="Animal Breed (ex. Poodle, Yorkie, Domestic Shorthair, Mixed, Unknown) *"
                  />
                </div>
                <div class="-mx-3 mb-5 flex flex-wrap">
                  <div class="xsm:w-1/2 xsm:mb-0 mb-3 w-full px-3">
                    <Input label="Primary Color *" />
                  </div>
                  <div class="xsm:w-1/2 w-full px-3">
                    <Input label="Secondary Color" />
                  </div>
                </div>
                <div class="mb-3">
                  <RadioGroup
                    label="Approximate Weight (DOGS ONLY) *"
                    :options="[
                      { value: 1, label: 'Less than 40 lbs.' },
                      { value: 2, label: '40-79 lbs.' },
                      { value: 3, label: 'More than 80 lbs.' }
                    ]"
                  />
                </div>
                <div class="mb-3">
                  <RadioGroup
                    label="What type of appointment are you requesting? *"
                    :options="[
                      { value: 1, label: 'Sick visit' },
                      { value: 2, label: 'Well visit' },
                      { value: 3, label: 'Post-Adoption Checkup' }
                    ]"
                  />
                </div>
                <div class="mb-3">
                  <Input
                    type="textarea"
                    textAreaSize="md"
                    label="If you are requesting a Sick Visit, please enter the animals' symptoms here:"
                  />
                </div>
                <div class="mb-3">
                  <RadioGroup
                    label="Is your pet spayed/neutered?"
                    :options="[
                      { value: 1, label: 'Yes' },
                      { value: 2, label: 'No' }
                    ]"
                  />
                </div>
                <div class="mb-3">
                  <Input
                    type="textarea"
                    textAreaSize="md"
                    label="Additional questions or concerns:"
                  />
                </div>
                <div class="mb-12">
                  <Checkbox label="I’m not a robot (that I know of)" />
                </div>
                <div class="text-center">
                  <Button text="Submit" />
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
import Select from "@/components/Select.vue";
import RadioGroup from "@/components/RadioGroup.vue";
import Datepicker from "@/components/Datepicker.vue";
import Input from "@/components/Input.vue";
import Checkbox from "@/components/Checkbox.vue";
import Button from "@/components/Button.vue";

const formPage = ref(1);

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
    value: 5,
    label: "Malvern"
  }
];

const types = [
  {
    value: 0,
    label: "Select",
    disabled: true,
    selected: true
  },
  {
    value: 2,
    label: "Surgery"
  },
  {
    value: 3,
    label: "All other services"
  }
];
</script>
