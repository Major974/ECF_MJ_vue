<template>
  <div>
    <div>La form</div>
    <table> 
      <tr>
        Lapin
      </tr>
      <tr>
        <td>Pepe</td>
        <td>Wojak</td>
        <td>{{StoreStoreStore.nomBateaux}}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import {useBateauxStore} from "../stores/counter"
const StoreStoreStore = useBateauxStore();


</script>
