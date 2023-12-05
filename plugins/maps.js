import { defineNuxtPlugin } from '#app'
import plugin from 'vue-yandex-maps'


const settings = {
  apiKey: '2a0f0e9d-44f3-4f13-8628-12588d752fc3', // Индивидуальный ключ API
  lang: 'ru_RU', // Используемый язык
  coordorder: 'latlong', // Порядок задания географических координат
  debug: false, // Режим отладки
  version: '2.1' // Версия Я.Карт
}
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(plugin, settings)
});