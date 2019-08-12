# vue-function-snackbar

A snackbar component based on [vue-function-api](https://github.com/vuejs/vue-function-api)

## Usage

```vue
<template>
  <div class="your-app>
    <Snackbar :show="showSnackbar" @hide="handleHide" @click="handleClick">Hello World</Snackbar>
  </div>
</template>

<script>
import { value } from 'vue-function-api'
import Snackbar from 'vue-function-snackbar'

export default {
  name: 'YourApp',

  setup() {
    const showSnackbar = value(false)

    return {
      showSnackbar,

      handleHide() {

      },

      handleClick() {

      },
    }
  },

  components: {
    Snackbar,
  },
}
</script>

<style scoped>
  .your-app {
    /* You can custom the z-index of vue-snackbar by CSS variable, default is 100 */
    --vue-snackbar-z-index: 1000;
  }
</style>
```
