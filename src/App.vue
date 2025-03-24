<script lang="ts" setup>
import type { CreateComponentPublicInstanceWithMixins } from 'vue'

import { mdiChevronDown } from '@mdi/js'
import { computed, onMounted, ref } from 'vue'
import { useDisplay, useTheme } from 'vuetify'
import { VApp, VBtn, VCard, VCardActions, VCardText, VCol, VContainer, VMain, VRow, VSpacer } from 'vuetify/components'

import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import About from '@/pages/About.vue'
import Skills from '@/pages/Skills.vue'
import Experience from '@/pages/Experience.vue'
import Projects from '@/pages/Projects.vue'

const dp = useDisplay()
const theme = useTheme()

const header = ref<CreateComponentPublicInstanceWithMixins>()
const footer = ref<CreateComponentPublicInstanceWithMixins>()

const about = ref<CreateComponentPublicInstanceWithMixins>()
const skills = ref<CreateComponentPublicInstanceWithMixins>()
const projects = ref<CreateComponentPublicInstanceWithMixins>()
const experience = ref<CreateComponentPublicInstanceWithMixins>()
const currentPage = ref<CreateComponentPublicInstanceWithMixins>()

const pageBottoms = [] as number[]
const pages = [] as CreateComponentPublicInstanceWithMixins[]

const surfaceHeight = computed(() => `${window.innerHeight - (dp.mobile.value ? 0 : 48)}px`)
const surfaceWidth = computed(() => `${window.innerWidth - (dp.mobile.value ? 0 : 48)}px`)

if (dp.mobile.value) {
  theme.themes.value.dark.colors.background = theme.themes.value.dark.colors.surface
  theme.themes.value.light.colors.background = theme.themes.value.light.colors.surface
}

onMounted(() => {
  pages.push(...[about.value!, skills.value!, projects.value!, experience.value!])
  currentPage.value = pages[0]

  const headerHeight = header.value!.$el.offsetHeight
  const footerHeight = footer.value!.$el.offsetHeight

  const bottomPositions = pages.map((page) => {
    if (!page) return 0

    const rect = (page.$el as HTMLElement).getBoundingClientRect()
    const offsetTop = rect.top + window.scrollY

    return offsetTop + rect.height - headerHeight - footerHeight
  })

  pageBottoms.push(...bottomPositions)
})

const onScroll = (event: Event) => {
  for (let i = 0; i < pageBottoms.length; i++) {
    if ((event.target as HTMLElement).scrollTop >= pageBottoms[i]) continue
    currentPage.value = pages[i]
    break
  }
}

const scrollToNextPage = () => {
  if (!currentPage.value) return

  const position = pages.indexOf(currentPage.value) + 1
  const nextPage = pages[position % pages.length]

  nextPage?.$el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <v-app>
    <v-main class="align-center d-flex justify-center">
      <v-card
        class="d-flex flex-column"
        color="surface"
        flat
        :height="surfaceHeight"
        :max-height="surfaceHeight"
        :rounded="dp.mobile.value ? '' : 'xl'"
        :tile="dp.mobile.value"
        :width="surfaceWidth"
      >
        <v-card-actions ref="header" class="justify-end pb-0">
          <ThemeSwitcher />
        </v-card-actions>
        <v-card-text v-scroll.self="onScroll" class="overflow-y-auto py-0">
          <v-container class="h-100 pa-0" fluid>
            <v-row class="h-100" no-gutters>
              <v-col class="h-100">
                <About ref="about" />
                <Skills ref="skills" />
                <Projects ref="projects" />
                <Experience ref="experience" />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-spacer />
        <v-card-actions ref="footer" class="justify-center py-0">
          <v-btn
            variant="plain"
            :icon="mdiChevronDown"
            :style="{ transform: `rotate(${currentPage === pages[pages.length - 1] ? 180 : 0}deg)` }"
            @click="scrollToNextPage"
          />
        </v-card-actions>
      </v-card>
    </v-main>
  </v-app>
</template>
