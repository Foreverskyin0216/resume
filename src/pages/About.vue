<script lang="ts" setup>
import { mdiEmail, mdiPhone } from '@mdi/js'
import { useDisplay } from 'vuetify'
import {
  VAvatar,
  VCard,
  VCardText,
  VCardTitle,
  VCol,
  VContainer,
  VDivider,
  VIcon,
  VImg,
  VRow
} from 'vuetify/components'

const dp = useDisplay()
</script>

<template>
  <v-card class="align-center d-flex min-height-100" color="surface" flat height="auto">
    <v-container class="h-100" fluid>
      <v-row class="h-100" justify="center" no-gutters>
        <v-col align-self="center" cols="12">
          <v-card-title class="text-center">
            <v-avatar size="200">
              <v-img cover src="@/assets/avatar.jpg" />
            </v-avatar>
          </v-card-title>
          <v-card-text
            class="pb-0 text-center text-h4 text-lg-h4 text-title text-md-h3 text-sm-h4 text-xl-h4 text-xs-h5 text-xxl-h4"
          >
            Hello, I am Steve Lu
          </v-card-text>
          <v-card-text
            class="pt-0 text-center text-h6 text-lg-h6 text-md-h5 text-sm-h6 text-subtitle text-xl-h6 text-xs-h6"
          >
            <a class="contact-info text-subtitle" href="mailto:foreverskyin@gmail.com">
              <v-icon size="x-small" :icon="mdiEmail" />
              foreverskyin@gmail.com
            </a>
            <br v-if="dp.mobile.value" />
            <a class="contact-info text-subtitle" href="tel:+886-965-615-657">
              <v-icon size="x-small" :icon="mdiPhone" />
              +886-965-615-657
            </a>
            <br v-if="dp.mobile.value" />
            <v-divider v-else class="mx-2" opacity=".7" vertical />
          </v-card-text>
          <v-card-text
            class="mx-auto px-0 text-h5 text-lg-h5 text-md-h5 text-sm-h5 text-title text-xl-h5 text-xs-h5"
            :class="{ 'w-75': !dp.mobile.value }"
          >
            A passionate test engineer with 4+ years of experience in manual and automation testing, viewing QA as a
            craft and striving for mastery like an artisan.
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
