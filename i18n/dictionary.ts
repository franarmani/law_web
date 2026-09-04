import common from './locales/es/common.json'
import footer from './locales/es/footer.json'
import navbar from './locales/es/navbar.json'
import metadata from './locales/es/metadata.json'
import areaUi from './locales/es/areas/_ui.json'
import areaConsumidor from './locales/es/areas/consumidor.json'
import areaSalud from './locales/es/areas/salud.json'
import areaAccidentesTransito from './locales/es/areas/accidentes-transito.json'
import areaLaboral from './locales/es/areas/laboral.json'
import areaFamilia from './locales/es/areas/familia.json'
import areaLegalTech from './locales/es/areas/legal-tech.json'
import homeAbout from './locales/es/home/about.json'
import homeAreasGrid from './locales/es/home/areasGrid.json'
import homeContact from './locales/es/home/contact.json'
import homeHero from './locales/es/home/hero.json'
import homeHowWeWork from './locales/es/home/howWeWork.json'
import homeTrustBar from './locales/es/home/trustBar.json'
import homeTeam from './locales/es/home/team.json'
import homeWhyUs from './locales/es/home/whyUs.json'
import homeFaq from './locales/es/home/faq.json'

export const esDictionary = {
  common,
  metadata,
  navbar,
  footer,
  home: {
    hero: homeHero,
    trustBar: homeTrustBar,
    areasGrid: homeAreasGrid,
    team: homeTeam,
    howWeWork: homeHowWeWork,
    about: homeAbout,
    whyUs: homeWhyUs,
    faq: homeFaq,
    contact: homeContact,
  },
  areas: {
    ui: areaUi,
    content: {
      consumidor: areaConsumidor,
      salud: areaSalud,
      'accidentes-transito': areaAccidentesTransito,
      laboral: areaLaboral,
      familia: areaFamilia,
      'legal-tech': areaLegalTech,
    },
  },
} as const

export type EsDictionary = typeof esDictionary
