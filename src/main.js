import { createApp } from 'vue'
import App from './App.vue'
import mitt from "mitt"
import router from './router/router.js'
import store from "./store.js"
import VueCookies from "vue3-cookies";

import "./Model/Date.js"

Date.prototype.isTooDay = function(){
    const tooDay = new Date()
    
    const isSameYear = this.getYear() == tooDay.getYear()
    const isSameMonth = this.getMonth() == tooDay.getMonth()
    const isSameDay = this.getDate() == tooDay.getDate()

    return isSameYear && isSameMonth && isSameDay
}

let emitter = mitt()
let app = createApp(App)
app.use(VueCookies, {
    expireTimes: "30d",
    domain: "",
    secure: false,
    sameSite: "None"
});
app.config.globalProperties.emitter = emitter



app.use(router)
app.use(store)
app.mount('#app')
