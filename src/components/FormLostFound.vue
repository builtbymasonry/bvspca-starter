<template>
  <form class="-my-9 divide-y-2 divide-gray-dark">
    <div class="py-9">
      <h3 class="-mt-2 mb-4 text-xl font-bold sm:text-4xl">
        Lost & found pet form
      </h3>
      <Select inputLabel="Select location" :options="location" />
    </div>

    <div class="py-9">
      <h4 class="mb-3 text-lg font-bold tracking-wider">About the pet</h4>
      <RadioGroup
        class="mb-6"
        label="Lost or found? *"
        :options="[
          { value: 1, label: 'Lost' },
          { value: 2, label: 'Found' },
        ]"
      />
      <RadioGroup
        class="mb-6"
        label="Type of pet *"
        :options="[
          { value: 1, label: 'Cat' },
          { value: 2, label: 'Dog' },
          { value: 3, label: 'Other' },
        ]"
      />
      <Input class="mb-2" type="file" label="Upload a picture if possible" />
      <Input class="mb-2" label="Breed *" />
      <Input class="mb-2" label="Animals Age (if known)" />
      <Input class="mb-2" label="Weight (approximate)" />
      <Input class="mb-2" label="Collar type and color" />
      <Datepicker
        class="mb-2"
        placeholder="MM/DD/YYYY"
        label="Date lost or found *"
      />
      <Input
        class="mb-2"
        type="textarea"
        textAreaSize="md"
        label="Give a description of the animal (name, color, distinguishing marks, etc.), and location of where the animal was lost. Include City, and Zip *"
      />
      <Input
        class="mb-8"
        label="Please identify the road or township where the animal was found or lost. *"
      />

      <h4 class="mb-3 text-lg font-bold tracking-wider">Your info</h4>
      <div class="mb-2 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6">
        <Input label="First Name *" />
        <Input label="Last Name *" />
      </div>
      <Input class="mb-2" label="Email *" />
      <Input class="mb-2" label="Phone *" />
      <div class="mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6">
        <Input label="City *" />
        <Input label="Zip code *" />
      </div>
      <Checkbox
        class="mb-10 items-center"
        label="I’m not a robot (that I know of)"
      />
      <div class="text-center sm:text-left">
        <Button text="Submit" />
      </div>
    </div>
  </form>
</template>

<script setup>
import Select from "@/components/Select.vue";
import Checkbox from "@/components/Checkbox.vue";
import RadioGroup from "@/components/RadioGroup.vue";
import Input from "@/components/Input.vue";
import Datepicker from "@/components/Datepicker.vue";
import Button from "@/components/Button.vue";

const location = [
  {
    value: 0,
    label: "Select",
    disabled: true,
    selected: true,
  },
  {
    value: 1,
    label: "option 01",
  },
  {
    value: 2,
    label: "option 02",
  },
  {
    value: 3,
    label: "option 03",
  },
  {
    value: 4,
    label: "option 04",
  },
];
</script>
