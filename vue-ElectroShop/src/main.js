import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.css'

const app = createApp(App)

// Router
import router from './router'
app.use(router)

// Pinia
import { createPinia } from 'pinia'
app.use(createPinia())


// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

app.use(vuetify)

app.mount('#app')