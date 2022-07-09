<template>
  <div class="bg-orange hidden px-3 md:px-6 lg:block">
    <div class="flex items-center py-4 md:space-x-10">
      <h3 class="text-lg font-bold">Every contribution makes a difference</h3>

      <form class="flex space-x-5">
        <div>
          <Select
            variant="outline"
            size="sm"
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
        <div>
          <Select
            variant="outline"
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
    value: 1,
    label: "Monthly",
    selected: true
  },
  {
    value: 2,
    label: "Weekly"
  }
];
</script>
