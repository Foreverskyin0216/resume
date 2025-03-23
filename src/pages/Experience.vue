<script lang="ts" setup>
import { VCard, VCardText, VCardTitle, VCol, VContainer, VRow, VTimeline, VTimelineItem } from 'vuetify/components'
import { useDisplay } from 'vuetify'

const dp = useDisplay()

const trendTechStack = [
  'typescript-plain',
  'cypressio-plain',
  'jest-plain',
  'postman-plain',
  'amazonwebservices-plain-wordmark',
  'github-original',
  'jira-plain'
]

const vangoodTechStack = [
  'python-plain',
  'selenium-original',
  'pytest-plain',
  'docker-plain',
  'django-plain',
  'gitlab-plain'
]

const exositeTechStack = [
  'python-plain',
  'selenium-original',
  'insomnia-plain',
  'kibana-plain',
  'github-original',
  'jira-plain'
]
</script>

<template>
  <v-card class="min-height-100" color="surface" flat height="auto">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card-title
            class="text-h4 text-lg-h4 text-md-h4 text-sm-h4 text-title text-xl-h4 text-xs-h3"
            :class="{ 'text-center': dp.mobile.value }"
          >
            Experience
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
                  <v-col align-self="center" class="py-0" lg="6" md="12" sm="12" xl="6" xs="12" xxl="6">
                    <v-card-text
                      class="pl-0 py-0 text-h5 text-lg-h4 text-md-h5 text-sm-h5 text-title text-xl-h4 text-xs-h5 text-xxl-h4"
                    >
                      <strong>Sr. QA Engineer</strong>
                    </v-card-text>
                  </v-col>
                  <v-col align-self="center" class="py-0" cols="12" lg="6" md="12" sm="12" xl="6" xs="12" xxl="6">
                    <v-card-text
                      class="pr-4 py-0 font-weight-bold text-h6 text-subtitle"
                      :class="{ 'text-right': !dp.mobile.value, 'pl-0': dp.mobile.value }"
                    >
                      Nov. 2022 - Present
                    </v-card-text>
                  </v-col>
                  <v-col class="pt-0 text-h5" cols="12">
                    <v-card-text class="font-weight-bold pl-0 py-0 text-h6 text-red-lighten-1">
                      Trend Micro
                    </v-card-text>
                  </v-col>
                  <v-col class="py-2" cols="12">
                    <v-card-text class="pl-0 py-0 text-h5 text-title">
                      <strong>Project:</strong>
                      <br v-if="dp.mobile.value" />
                      Trend Vision One Cloud Posture
                    </v-card-text>
                  </v-col>
                  <v-col class="py-2" cols="12">
                    <v-row>
                      <v-col cols="12">
                        <v-card-text class="font-weight-bold pl-0 py-0 text-h5 text-subtitle">
                          Tech Stack:
                        </v-card-text>
                      </v-col>
                      <v-col
                        v-for="icon in trendTechStack"
                        :key="icon"
                        cols="3"
                        lg="auto"
                        md="3"
                        sm="3"
                        xl="auto"
                        xs="3"
                        xxl="auto"
                      >
                        <i class="text-h4 text-subtitle" :class="`devicon-${icon}`" />
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12">
                    <v-card-text class="pl-0 py-0 text-h5 text-title">
                      <strong>Responsibilities:</strong>
                      <v-card-text class="text-h6">
                        <span class="font-weight-bold text-title">Testing Cloud Posture:</span>
                        <span class="text-subtitle">
                          Testing Cloud Posture's features across various cloud platforms (AWS, Azure, and GCP),
                          including infrastructure scanning, real-time monitoring, compliance checks, and report
                          generation.
                        </span>
                      </v-card-text>
                      <br v-if="dp.mobile.value" />
                      <v-card-text class="text-h6">
                        <span class="font-weight-bold text-title">Automated Test Development:</span>
                        <span class="text-subtitle">
                          Developing end-to-end tests for frontend and APIs using Cypress; implementing integration
                          tests for serverless backend services using Jest and AWS SDK.
                        </span>
                      </v-card-text>
                      <br v-if="dp.mobile.value" />
                      <v-card-text class="text-h6">
                        <span class="font-weight-bold text-title">Tool Development:</span>
                        <span class="text-subtitle">
                          Developing user-friendly automation scripts and tools for QA, developers, and DevOps as
                          needed, while exploring integration of AI technologies into automation tools.
                        </span>
                      </v-card-text>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-container>
            </v-timeline-item>
            <v-timeline-item dot-color="subtitle" fill-dot line-inset="0" size="x-small" width="100%">
              <v-container fluid>
                <v-row>
                  <v-col align-self="center" class="py-0" lg="6" md="12" sm="12" xl="6" xs="12" xxl="6">
                    <v-card-text
                      class="pl-0 py-0 text-h5 text-lg-h4 text-md-h5 text-sm-h5 text-title text-xl-h4 text-xs-h5 text-xxl-h4"
                    >
                      <strong>QA Engineer</strong>
                    </v-card-text>
                  </v-col>
                  <v-col align-self="center" class="py-0" cols="12" lg="6" md="12" sm="12" xl="6" xs="12" xxl="6">
                    <v-card-text
                      class="pr-4 py-0 font-weight-bold text-h6 text-subtitle"
                      :class="{ 'text-right': !dp.mobile.value, 'pl-0': dp.mobile.value }"
                    >
                      Aug. 2020 - Sep. 2022
                    </v-card-text>
                  </v-col>
                  <v-col class="pt-0 text-h5" cols="12">
                    <v-card-text class="font-weight-bold pl-0 py-0 text-h6 text-green-lighten-1"> Vangood </v-card-text>
                  </v-col>
                  <v-col class="py-2" cols="12">
                    <v-row>
                      <v-col cols="12">
                        <v-card-text class="font-weight-bold pl-0 py-0 text-h5 text-subtitle">
                          Tech Stack:
                        </v-card-text>
                      </v-col>
                      <v-col
                        v-for="icon in vangoodTechStack"
                        :key="icon"
                        cols="3"
                        lg="auto"
                        md="3"
                        sm="3"
                        xl="auto"
                        xs="3"
                        xxl="auto"
                      >
                        <i class="text-h4 text-subtitle" :class="`devicon-${icon}`" />
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12">
                    <v-card-text class="pl-0 py-0 text-h5 text-title">
                      <strong>Responsibilities:</strong>
                      <v-card-text class="text-h6">
                        <span class="font-weight-bold text-title">Web Game Testing:</span>
                        <span class="text-subtitle">
                          Performing manual testing for web games, covering areas such as game UI, game logic, financial
                          audits, and user permissions.
                        </span>
                      </v-card-text>
                      <br v-if="dp.mobile.value" />
                      <v-card-text class="text-h6">
                        <span class="font-weight-bold text-title">Automated Test Development:</span>
                        <span class="text-subtitle">
                          Developing automated tests for game UI and backend functions using Pytest and Selenium.
                        </span>
                      </v-card-text>
                      <br v-if="dp.mobile.value" />
                      <v-card-text class="text-h6">
                        <span class="font-weight-bold text-title">Test System Development:</span>
                        <span class="text-subtitle">
                          Developing a testing system with Django, Docker, and Redis Queue, focusing on test management
                          and execution, task scheduling, and result reporting.
                        </span>
                      </v-card-text>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-container>
            </v-timeline-item>
            <v-timeline-item dot-color="subtitle" fill-dot line-inset="0" size="x-small" width="100%">
              <v-container fluid>
                <v-row>
                  <v-col align-self="center" class="py-0" lg="6" md="12" sm="12" xl="6" xs="12" xxl="6">
                    <v-card-text
                      class="pl-0 py-0 text-h5 text-lg-h4 text-md-h5 text-sm-h5 text-title text-xl-h4 text-xs-h5 text-xxl-h4"
                    >
                      <strong>QA Intern</strong>
                    </v-card-text>
                  </v-col>
                  <v-col align-self="center" class="py-0" cols="12" lg="6" md="12" sm="12" xl="6" xs="12" xxl="6">
                    <v-card-text
                      class="pr-4 py-0 font-weight-bold text-h6 text-subtitle"
                      :class="{ 'text-right': !dp.mobile.value, 'pl-0': dp.mobile.value }"
                    >
                      Jul. 2019 to Jun. 2020
                    </v-card-text>
                  </v-col>
                  <v-col class="pt-0 text-h5" cols="12">
                    <v-card-text class="font-weight-bold pl-0 py-0 text-h6 text-blue-lighten-1"> Exosite </v-card-text>
                  </v-col>
                  <v-col class="py-2" cols="12">
                    <v-card-text class="pl-0 py-0 text-h5 text-title">
                      <strong>Project:</strong>
                      <br v-if="dp.mobile.value" />
                      Murano
                    </v-card-text>
                  </v-col>
                  <v-col class="py-2" cols="12">
                    <v-row>
                      <v-col cols="12">
                        <v-card-text class="font-weight-bold pl-0 py-0 text-h5 text-subtitle">
                          Tech Stack:
                        </v-card-text>
                      </v-col>
                      <v-col
                        v-for="icon in exositeTechStack"
                        :key="icon"
                        cols="3"
                        lg="auto"
                        md="3"
                        sm="3"
                        xl="auto"
                        xs="3"
                        xxl="auto"
                      >
                        <i class="text-h4 text-subtitle" :class="`devicon-${icon}`" />
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12">
                    <v-card-text class="pl-0 py-0 text-h5 text-title">
                      <strong>Responsibilities:</strong>
                      <v-card-text class="text-h6">
                        <span class="font-weight-bold text-title">Automated Test Development:</span>
                        <span class="text-subtitle">
                          Developing automated tests for Murano using Robot Framework and Selenium.
                        </span>
                      </v-card-text>
                      <br v-if="dp.mobile.value" />
                      <v-card-text class="text-h6">
                        <span class="font-weight-bold text-title">Test Report Analysis:</span>
                        <span class="text-subtitle">
                          Analyzing daily test reports, Kibana logs, and Jenkins execution records, and reporting any
                          issues identified.
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
      <v-row no-gutters>
        <v-col cols="12">
          <v-card-title
            class="text-h4 text-lg-h4 text-md-h4 text-sm-h4 text-title text-xl-h4 text-xs-h3"
            :class="{ 'text-center': dp.mobile.value }"
          >
            Education
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
                  <v-col align-self="center" class="py-0" lg="6" md="12" sm="12" xl="6" xs="12" xxl="6">
                    <v-card-text
                      class="pl-0 py-0 text-h6 text-lg-h5 text-md-h6 text-sm-h6 text-title text-xl-h5 text-xs-h6 text-xxl-h5"
                    >
                      <strong>National Chung Hsing University</strong>
                    </v-card-text>
                  </v-col>
                  <v-col align-self="center" class="py-0" cols="12" lg="6" md="12" sm="12" xl="6" xs="12" xxl="6">
                    <v-card-text
                      class="pr-4 py-0 font-weight-bold text-h6 text-subtitle"
                      :class="{ 'text-right': !dp.mobile.value, 'pl-0': dp.mobile.value }"
                    >
                      Sep. 2016 - Jun. 2020
                    </v-card-text>
                  </v-col>
                  <v-col class="pt-0 text-h5" cols="12">
                    <v-card-text class="pl-0 py-0 text-h6 text-subtitle">
                      Bachelor of Management Information Systems
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
