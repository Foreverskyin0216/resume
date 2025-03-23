<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import { VCard, VCardText, VCardTitle, VCol, VContainer, VRow, VTimeline, VTimelineItem } from 'vuetify/components'

const dp = useDisplay()
</script>

<template>
  <v-card class="align-center d-flex flex-column min-height-100" color="surface" flat height="auto">
    <v-container class="h-100" fluid>
      <v-row>
        <v-col cols="12">
          <v-card-title
            class="text-h4 text-lg-h4 text-md-h4 text-sm-h4 text-title text-xl-h4 text-xs-h3 text-xxl-h4"
            :class="{ 'text-center': dp.mobile.value }"
          >
            Side Projects
          </v-card-title>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-timeline
            align="start"
            density="compact"
            truncate-line="start"
            :class="{ 'pl-6': !dp.mobile.value, 'px-0': dp.mobile.value }"
          >
            <v-timeline-item dot-color="subtitle" fill-dot line-inset="0" size="x-small" width="100%">
              <v-container fluid>
                <v-row>
                  <v-col class="py-0" cols="12">
                    <v-card-text
                      class="pl-0 py-0 text-h5 text-lg-h4 text-md-h5 text-sm-h5 text-title text-xl-h4 text-xs-h5 text-xxl-h4"
                    >
                      <strong>PlayWord</strong>
                    </v-card-text>
                  </v-col>
                  <v-col class="py-0" cols="12">
                    <v-card-text class="pl-0 py-0">
                      <a class="mr-2" href="https://www.npmjs.com/package/@playword/core">
                        <img src="https://img.shields.io/npm/v/@playword/core" alt="NPM Version" />
                      </a>
                      <a class="mr-2" href="https://github.com/Foreverskyin0216/playword/actions/workflows/ci.yml">
                        <img
                          src="https://github.com/Foreverskyin0216/playword/actions/workflows/ci.yml/badge.svg"
                          alt="CI"
                        />
                      </a>
                      <a class="mr-2" href="https://codecov.io/gh/Foreverskyin0216/playword">
                        <img src="https://codecov.io/gh/Foreverskyin0216/playword/graph/badge.svg" alt="codecov" />
                      </a>
                      <a href="https://codecov.io/gh/Foreverskyin0216/playword">
                        <img
                          src="https://img.shields.io/github/stars/Foreverskyin0216/playword?color=blue&style=flat"
                          alt="GitHub stars"
                        />
                      </a>
                    </v-card-text>
                  </v-col>
                  <v-col class="text-h5" cols="12" lg="6" md="12" sm="12" xl="6" xs="12" xxl="6">
                    <v-card-text class="pl-0 py-0 text-h6 text-subtitle">
                      A node package that lets you automate browsers with AI, boosting productivity and making testing
                      more enjoyable!
                    </v-card-text>
                  </v-col>
                  <v-col class="py-2" cols="12">
                    <v-card-text class="d-flex pl-0 py-0 text-h5 text-title">
                      <strong>Repository:</strong>
                      <br v-if="dp.mobile.value" />
                      <a class="link text-subtitle" href="https://github.com/Foreverskyin0216/playword">
                        <i class="devicon-github-plain mx-4 text-h4 text-subtitle" />
                      </a>
                    </v-card-text>
                  </v-col>
                  <v-col cols="12">
                    <v-card-text class="pl-0 py-0 text-h5 text-title">
                      <strong>Why PlayWord?</strong>
                      <v-card-text class="text-h6">
                        <span class="font-weight-bold text-title">Enhanced Dev Experience:</span>
                        <span class="text-subtitle">
                          Locating elements in traditional testing can be frustrating and time-consuming. PlayWord uses
                          AI to make this process faster and more intuitive.
                        </span>
                      </v-card-text>
                      <br v-if="dp.mobile.value" />
                      <v-card-text class="text-h6">
                        <span class="font-weight-bold text-title">Boosted Dev Speed:</span>
                        <span class="text-subtitle">
                          raditional testing requires writing test cases and code separately. With PlayWord, test cases
                          double as both documentation and executable tests, saving valuable time!
                        </span>
                      </v-card-text>
                      <br v-if="dp.mobile.value" />
                      <v-card-text class="text-h6">
                        <span class="font-weight-bold text-title">Reduced Maintenance Cost:</span>
                        <span class="text-subtitle">
                          UI changes often lead to high maintenance costs in traditional testing. PlayWord's AI-powered
                          adaptability automatically adjusts to UI changes, minimizing the need for manual updates.
                        </span>
                      </v-card-text>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-container>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
