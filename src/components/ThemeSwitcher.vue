<script lang="ts" setup>
import { mdiWeatherNight, mdiWhiteBalanceSunny } from '@mdi/js'
import { ref } from 'vue'
import { useTheme } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'
import { VIcon } from 'vuetify/components/VIcon'
import { VScrollXTransition } from 'vuetify/components/transitions'

const { current, global: theme } = useTheme()

const darkTheme = ref(current.value.dark)
const lightTheme = ref(!current.value.dark)
const transitioning = ref(false)

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  if (event.matches) lightTheme.value = false
  else if (current.value.dark) darkTheme.value = false

  theme.name.value = current.value.dark ? 'light' : 'dark'

  transitioning.value = true
})

const enableDarkTheme = () => {
  darkTheme.value = true
  transitioning.value = false
}

const enableLightTheme = () => {
  lightTheme.value = true
  transitioning.value = false
}

const toggleTheme = () => {
  if (current.value.dark) {
    darkTheme.value = false
    theme.name.value = 'light'
  } else {
    lightTheme.value = false
    theme.name.value = 'dark'
  }
  transitioning.value = true
}
</script>

<template>
  <v-btn icon variant="plain" :disabled="transitioning" :ripple="false" @click="toggleTheme">
    <v-scroll-x-transition @after-leave="enableLightTheme">
      <v-icon v-show="darkTheme" :icon="mdiWeatherNight" />
    </v-scroll-x-transition>
    <v-scroll-x-transition @after-leave="enableDarkTheme">
      <v-icon v-show="lightTheme" :icon="mdiWhiteBalanceSunny" />
    </v-scroll-x-transition>
  </v-btn>
</template>
