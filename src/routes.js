import Home from './views/Home.vue'
import ForYourPet from './views/ForYourPet.vue'
import CommunityCats from './views/CommunityCats.vue'
import WellnessClinic from './views/WellnessClinic.vue'
import ClinicStaff from './views/ClinicStaff.vue'
import SpayNeuter from './views/SpayNeuter.vue'
import NeedHelp from './views/NeedHelp.vue'
import LostFound from './views/LostFound.vue'
import AnimalCruelty from './views/AnimalCruelty.vue'
import Rehoming from './views/Rehoming.vue'
import BehaviorResources from './views/BehaviorResources.vue'
import Volunteer from './views/Volunteer.vue'
import Foster from './views/Foster.vue'
import ForKids from './views/ForKids.vue'
import AboutUs from './views/AboutUs.vue'
import Careers from './views/Careers.vue'
import Impact from './views/Impact.vue'
import Statistics from './views/Statistics.vue'
import PetList from './views/PetList.vue'
import PetProfile from './views/PetProfile.vue'
import AdoptionInfo from './views/AdoptionInfo.vue'
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
  { path: '/animal-cruelty', component: AnimalCruelty, meta: { title: 'Animal Cruelty' } },
  { path: '/rehoming', component: Rehoming, meta: { title: 'Rehoming' } },
  { path: '/behavior-resources', component: BehaviorResources, meta: { title: 'Behavior Resources' } },
  { path: '/volunteer', component: Volunteer, meta: { title: 'Volunteer' } },
  { path: '/foster', component: Foster, meta: { title: 'Foster' } },
  { path: '/for-kids', component: ForKids, meta: { title: 'For Kids' } },
  { path: '/about-us', component: AboutUs, meta: { title: 'About Us' } },
  { path: '/careers', component: Careers, meta: { title: 'Careers' } },
  { path: '/impact', component: Impact, meta: { title: 'Impact' } },
  { path: '/statistics', component: Statistics, meta: { title: 'Statistics' } },
  { path: '/pet-list', component: PetList, meta: { title: 'Pet List' } },
  { path: '/pet-profile', component: PetProfile, meta: { title: 'Pet Profile' } },
  { path: '/adoption-info', component: AdoptionInfo, meta: { title: 'Adoption Info' } },
  { path: '/donate-modal', component: DonateModal, meta: { title: 'Donate modal' } },
  { path: '/volunteer-modal', component: VolunteerModal, meta: { title: 'Volunteer modal' } },
  { path: '/appointment-modal', component: AppointmentModal, meta: { title: 'Appointment modal' } },
  { path: '/storybook', component: Storybook, meta: { title: 'Storybook' } },
  { path: '/routes', component: Routes },
  { path: '/:path(.*)', component: NotFound },
]
