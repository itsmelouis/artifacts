<script setup lang="ts">
import { computed } from "vue";
import { useModalStore } from "../../store/modal";

const modalStore = useModalStore();

const Earth = new URL("../../assets/characters/Earth.png", import.meta.url)
  .href;
const Fire = new URL("../../assets/characters/Fire.png", import.meta.url).href;
const Water = new URL("../../assets/characters/Water.png", import.meta.url)
  .href;
const Air = new URL("../../assets/characters/Air.png", import.meta.url).href;

const characterImage = computed(() => {
  switch (props.character) {
    case "Earth":
      return Earth;
    case "Fire":
      return Fire;
    case "Water":
      return Water;
    case "Air":
      return Air;
    default:
      // You can provide a default image or handle this case accordingly
      return Earth;
  }
});

const props = defineProps({
  name: String,
  character: String,
});
</script>

<template>
  <div
    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
  >
    <img
      class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
      :src="characterImage"
      :alt="props.character + '\'s character'"
    />
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {{ props.name }} ({{ props.character }})
      </h5>
      <div class="grid grid-cols-4 gap-2 mb-3 font-normal text-gray-700">
        <div class="bg-violet-600 w-6 h-6 rounded-full"></div>
        <div class="bg-green-600 w-6 h-6 rounded-full"></div>
        <div class="bg-orange-600 w-6 h-6 rounded-full"></div>
        <div class="bg-blue-600 w-6 h-6 rounded-full"></div>
        <div class="bg-yellow-600 w-6 h-6 rounded-full"></div>
        <div class="bg-green-800 w-6 h-6 rounded-full"></div>
        <div class="bg-blue-400 w-6 h-6 rounded-full"></div>
        <div class="bg-red-600 w-6 h-6 rounded-full"></div>
      </div>
      <div class="flex justify-end items-end">
        <button
          type="button"
          @click="modalStore.openArtifactsModal()"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none"
        >
          Artifacts
        </button>
      </div>
    </div>
  </div>
</template>
