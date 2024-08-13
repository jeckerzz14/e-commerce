import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import VueAxios from 'vue-axios';

// UI Framework - Vuetify
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vuetify/styles';

// Material Design Icons
import '@mdi/font/css/materialdesignicons.css';

// Global
import '@/assets/styles/main.scss';

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        iconfont: 'mdi',
    },
})
const app = createApp(App);

app.use(store);
app.use(router);
app.use(vuetify);
app.use(VueAxios, axios);

app.mount('#app');