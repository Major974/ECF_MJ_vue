import { defineStore } from "pinia";

export const useAireStore = defineStore({
  id: "cercle",
  state: () => ({
    rayon: 0,
  }),
  getters: {
    getNom: (state) => state.rayon,
  },
  actions: {},
  persist: true,
});
