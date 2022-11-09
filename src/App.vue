<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods:{
    ...mapActions(['fetchPersonalInfo','fetchGalleries','fetchVideos','fetchInterviews'])
  },

  created(){
    this.fetchPersonalInfo()
    this.fetchGalleries()
    this.fetchVideos()
    this.fetchInterviews()
  }
}
</script>

<style>
  .nav-link{
    font-size: 20px !important;
  }
</style>
