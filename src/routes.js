import Home from './views/Home.vue'
import ForYourPet from './views/ForYourPet.vue'
import CommunityCats from './views/CommunityCats.vue'
import WellnessClinic from './views/WellnessClinic.vue'
import ClinicStaff from './views/ClinicStaff.vue'
import SpayNeuter from './views/SpayNeuter.vue'
import NeedHelp from './views/NeedHelp.vue'
import LostFound from './views/LostFound.vue'
import DonateModal from './views/DonateModal.vue'
import VolunteerModal from './views/VolunteerModal.vue'
import AppointmentModal from './views/AppointmentModal.vue'
import Storybook from './views/Storybook.vue'
import Routes from './views/Routes.vue'



import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  { path: '/for-your-pet', component: ForYourPet, meta: { title: 'For Your Pet' } },
  { path: '/community-cats', component: CommunityCats, meta: { title: 'Community Cats' } },
  { path: '/wellness-clinic', component: WellnessClinic, meta: { title: 'Wellness clinic' } },
  { path: '/clinic-staff', component: ClinicStaff, meta: { title: 'Clinic Staff' } },
  { path: '/spay-neuter', component: SpayNeuter, meta: { title: 'Spay Neuter' } },
  { path: '/need-help', component: NeedHelp, meta: { title: 'Need Help' } },
  { path: '/lost-found', component: LostFound, meta: { title: 'Lost & Found' } },
  { path: '/donate-modal', component: DonateModal, meta: { title: 'Donate modal' } },
  { path: '/volunteer-modal', component: VolunteerModal, meta: { title: 'Volunteer modal' } },
  { path: '/appointment-modal', component: AppointmentModal, meta: { title: 'Appointment modal' } },
  { path: '/storybook', component: Storybook, meta: { title: 'Storybook' } },
  { path: '/routes', component: Routes },
  { path: '/:path(.*)', component: NotFound },
]
