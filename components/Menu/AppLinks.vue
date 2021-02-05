<template>
<div class="menuToggle">


<!-- <img src="@/assets/img/logo2.png" alt="Logo"> -->
    <ul class="nav-list">
        <nuxt-link to="/"><li class="nav-item"></i>Home</li></nuxt-link>
        <nuxt-link to="/services"><li class="nav-item"></i>Boten</li></nuxt-link>
        <nuxt-link to="/contact"><li class="nav-item"></i>Informatie</li></nuxt-link>
        <nuxt-link to="/contact"><li class="nav-item"></i>Contact</li></nuxt-link>
    </ul>

    </div>
</template>

<style scoped>
.nav-item{
  font-size: 24px;
  height: 80px;
  width: 90%;
  border-bottom: 2px solid white;
  padding: 30px 0px;
}

.nav-item a, li{
  color: white;
  text-decoration: none;
}

.menuToggle{
  margin-top: 150px;
}

.nav-item:hover {
  border-bottom: 2px solid #B2495D;
}
.nav-item a:hover, li:hover{
    color: #B2495D;
}

@media (min-width: 750px) {
  .nav-item{
    font-size: 26px;
  }
  .menuToggle{
    margin-top: 180px;
  }
}
</style>
