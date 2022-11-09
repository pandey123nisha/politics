<template>
   <nav class="navbar navbar-light bg-danger fixed-top">
  <div class="container">
    <a class="navbar-brand text-white" href="#" @click.prevent="$router.push({name:'home'})">{{ person.name }}
</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">मेनु</h5>
        <button type="button" class="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" @click.prevent="$router.push({name:'home'})">गृह पृष्ठ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="$router.push({name:'about'})">सम्म्क्षित्त</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="$router.push({name:'interview'})">अन्तरवार्ता</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="$router.push({name:'video'})">भिडियो ग्यालरी</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="$router.push({name:'gallery'})">फोटो ग्यालरी</a>
          </li>
         
        </ul>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        name:'NavbarComponent',
        computed:{
          ...mapGetters({
            person : 'get_info'
          })
        }
    }
</script>

<style lang="scss" scoped>

</style>