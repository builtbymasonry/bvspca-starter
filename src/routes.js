import Home from './views/Home.vue'
import DonateModal from './views/DonateModal.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/donate-modal', component: DonateModal, meta: { title: 'Donate modal' } },
  { path: '/:path(.*)', component: NotFound },
]
