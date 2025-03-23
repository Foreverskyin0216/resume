<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import { VCard, VCardText, VCardTitle, VCol, VContainer, VRow, VTooltip } from 'vuetify/components'

const dp = useDisplay()

const skills = [
  { icon: 'typescript-plain', text: 'TypeScript' },
  { icon: 'python-plain', text: 'Python' },
  { icon: 'selenium-original', text: 'Selenium' },
  { icon: 'cypressio-plain', text: 'Cypress' },
  { icon: 'playwright-plain', text: 'Playwright' },
  { icon: 'pytest-plain', text: 'Pytest' },
  { icon: 'vitest-plain', text: 'Vitest' },
  { icon: 'insomnia-plain', text: 'Insomnia' },
  { icon: 'docker-plain', text: 'Docker' },
  { icon: 'amazonwebservices-plain-wordmark', text: 'AWS' },
  { icon: 'git-plain', text: 'Git' },
  { icon: 'jira-plain', text: 'Jira' }
]
</script>

<template>
  <v-card class="align-center d-flex flex-column min-height-100" color="surface" flat height="auto">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card-title
            class="text-h4 text-lg-h4 text-md-h4 text-sm-h4 text-title text-xl-h4 text-xs-h3 text-xxl-h4"
            :class="{ 'text-center': dp.mobile.value }"
          >
            Technical Skills
          </v-card-title>
        </v-col>
        <v-col
          v-for="{ icon, text } in skills"
          :key="icon"
          class="d-flex"
          cols="3"
          lg="auto"
          md="3"
          sm="3"
          xl="auto"
          xs="3"
          xxl="auto"
          :class="{ 'justify-center': dp.mobile.value }"
        >
          <v-tooltip location="bottom" :text="text">
            <template #activator="{ props }">
              <i class="mx-4 text-h3 text-subtitle" :class="`devicon-${icon}`" v-bind="props" />
            </template>
          </v-tooltip>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card-title
            class="py-0 text-h4 text-lg-h4 text-md-h4 text-sm-h4 text-title text-xl-h4 text-xs-h3"
            :class="{ 'text-center': dp.mobile.value }"
          >
            Soft Skills
          </v-card-title>
        </v-col>
        <v-col class="font-weight-bold px-8 text-h6 text-title" cols="12">
          <v-card-text class="text-h6 pt-0 px-0">
            <span class="font-weight-bold text-title">Adaptability & Learning:</span>
            <span class="text-subtitle">
              Continuously learning new technologies like AI, enhancing testing expertise in cloud infrastructure, and
              expanding software development and communication skills.
            </span>
          </v-card-text>
          <br v-if="dp.mobile.value" />
          <v-card-text class="text-h6 px-0">
            <span class="font-weight-bold text-title">Agile Testing Expertise:</span>
            <span class="text-subtitle">
              Identifying early-stage issues in Agile (Scrum) development, designing effective testing strategies, and
              executing both manual and automated testing.
            </span>
          </v-card-text>
          <br v-if="dp.mobile.value" />
          <v-card-text class="text-h6 px-0">
            <span class="font-weight-bold text-title">Cross-Cultural Teamwork:</span>
            <span class="text-subtitle">
              Collaborated with the Sydney team on project development, strengthening cross-national communication and
              English proficiency.
            </span>
          </v-card-text>
          <br v-if="dp.mobile.value" />
          <v-card-text class="text-h6 px-0">
            <span class="font-weight-bold text-title">Leadership & Motivation:</span>
            <span class="text-subtitle">
              Passionate about sharing insights on testing and AI from work and side projects, fostering a culture of
              learning and team growth.
            </span>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
