<template lang="html">
  <div class="total">
    <div class="start">


    </div>
    <History />
    <AluSloepen />
    <AluSportboot />
    <Information />



    <Instagram />
    <FooterMenu />
    <Footer />





      </div>

</template>

<script>
import History from '@/components/History/History'
import AluSloepen from '@/components/Modellen/AluSloepen'
import AluSportboot from '@/components/Modellen/AluSportboot'
import Instagram from '@/components/Instagram/Instagram'
import FooterMenu from '@/components/Footer/FooterMenu'
import Footer from '@/components/Footer/Footer'
import Information from '@/components/Information/Information'
export default {
  components: {
    History,
    AluSloepen,
    Instagram,
    AluSportboot,
    FooterMenu,
    Footer,
    Information
  }
}
</script>

<style lang="css" scoped>
.total{
  width: 100vw;
}
.start{
  width: 100vw;
  height: 879px;
  background-image: url("~assets/img/bg2.jpg");
  background-position: center;
  background-size: cover;

}


</style>
