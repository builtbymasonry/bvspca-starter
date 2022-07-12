<template>
  <SwitchGroup>
    <div class="flex">
      <Switch
        v-model="enabled"
        class="bg-gray relative mr-[10px] inline-flex h-[20px] shrink-0 basis-[20px] rounded-[4px] focus:outline-none focus-visible:ring-1 focus:ring-1 focus:ring-orange"
      >
        <span
          :class="enabled ? 'visible' : 'hidden'"
          class="border-red -mt-1/2 absolute top-[1px] left-[6px] h-[13px] w-[8px] rotate-45 border-b-[3px] border-r-[3px]"
        />
      </Switch>
      <SwitchLabel v-if="label" class="select-none text-sm">{{
        label
      }}</SwitchLabel>
    </div>
  </SwitchGroup>
</template>
<script setup>
import { ref } from "vue";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";

const enabled = ref(false);

const props = defineProps({
  label: String,
  id: String,
  value: String
});
</script>
