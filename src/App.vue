<template>
  <div id="app">
    <vue-facebook-page data-href="https://www.facebook.com/codeit.np" link-text="Code IT" />
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods:{
    ...mapActions(['fetchPersonalInfo','fetchGalleries','fetchVideos','fetchInterviews','fetchLekhs', 'fetchInterview'])
  },

  created(){
    this.fetchPersonalInfo()
    this.fetchGalleries()
    this.fetchVideos()
    this.fetchInterviews()
    this.fetchLekhs()
    this.fetchInterview()
  }
}
</script>

<style>
  .nav-link{
    font-size: 20px !important;
  }
</style>
