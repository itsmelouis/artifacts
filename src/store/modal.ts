import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => {
    return { isOpenArtifacts: false };
  },
  actions: {
    openArtifactsModal() {
      this.isOpenArtifacts = true;
    },
    closeArtifactsModal() {
      this.isOpenArtifacts = false;
    },
  },
});
