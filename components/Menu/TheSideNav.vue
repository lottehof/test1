<!-- <template>
    <div class="sidenav-container">

        <div v-if="isSidebar" class="backdrop" @click="hideSidebar"></div>

        <transition name="slide-side">
            <div v-if="isSidebar" class="sidenav">
                <span class="material-icons" @click="hideSidebar">close</span>
                <img src="@/assets/img/logo2.png" alt="Logo">
                <app-links></app-links>
            </div>
        </transition>


    </div>
</template>

<script>
    import AppLinks from '~/components/Menu/AppLinks'
    export default {
        components: { AppLinks },
        methods: {
            hideSidebar() {
                this.$store.dispatch('nav/toggleSidebar')
            }
        },
        computed: {
            isSidebar() {
                return this.$store.getters['nav/toggleSidebar']
            }
        }
    }
</script>


<style scoped>
.material-icons:hover{
  color: #B2495D;

}
img{
  width: 80%;
  position: absolute;
  margin-top: 50px;
}
    .sidenav-container {
        height: 100%;
        width: 100%;
    }
    .sidenav {
        height: 100%;
        width: 100%;
        background-color: #2a393f;
        z-index: 10000;
        position: fixed;
        top: 0;
        left: 0;
        box-sizing: border-box;
        padding: 30px;
    }
    .sidenav span {
        position: absolute;
        right: 30px;
        top: 30px;
        color: white;
        font-size: 30px;
    }
    .backdrop {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 1000;
        position: fixed;
        top: 0;
        left: 0;
    }
    .slide-side-enter-active,
    .slide-side-leave-active {
        transition: all 0.3s ease-out;
    }
    .slide-side-enter,
    .slide-side-leave-to {
        transform: translateX(-100%);
    }

    @media (min-width: 750px) {
      .sidenav {
          width: 70%;

      }

    }

    @media (min-width: 900px) {
      .sidenav {
          width: 400px;

      }
    }
</style> -->
