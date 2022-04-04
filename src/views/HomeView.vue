<template>
  <div>
    <h1>Calculateur de dimensions d’un cercle</h1>
    <p>
      Cette application sert à calculer le périmetre, l'Aire et le volume
      sphérique d'un cercle grace un son rayon. Le rayon doit etre un chiffre
      entier ( sait a dire sans( , ) ) et doit etre une valeur possitive ( sait
      a dire sans ( - ) avant la valeur ) tous sa en Centimétre.
    </p>
    <br />
    <form @submit.prevent="handleSubmit">
      <p>Rayon du cercle en Cm</p>
      <input
        type="number"
        min="1"
        :value="rayon"
        @input="onInput"
        placeholder="Rayon"
      />
    </form>
  </div>
  <br />
  <table>
    <thead>
      <tr>
        <th scope="col">Périmètre du cercle</th>
        <th scope="col">Aire du cercle</th>
        <th scope="col">Volume de la sphère</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <!-- Arrondi de pi = PI = π = Math.PI = 3.1415 -->
        <td>{{ rayon * 2 * 3.1415 }} Cm</td>
        <td>{{ 3.1415 * rayon * rayon }} Cm²</td>
        <td>{{ (4 * 3.1415 * (rayon * 3)) / 3 }} Cm³</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
//__________ sans pinia sa marche __________

import { ref } from "vue";
const rayon = ref("");

function onInput(e) {
  rayon.value = e.target.value;
}

//__________ test avec pinia marche pas encore __________

import { useAireStore } from "../stores/counter";
const StoreStore = useAireStore();

let cercle = {
  rayon: 0,
};

function handleSubmit() {
  console.log("handleSubmit");

  if (cercle.rayon == 0) {
    console.log("rien");
    console.log(cercle);
    return;
  }
  cercle.rayon = Math.abs(Math.floor(cercle.rayon));

  StoreStore.rayon;
  console.log(StoreStore);
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 400px;
}
th,
td {
  border: 1px solid grey;
  padding: 10px;
  vertical-align: top;
}
</style>
