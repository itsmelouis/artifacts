import { defineStore } from "pinia";
import { useCharacterStore } from "./character";

type Artifact = {
  name: string;
  value: number;
};

type User = {
  id: number;
  name: string;
  character: "Fire" | "Water" | "Air" | "Earth";
  artifacts?: Artifact[];
};

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      users: [] as User[],
      nextUserId: 1,
    };
  },
  actions: {
    addUser(user: Omit<User, "id" | "artifacts">) {
      const newUser: User = {
        id: this.nextUserId++,
        ...user,
      };
      this.users.push(newUser);
    },
    removeUserById(id: number) {
      let element = this.users.find((e) => e.id == id);
      useCharacterStore().addCharacter(element?.character!);
      this.users = this.users.filter((z) => z.id !== id);
    },
    removeAllUsers() {
      this.users = [];
    },
    addArtifacts(artifact: string, id: number) {
      const user = this.users.find((user) => user.id === id);

      if (user) {
        if (!user.artifacts) {
          user.artifacts = [];
        }

        const existingArtifact = user.artifacts.find(
          (a) => a.name === artifact
        );

        if (existingArtifact) {
          existingArtifact.value += 1;
        } else {
          user.artifacts.push({ name: artifact, value: 1 });
        }
      }
    },
    removeArtifact(artifactName: string, userId: number) {
      const user = this.users.find((user) => user.id === userId);

      if (user && user.artifacts) {
        const artifactIndex = user.artifacts.findIndex(
          (artifact) => artifact.name === artifactName
        );

        if (artifactIndex !== -1) {
          const artifact = user.artifacts[artifactIndex];

          if (artifact.value > 1) {
            // Decrement the artifact value if greater than 1
            artifact.value -= 1;
          } else {
            // Remove the artifact if its value is 1
            user.artifacts.splice(artifactIndex, 1);
          }

          // If the user has no artifacts left, you can handle it here
          if (user.artifacts.length === 0) {
            // Handle the case where the user has no artifacts
          }
        }
      }
    },
  },
});
