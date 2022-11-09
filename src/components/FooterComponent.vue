<template>
     <!-- footer section -->
      <div>
        <div class="footer">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <ul class="personal-detail">
                  <li>{{person.name}}</li>
                  <li>Email : {{person.email ?? 'N/A'}}</li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul class="personal-detail">
                  <li>Contact Numbers</li>
                  <li>Phone : {{ person.phone ?? 'N/A'}}</li>
                </ul>
              </div>
              <div class="col-md-4">
                <h5 class="text-white">Social link</h5>
                <div class="icon">
                  <div class="d-flex">
                    <a :href="person.facebook" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                    <a :href="person.twitter"  target="_blank"> <i class="fa-brands fa-twitter"></i></a>
                    <a :href="person.youtube"  target="_blank"><i class="fa-brands fa-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        name:'FooterComponent',
         computed:{
          ...mapGetters({
            person : 'get_info'
          })
        }
    }
</script>

<style scoped>
    li{
        list-style: none;
        color: white;
    }
</style>