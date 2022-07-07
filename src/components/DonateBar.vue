<template>
    <div class="px-3 md:px-6 hidden lg:block bg-orange">
        <div class="flex items-center py-4 md:space-x-10">
            <h3 class="text-lg font-bold">Every contribution makes a difference</h3>

            <form class="flex items-center space-x-5">
                <Input type="number" value="25" />
                <Select :options="monthly" />
                <Button class="" text="Donate" size="small" variant="primary" />
            </form>
        </div>
    </div>
</template>

<script setup>
import Select from "@/components/Select.vue";
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

const monthly = [
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
</script>
