<template>
  <div class="app-container">

       <!-- <TheHeader/>

       <TheSideNav/> -->

       <div class="app-content">
           <nuxt />
       </div>



   </div>
</template>

<script>
   import TheHeader from '~/components/Menu/TheHeader'
   import TheSideNav from '~/components/Menu/TheSideNav'
   export default {
       components: {
           TheHeader,
           TheSideNav,
       },
       computed: {
           isSidebar() {
               return this.$store.getters['nav/toggleSidebar']
           }
       },
       watch: {
           '$route': function() {
               if (process.client && this.isSidebar && window.innerWidth < 768) {
                   this.$store.dispatch('nav/toggleSidebar')
               }
           },
       }
   }
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    width: 100vw;
}
*, *::before,
*::after {
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  list-style: none;
}
</style>
