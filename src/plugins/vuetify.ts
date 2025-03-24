import 'devicon/devicon.min.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { Scroll } from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

export default createVuetify({
  directives: { Scroll },
  icons: { aliases, defaultSet: 'mdi', sets: { mdi } },
  theme: {
    themes: {
      light: {
        colors: {
          background: '#657b83',
          surface: '#eee8d5',
          title: '#586e75',
          subtitle: '#657b83',
          primary: '#268bd2'
        }
      },
      dark: {
        colors: {
          background: '#002b36',
          surface: '#073642',
          title: '#93a1a1',
          subtitle: '#839496',
          primary: '#d33682'
        }
      }
    },
    variations: false
  }
})
