<script setup>
import { ref } from "vue";
const showModal = ref(false);
</script>

<template>
  <button @click="showModal = true">Show Modal</button>
  <Transition :duration="1400">
    <div v-if="showModal" class="modal-wrapper">
      <div class="modal-bg" @click="showModal = false"></div>
      <div class="modal">
        <button class="modal-close" @click="showModal = false">ｘ</button>
        <div class="modal-content">hello world</div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-wrapper,
.modal-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-bg {
  background: rgba(0, 0, 0, 0.4);
}
.modal {
  position: relative;
  background: white;
  padding: 5px;
  z-index: 2;
  border-radius: 2px;
}
.modal-close {
  position: absolute;
  top: 0;
  right: 1px;
  font-size: 5px;
  padding: 0;
  appearance: none;
  background: none;
  border: none;
}

.modal,
.modal-bg {
  transition: all 1s ease;
}

.v-enter-active .modal {
  transition-delay: 0.4s;
}
.v-leave-active .modal-bg {
  transition-delay: 0.4s;
}

.v-enter-from .modal-bg,
.v-leave-to .modal-bg {
  opacity: 0;
}

.v-enter-from .modal,
.v-leave-to .modal {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
