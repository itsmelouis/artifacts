<script setup lang="ts">
import { useModalStore } from "../store/modal";

const modalStore = useModalStore();
</script>

<template>
  <div
    id="default-modal"
    class="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center"
  >
    <div class="relative p-4 w-full max-w-2xl">
      <div class="relative bg-white rounded-lg shadow">
        <div
          class="flex items-center justify-between p-4 md:p-5 border-b rounded-t"
        >
          <button
            type="button"
            @click="modalStore.closeArtifactsModal()"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <slot></slot>
        <!-- Modal footer -->
        <div
          class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b"
        >
          <button
            type="button"
            @click="modalStore.closeArtifactsModal()"
            class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
