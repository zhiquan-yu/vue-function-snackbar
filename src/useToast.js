import { value, watch } from 'vue-function-api'

export default function useToast(props, emitHide, delay) {
  const showing = value(false)

  watch(() => props.show, show => {
    if (show && !showing.value) {
      showing.value = true

      setTimeout(() => {
        showing.value = false

        emitHide()
      }, delay)
    }
  })

  return {
    showing,
  }
}
