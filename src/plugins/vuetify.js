import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#E1B100',
        secondary: '#003356',
      },
      dark: {
        primary: '#E1B100',
        secondary: '#FFFFFF',
      },
    },
  },
})
