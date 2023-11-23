<script setup lang="ts">
import { reactive, ref } from "vue";
import { useUserStore } from "../store/user";
import { useCharacterStore } from "../store/character";
import RegisterUser from "../components/Cards/RegisterUser.vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const characterStore = useCharacterStore();
const router = useRouter();

const { characters } = storeToRefs(characterStore);
const limitPlayerError = ref<Boolean>(false);
const minimumPlayerError = ref<Boolean>(false);
const unknowPlayerError = ref<Boolean>(false);

const newUser = reactive({
  name: "",
  character: "" as "Fire" | "Water" | "Earth" | "Air",
});

const addUser = () => {
  if (!newUser.name || !newUser.character) {
    unknowPlayerError.value = true;
    setTimeout(() => (unknowPlayerError.value = false), 3000);
  } else {
    if (userStore.users.length < 4) {
      userStore.addUser(newUser);
      characterStore.removeCharacter(newUser.character);
    } else {
      limitPlayerError.value = true;
      setTimeout(() => (limitPlayerError.value = false), 3000);
    }
  }
};

const startGame = () => {
  if (userStore.users.length >= 2) router.push("game");
  else {
    minimumPlayerError.value = true;
    setTimeout(() => (minimumPlayerError.value = false), 3000);
  }
};
</script>

<template>
  <div
    class="flex flex-col justify-center items-center w-full h-full min-h-screen"
  >
    <div class="flex flex-col gap-2 max-w-md mb-6">
      <div>
        <label
          for="large-input"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Enter your name:</label
        >
        <input
          type="text"
          id="large-input"
          v-model="newUser.name"
          class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label
          for="characters"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Select your character:</label
        >
        <select
          id="characters"
          v-model="newUser.character"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
        >
          <option v-for="character in characters" :value="character">
            {{ character }}
          </option>
        </select>
      </div>
    </div>
    <div
      v-show="limitPlayerError"
      class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
      role="alert"
    >
      <p class="font-medium">4 players at maximum</p>
    </div>
    <div
      v-show="minimumPlayerError"
      class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
      role="alert"
    >
      <p class="font-medium">At least 2 players to start the game.</p>
    </div>
    <div
      v-show="unknowPlayerError"
      class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50"
      role="alert"
    >
      <p class="font-medium">
        Fill out your name and select a character please
      </p>
    </div>

    <button
      type="button"
      @click="addUser()"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-10"
    >
      Register
    </button>

    <RegisterUser
      v-for="user in userStore.users"
      :name="user.name"
      :character="user.character"
      :id="user.id"
    />
    <button
      v-show="userStore.users.length > 0"
      type="button"
      @click="startGame()"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
    >
      Start the game
    </button>
  </div>
</template>
