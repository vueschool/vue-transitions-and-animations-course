<template>
  <Transition name="pop">
    <slot></slot>
  </Transition>
</template>
<style>
/* Pop */
.pop-enter-active,
.pop-leave-active {
  display: inline-block;
  transform-origin: center;
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 2.275);
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: scale(1.3);
}
</style>
