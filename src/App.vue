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
  <div>
    <div
      class="box"
      v-for="(color, i) in colors"
      @click="colors.splice(i, 1)"
      :key="color"
      v-motion-pop-visible
      :style="{ backgroundColor: color }"
    ></div>
  </div>
</template>

<style>
.box {
  height: 100px;
  border: 1px solid black;
  margin: 5px;
  margin-bottom: 30px;
}
button {
  background-color: blue;
}
</style>
