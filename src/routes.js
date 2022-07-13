import Home from './views/Home.vue'
import ForYourPet from './views/ForYourPet.vue'
import WellnessClinic from './views/WellnessClinic.vue'
import DonateModal from './views/DonateModal.vue'
import VolunteerModal from './views/VolunteerModal.vue'
import AppointmentModal from './views/AppointmentModal.vue'

import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/for-your-pet', component: ForYourPet, meta: { title: 'For Your Pet' } },
  { path: '/welness-clinic', component: WellnessClinic, meta: { title: 'Welness clinic' } },
  { path: '/donate-modal', component: DonateModal, meta: { title: 'Donate modal' } },
  { path: '/volunteer-modal', component: VolunteerModal, meta: { title: 'Volunteer modal' } },
  { path: '/appointment-modal', component: AppointmentModal, meta: { title: 'Appointment modal' } },
  { path: '/:path(.*)', component: NotFound },
]
