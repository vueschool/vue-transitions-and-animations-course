<script setup>
import { shuffleArray } from "./helper";
import { ref, computed } from "vue";
import gsap from "gsap";

const pokemon = ref([]);
const search = ref("");
const matches = computed(() =>
  pokemon.value.filter((p) =>
    p.name.toLowerCase().includes(search.value.toLowerCase())
  )
);

fetch("https://pokeapi.co/api/v2/pokemon?limit=7").then(async (res) => {
  pokemon.value = (await res.json()).results;
});

function onBeforeEnter(el) {
  el.style.opacity = 0;
  el.style.height = 0;
}

function onEnter(el, done) {
  gsap.to(el, {
    opacity: 1,
    height: "1.6em",
    delay: el.dataset.index * 0.1,
    onComplete: done,
  });
}

function onLeave(el, done) {
  gsap.to(el, {
    opacity: 0,
    height: 0,
    delay: el.dataset.index * 0.1,
    onComplete: done,
  });
}
</script>

<template>
  <input type="search" v-model="search" />
  <div v-if="pokemon.length">
    <TransitionGroup
      tag="ul"
      :css="false"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
    >
      <li
        v-for="(creature, index) in matches"
        :key="creature.name"
        :data-index="index"
      >
        {{ creature.name }}
        <button @click="pokemon.splice(index, 1)">X</button>
      </li>
    </TransitionGroup>
    <button @click="shuffleArray(pokemon)">Shuffle</button>
  </div>
</template>
