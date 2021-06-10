import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: '#4CAF50',
            secondary: '#4d4d4d',
            accent: '#8c9eff',
            error: '#b71c1c',
          },
        },
      },
});
