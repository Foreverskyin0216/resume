<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import { VCard, VCardText, VCardTitle } from 'vuetify/components/VCard'
import { VCol, VContainer, VRow } from 'vuetify/components/VGrid'
import { VTimeline, VTimelineItem } from 'vuetify/components/VTimeline'
import { VTooltip } from 'vuetify/components/VTooltip'

const { mobile } = useDisplay()

const trendTechStack = [
  { icon: 'javascript-plain', text: 'JavaScript' },
  { icon: 'typescript-plain', text: 'TypeScript' },
  { icon: 'cypressio-plain', text: 'Cypress' },
  { icon: 'jest-plain', text: 'Jest' },
  { icon: 'postman-plain', text: 'Postman' },
  { icon: 'amazonwebservices-plain-wordmark', text: 'AWS' },
  { icon: 'github-original', text: 'GitHub' },
  { icon: 'jira-plain', text: 'Jira' }
]

const vangoodTechStack = [
  { icon: 'python-plain', text: 'Python' },
  { icon: 'selenium-original', text: 'Selenium' },
  { icon: 'pytest-plain', text: 'Pytest' },
  { icon: 'docker-plain', text: 'Docker' },
  { icon: 'django-plain', text: 'Django' },
  { icon: 'gitlab-plain', text: 'GitLab' }
]

const exositeTechStack = [
  { icon: 'python-plain', text: 'Python' },
  { icon: 'selenium-original', text: 'Selenium' },
  { icon: 'insomnia-plain', text: 'Insomnia' },
  { icon: 'github-original', text: 'GitHub' },
  { icon: 'jenkins-plain', text: 'Jenkins' },
  { icon: 'jira-plain', text: 'Jira' }
]
</script>

<template>
  <v-card class="min-height-100" color="surface" flat height="auto">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card-title
            class="text-h4 text-lg-h4 text-md-h4 text-sm-h4 text-title text-xl-h4 text-xs-h3"
            :class="{ 'text-center': mobile }"
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
            :class="{ 'pl-6': !mobile, 'px-0': mobile }"
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
                      :class="{ 'text-right': !mobile, 'pl-0': mobile }"
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
                      <br v-if="mobile" />
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
                        v-for="{ icon, text } in trendTechStack"
                        :key="icon"
                        cols="3"
                        lg="auto"
                        md="3"
                        sm="3"
                        xl="auto"
                        xs="3"
                        xxl="auto"
                      >
                        <v-tooltip location="bottom" open-on-click :text="text">
                          <template #activator="{ props }">
                            <i class="text-h4 text-subtitle" :class="`devicon-${icon}`" v-bind="props" />
                          </template>
                        </v-tooltip>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12">
                    <v-card-text class="pl-0 py-0 text-h5 text-title">
                      <strong>Responsibilities:</strong>
                      <v-card-text class="text-h6" :class="{ 'px-0': mobile }">
                        <span class="font-weight-bold text-title">Cloud Testing:</span>
                        <span class="text-subtitle">
                          Performing testing on Cloud Posture's features across various cloud platforms (AWS, Azure, and
                          GCP), including infrastructure scanning, real-time monitoring, compliance checks, and report
                          generation.
                        </span>
                      </v-card-text>
                      <br v-if="mobile" />
                      <v-card-text class="text-h6" :class="{ 'px-0': mobile }">
                        <span class="font-weight-bold text-title">Automated Testing:</span>
                        <span class="text-subtitle">
                          Developing end-to-end tests for frontend and APIs using Cypress; implementing integration
                          tests for serverless backend services using Jest and AWS SDK.
                        </span>
                      </v-card-text>
                      <br v-if="mobile" />
                      <v-card-text class="text-h6" :class="{ 'px-0': mobile }">
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
                      :class="{ 'text-right': !mobile, 'pl-0': mobile }"
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
                        v-for="{ icon, text } in vangoodTechStack"
                        :key="icon"
                        cols="3"
                        lg="auto"
                        md="3"
                        sm="3"
                        xl="auto"
                        xs="3"
                        xxl="auto"
                      >
                        <v-tooltip location="bottom" open-on-click :text="text">
                          <template #activator="{ props }">
                            <i class="text-h4 text-subtitle" :class="`devicon-${icon}`" v-bind="props" />
                          </template>
                        </v-tooltip>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12">
                    <v-card-text class="pl-0 py-0 text-h5 text-title">
                      <strong>Responsibilities:</strong>
                      <v-card-text class="text-h6" :class="{ 'px-0': mobile }">
                        <span class="font-weight-bold text-title">Game Testing:</span>
                        <span class="text-subtitle">
                          Performing manual testing for web games, covering areas such as game UI, game logic, financial
                          audits, and user permissions.
                        </span>
                      </v-card-text>
                      <br v-if="mobile" />
                      <v-card-text class="text-h6" :class="{ 'px-0': mobile }">
                        <span class="font-weight-bold text-title">Automated Testing:</span>
                        <span class="text-subtitle">
                          Developing automated tests for game UI and backend functions using Pytest and Selenium.
                        </span>
                      </v-card-text>
                      <br v-if="mobile" />
                      <v-card-text class="text-h6" :class="{ 'px-0': mobile }">
                        <span class="font-weight-bold text-title">Building a Test System:</span>
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
                      :class="{ 'text-right': !mobile, 'pl-0': mobile }"
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
                        v-for="{ icon, text } in exositeTechStack"
                        :key="icon"
                        cols="3"
                        lg="auto"
                        md="3"
                        sm="3"
                        xl="auto"
                        xs="3"
                        xxl="auto"
                      >
                        <v-tooltip location="bottom" open-on-click :text="text">
                          <template #activator="{ props }">
                            <i class="text-h4 text-subtitle" :class="`devicon-${icon}`" v-bind="props" />
                          </template>
                        </v-tooltip>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12">
                    <v-card-text class="pl-0 py-0 text-h5 text-title">
                      <strong>Responsibilities:</strong>
                      <v-card-text class="text-h6" :class="{ 'px-0': mobile }">
                        <span class="font-weight-bold text-title">Automated Testing:</span>
                        <span class="text-subtitle">
                          Developing automated tests for Murano using Robot Framework and Selenium.
                        </span>
                      </v-card-text>
                      <br v-if="mobile" />
                      <v-card-text class="text-h6" :class="{ 'px-0': mobile }">
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
            :class="{ 'text-center': mobile }"
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
            :class="{ 'pl-6': !mobile, 'px-0': mobile }"
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
                      :class="{ 'text-right': !mobile, 'pl-0': mobile }"
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
