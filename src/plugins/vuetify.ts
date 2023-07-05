import Vue from 'vue'
import type { Framework } from 'vuetify'
import Vuetify from 'vuetify/lib'
import { Ripple } from 'vuetify/lib/directives'

Vue.use(Vuetify, {
  directives: {
    Ripple
  }
})

import colors from 'vuetify/lib/util/colors'

// import variables from '@/styles/colors.scss'
// broke the variable import when updating deps
const variables = {
  // Main colors
  primary: '#0f081d',
  secondary: '#231936',
  download: '#915fff',
  upload: '#b940ff',
  ratio: '#9CA3AF',
  state: '#9CA3AF',
  category: '#915fff',
  tags: '#915fff',
  tracker: '#915fff',
  border: '#ffffffc7',
  // Torrent status colors
  'torrent-done': '#26a16c',
  'torrent-downloading': '#b940ff',
  'torrent-fail': '#f83e70',
  'torrent-errored': '#f83e70',
  'torrent-paused': '#9CA3AF',
  'torrent-queued': '#2e5eaa',
  'torrent-seeding': '#915fff',
  'torrent-checking': '#ff7043',
  'torrent-stalled': '#4ADE80',
  'torrent-metadata': '#7e57c2',
  'torrent-moving': '#f83e70'
}

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg'
  },
  theme: {
    options: {
      customProperties: true
    },
    dark: true,
    themes: {
      light: {
        accent: '#591ade',
        background: variables.primary,
        selected: variables.state,
        red: colors.red.accent2,
        ...variables
      },
      dark: {
        accent: '#591ade',
        background: variables.primary,
        selected: variables.primary,
        red: colors.red.accent3,
        ...variables
      }
    }
  }
})

declare module 'vue/types/vue' {
  // this.$vuetify inside Vue components
  interface Vue {
    $vuetify: Framework
  }
}
