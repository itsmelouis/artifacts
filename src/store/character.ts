import { defineStore } from "pinia";

export const useCharacterStore = defineStore("character", {
  state: () => {
    return {
      characters: ["Fire", "Water", "Earth", "Air"],
    };
  },
  actions: {
    removeCharacter(character: string) {
      this.characters = this.characters.filter((z) => z !== character);
    },
    addCharacter(character: string) {
      this.characters.push(character);
    },
  },
});
