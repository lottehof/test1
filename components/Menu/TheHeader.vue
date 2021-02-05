<!-- <template>
    <header>
      <div class="drawer-toggle" role="button" @click="$store.dispatch('nav/toggleSidebar')">
          <div class="bar"></div>
          <div class="bar"></div>
      </div>

        <div class="brand-name" @click="$store.dispatch('nav/toggleSidebar')">
            <nuxt-link to="/">
              Menu
            </nuxt-link>
        </div>
        <img src="@/assets/img/logo2.png" alt="logo" class="logo">



    </header>
</template>

<script>
    import AppLinks from '~/components/Menu/AppLinks'
    export default {
        components: { AppLinks }
    }
</script>

<style scoped>
.logo{
  width: 50%;
  margin-right: 30px;
  height: auto;

}
  header{
        display: flex;
        align-items: center;
        background-color: black;
        background-position: top;
        padding: 0 16px;
        height: 100px;
        width: 100vw;

    }
    header:nth-child{
        justify-self: end !important;
    }
    .app-links{
        justify-self: end;
        display: none;
    }
    .brand-name {
        margin: 0px;
        font-size: 18px;
        margin-right: 20px;
        /* width: 200px; */
         font-family: HelveticaNeue;
    }


    .brand-name a {
        text-decoration: none;
        color: white;
    }
    .drawer-toggle .bar {
        width: 70%;
        height: 2px;
        background-color: white;
    }
    .drawer-toggle {
        display: flex;
        justify-self: start;
        flex-direction: column;
        justify-content: space-around;
        height: 20%;
        width: 25px;
        cursor: pointer;
    }


    @media (min-width: 430px) {
      .logo{
        width: 40%;
        margin-right: 30px;
        height: auto;
        margin-left: auto;
        margin-right: auto;
      }

    }

    @media (min-width: 900px) {
      .logo{
        width: 300px;
        margin-right: 30px;
        height: auto;
        margin-left: auto;
        margin-right: auto;
      }

    }
</style> -->
