import vuetify from '@/plugins/vuetify'
import App from './App.vue'
import { createApp } from 'vue'

const app = createApp(App)

app.use(vuetify)

app.mount('#app')
