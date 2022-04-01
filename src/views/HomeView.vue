<template>
  <div>
    <button @click="Bat">"rerere"</button>

    <form @submit.prevent="handleSubmit">
      <p>nom du propriétaire</p>
      <input
        v-model="Bateaux.nomPropriétaire"
        type="text"
        name="nomPropriétaire"
        placeholder="nom du propriétaire"
      />
      <br /><br />
      <p>nom du bateaux</p>
      <input
        v-model="Bateaux.nomBateaux"
        type="text"
        name="nomBateaux"
        placeholder="nom du bateaux"
      />
      <br /><br />
      <p>taille du dit bateaux en métre</p>
      <input
        v-model="Bateaux.taille"
        type="number"
        min="270"
        max="36200"
        name="taille"
        placeholder="taille du dit bateaux en métre"
      />
      <br /><br />
      <p>prix du dit bateaux en euros</p>
      <input
        v-model="Bateaux.prix"
        type="number"
        min="1"
        max="460000000"
        name="prix"
        placeholder="prix du dit bateaux en euros"
      />
      <br /><br /><br />
      <input type="submit" value="mettre en location" />
    </form>
  </div>
</template>


<script setup>
import {useBateauxStore} from "../stores/counter"
const StoreStoreStore = useBateauxStore();

let Bateaux = {
  nomPropriétaire: "",
  nomBateaux: "",
  taille: 0,
  prix: 0,
};

function Bat() {
  console.log("top");
  console.log(Bateaux);
}

function handleSubmit() {
  console.log("handleSubmit");

  if (Bateaux.nomPropriétaire == 0 || Bateaux.nomBateaux == 0 || Bateaux.taille == 0 || Bateaux.prix == 0){
    console.log("connard");
    console.log(Bateaux);
    return
  }
  Bateaux.prix = Math.abs(Math.floor(Bateaux.prix))
  Bateaux.taille = Math.abs(Math.floor(Bateaux.taille))

  // Bateaux.prix = (Bateaux.prix / 12)

  StoreStoreStore.nomPropriétaire
  StoreStoreStore.nomBateaux
  StoreStoreStore.taille
  StoreStoreStore.prix
  console.log(StoreStoreStore)
}
</script>

