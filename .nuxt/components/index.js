export { default as Header } from '../../components/Header.vue'
export { default as Footer } from '../../components/Footer/Footer.vue'
export { default as FooterMenu } from '../../components/Footer/FooterMenu.vue'
export { default as History } from '../../components/History/History.vue'
export { default as Instagram } from '../../components/Instagram/Instagram.vue'
export { default as Information } from '../../components/Information/Information.vue'
export { default as AppLinks } from '../../components/Menu/AppLinks.vue'
export { default as TheHeader } from '../../components/Menu/TheHeader.vue'
export { default as TheSideNav } from '../../components/Menu/TheSideNav.vue'
export { default as AluSloepen } from '../../components/Modellen/AluSloepen.vue'
export { default as AluSportboot } from '../../components/Modellen/AluSportboot.vue'

export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyFooterMenu = import('../../components/Footer/FooterMenu.vue' /* webpackChunkName: "components/footer-menu" */).then(c => c.default || c)
export const LazyHistory = import('../../components/History/History.vue' /* webpackChunkName: "components/history" */).then(c => c.default || c)
export const LazyInstagram = import('../../components/Instagram/Instagram.vue' /* webpackChunkName: "components/instagram" */).then(c => c.default || c)
export const LazyInformation = import('../../components/Information/Information.vue' /* webpackChunkName: "components/information" */).then(c => c.default || c)
export const LazyAppLinks = import('../../components/Menu/AppLinks.vue' /* webpackChunkName: "components/app-links" */).then(c => c.default || c)
export const LazyTheHeader = import('../../components/Menu/TheHeader.vue' /* webpackChunkName: "components/the-header" */).then(c => c.default || c)
export const LazyTheSideNav = import('../../components/Menu/TheSideNav.vue' /* webpackChunkName: "components/the-side-nav" */).then(c => c.default || c)
export const LazyAluSloepen = import('../../components/Modellen/AluSloepen.vue' /* webpackChunkName: "components/alu-sloepen" */).then(c => c.default || c)
export const LazyAluSportboot = import('../../components/Modellen/AluSportboot.vue' /* webpackChunkName: "components/alu-sportboot" */).then(c => c.default || c)
