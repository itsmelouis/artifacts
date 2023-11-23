<script setup lang="ts">
import User from "../components/Cards/User.vue";
import { useUserStore } from "../store/user";
import Modal from "../components/Modal.vue";
import { useModalStore } from "../store/modal";

const modalStore = useModalStore();

const userStore = useUserStore();
</script>
<template>
  <div
    class="flex flex-col justify-center items-center w-full h-full min-h-screen"
  >
    <User
      v-for="user in userStore.users"
      :name="user.name"
      :character="user.character"
    />
  </div>
  <Modal v-show="modalStore.isOpenArtifacts" />
</template>
