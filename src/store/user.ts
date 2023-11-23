import { defineStore } from "pinia";
import { useCharacterStore } from "./character";

type User = {
  id: number;
  name: string;
  character: "Fire" | "Water" | "Air" | "Earth";
  artifacts?: string[];
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
  },
});
