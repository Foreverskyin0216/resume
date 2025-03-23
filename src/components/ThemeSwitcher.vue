<script lang="ts" setup>
import { mdiWeatherNight, mdiWhiteBalanceSunny } from '@mdi/js'
import { onMounted, ref } from 'vue'
import { useTheme } from 'vuetify'
import { VBtn, VIcon } from 'vuetify/components'

const theme = useTheme()

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
theme.global.name.value = prefersDark.matches ? 'dark' : 'light'

prefersDark.addEventListener('change', (event) => {
  if (event.matches) {
    if (!theme.global.current.value.dark) {
      theme.global.name.value = 'dark'
      lightTheme.value = false
    } else {
      transitioning.value = false
    }
  } else {
    if (theme.global.current.value.dark) {
      theme.global.name.value = 'light'
      darkTheme.value = false
    } else {
      transitioning.value = false
    }
  }
  transitioning.value = true
})

const mounted = ref(false)
const transitioning = ref(false)
const darkTheme = ref(theme.global.current.value.dark)
const lightTheme = ref(!theme.global.current.value.dark)

onMounted(() => (mounted.value = true))

const enableDarkTheme = () => {
  darkTheme.value = true
  transitioning.value = false
}

const enableLightTheme = () => {
  lightTheme.value = true
  transitioning.value = false
}

const toggleTheme = () => {
  if (theme.global.current.value.dark) {
    darkTheme.value = false
    theme.global.name.value = 'light'
  } else {
    lightTheme.value = false
    theme.global.name.value = 'dark'
  }
  transitioning.value = true
}
</script>

<template>
  <v-btn icon variant="plain" :disabled="transitioning" @click="toggleTheme">
    <transition name="scroll-x-transition" @after-leave="enableLightTheme">
      <div v-show="darkTheme">
        <v-icon :icon="mdiWeatherNight" />
      </div>
    </transition>
    <transition name="scroll-x-transition" @after-leave="enableDarkTheme">
      <div v-show="lightTheme">
        <v-icon :icon="mdiWhiteBalanceSunny" />
      </div>
    </transition>
  </v-btn>
</template>
