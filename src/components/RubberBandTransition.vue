<template>
  <Transition
    enter-from-class="duration-100 opacity-0"
    enter-active-class="duration-300 animate__animated animate__rubberBand"
    leave-to-class="duration-100 delay-300 opacity-0"
    leave-active-class="animate__animated animate__rubberBand"
  >
    <slot></slot>
  </Transition>
</template>
