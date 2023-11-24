import { defineStore } from "pinia";

type ModalState = {
  isOpenArtifacts: boolean;
  currentUserId: number | null;
};

export const useModalStore = defineStore("modal", {
  state: (): ModalState => {
    return {
      isOpenArtifacts: false,
      currentUserId: null,
    };
  },
  actions: {
    openArtifactsModal(userId: number) {
      this.isOpenArtifacts = true;
      this.currentUserId = userId;
    },
    closeArtifactsModal() {
      this.isOpenArtifacts = false;
      this.currentUserId = null;
    },
  },
});
