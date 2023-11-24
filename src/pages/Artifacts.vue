<script setup lang="ts">
import User from "../components/Cards/User.vue";
import { useUserStore } from "../store/user";
import Modal from "../components/Modal.vue";
import { useModalStore } from "../store/modal";
import { ref } from "vue";

const modalStore = useModalStore();

const userStore = useUserStore();

const currentArtifactSelect = ref("");
const currentArtifactSelectRemove = ref("");

const defaultArtifacts = [
  "Fire",
  "Water",
  "Air",
  "Earth",
  "Lava",
  "Plants",
  "Thunder",
  "Ice",
];
</script>
<template>
  <div
    class="flex flex-col justify-center items-center w-full h-full min-h-screen"
  >
    <User
      v-for="user in userStore.users"
      :name="user.name"
      :character="user.character"
      :id="user.id"
    >
    </User>
    <Modal v-show="modalStore.isOpenArtifacts"
      ><div
        class="flex flex-col gap-2 justify-center items-center"
        v-if="modalStore.currentUserId !== null"
      >
        <h3 class="text-xl font-semibold text-gray-900">
          {{
            userStore.users.find((user) => user.id === modalStore.currentUserId)
              ?.name
          }}'s Artifacts
        </h3>
        <label
          for="artifactAdd"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Add an artifact</label
        >
        <select
          id="artifactsAdd"
          v-model="currentArtifactSelect"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5"
        >
          <option v-for="artifact in defaultArtifacts" :value="artifact">
            {{ artifact }}
          </option>
        </select>
        <button
          type="button"
          @click="
            userStore.addArtifacts(
              currentArtifactSelect,
              userStore.users.find(
                (user) => user.id === modalStore.currentUserId
              )?.id!
            )
          "
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none"
        >
          Add
        </button>
        <ul>
          <!-- Loop through and display artifacts for the current user -->
          <li
            v-for="artifact in userStore.users.find(
              (user) => user.id === modalStore.currentUserId
            )?.artifacts"
            :key="artifact.name"
          >
            {{ artifact.name }} | You have {{ artifact.value }} artifact(s)
          </li>
        </ul>

        <label
          for="artifactRemove"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Remove an artifact</label
        >
        <select
          id="artifactsRemove"
          v-model="currentArtifactSelectRemove"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5"
        >
          <option v-for="artifact in defaultArtifacts" :value="artifact">
            {{ artifact }}
          </option>
        </select>
        <button
          type="button"
          @click="
            userStore.removeArtifact(
              currentArtifactSelect,
              userStore.users.find(
                (user) => user.id === modalStore.currentUserId
              )?.id!
            )
          "
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none"
        >
          Remove
        </button>
      </div></Modal
    >
  </div>
</template>
