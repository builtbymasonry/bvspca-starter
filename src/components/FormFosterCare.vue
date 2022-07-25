<template>
  <form class="space-y-10">
    <div>
      <h3 class="-mt-2 mb-4 text-xl font-bold sm:text-4xl">
        Foster care application
      </h3>
      <Select class="mb-2" inputLabel="Select location" :options="location" />
      <Datepicker
        class="mb-2"
        placeholder="MM/DD/YYYY"
        label="Date available to foster"
      />
    </div>

    <div>
      <h4 class="mb-3 text-lg font-bold tracking-wider">Your info</h4>
      <div class="mb-2 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6">
        <Input label="First Name *" />
        <Input label="Last Name *" />
      </div>
      <Input class="mb-2" label="Email *" />
      <Input class="mb-2" label="Phone *" />
      <Input class="mb-2" label="Address" />
      <Input class="mb-2" label="Address line 2" />
      <div class="mb-2 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6">
        <Input label="City *" />
        <Input label="State*" />
      </div>
      <div class="mb-2 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6">
        <Input label="Zip code *" />
        <Input label="Country *" />
      </div>
      <Input
        class="mb-2"
        type="textarea"
        textAreaSize="md"
        label="Comments/ specific interests:"
      />
      <Checkbox
        class="my-10 items-center"
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
