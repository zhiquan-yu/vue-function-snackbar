<template>
  <div v-if="showing" class="snackbar" @click="handleClick">
    <slot />
  </div>
</template>

<script>
import useToast from './useToast'

export default {
  name: 'Snackbar',

  props: {
    show: Boolean,
  },

  setup(props, context) {
    const { emit } = context

    function emitHide() {
      emit('hide')
    }

    function emitClick() {
      emit('click')
    }

    const { showing } = useToast(props, emitHide, 5000)

    return {
      showing,

      handleClick() {
        emitClick()

        showing.value = false
      },
    }
  },
}
</script>

<style scoped>
.snackbar {
  position: fixed;
  z-index: var(--vue-snacker-z-index, 100);
}
</style>
