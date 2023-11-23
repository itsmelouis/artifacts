<script setup lang="ts">
import { useUserStore } from "../../store/user";
const userStore = useUserStore();
const props = defineProps({
  name: String,
  character: String,
  id: Number,
});
</script>
<template>
  <div
    class="flex flex-row justify-between items-center p-4 bg-white border border-gray-200 rounded-lg shadow mb-4"
  >
    <h5 class="text-2xl font-bold text-gray-900 mr-10">
      {{ props.name }} ({{ props.character }})
    </h5>
    <svg
      @click="userStore.removeUserById(props.id!)"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="w-6 h-6 cursor-pointer fill-red-700 hover:bg-slate-200 rounded-full"
    >
      <path
        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      ></path>
    </svg>
  </div>
</template>
