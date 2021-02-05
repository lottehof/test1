<template lang="html">
  <div>
  <input type="text" v-model="userId">
  <button @click="onLoadUser" type="button">load user</button>
  <nuxt-child />
  </div>
</template>

<script>


export default {
  data(){
    return{
      userID: ''
    }
  },
  methods: {
    onLoadUser(){
      this.$router.push('/users/' + this.userId)

    }
  },
  layout: 'users'
}
</script>

<style lang="css" scoped>
</style>
