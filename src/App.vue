<script setup>
import { shuffleArray } from "./helper";
import { ref } from "vue";

// generate random color
const randomColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
};

const colors = ref(Array.from({ length: 20 }, () => randomColor()));
</script>

<template>
  <button class="w-full text-lg" @click="shuffleArray(colors)">Shuffle</button>
  <div class="flex flex-wrap" v-auto-animate>
    <div
      class="box"
      v-for="(color, i) in colors"
      @click="colors.splice(i, 1)"
      :key="color"
      :style="{ backgroundColor: color }"
    ></div>
  </div>
</template>

<style>
.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin: 5px;
}
button {
  background-color: blue;
}
</style>
