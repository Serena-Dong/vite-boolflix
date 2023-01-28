import { createApp } from 'vue'
import './assets/css/style.css'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHatWizard)
Vue.component('font-awesome-icon', FontAwesomeIcon)


const app = createApp(App)

app.mount('#app')
