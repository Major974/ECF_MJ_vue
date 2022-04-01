import { defineStore } from "pinia";

export const useBateauxStore = defineStore({
  id: "bateaux",
  state: () => ({
    nomPropriétaire: "",
    nomBateaux: "",
    taille: 0,
    prix: 0,
  }),
  getters: {
    getNom: (state) => state.nomPropriétaire,
    getNomBat: (state) => state.nomBateaux,
    getTaille: (state) => state.taille,
    getPrix: (state) => state.prix,
  },
  actions: {
  },
  persist: true
});