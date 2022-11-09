<template>
 <template-view>
    <div class="py-5">
     <div class="container">
      <h1>सम्म्क्षित्त</h1>
      <div class="row">
        <div class="col-md-6" >
           <h1>{{about.name}}</h1>
           <img :src="about.photo" alt="">
           <p>{{about.description}}</p>
           <p>{{about.contact}}</p>
        </div>
      </div>
     </div>
    </div>
 </template-view>
</template>

<script>
import { mapGetters } from "vuex";
import TemplateView from "./TemplateView.vue"
export default {
  name:'AboutView',
  components:{
    TemplateView
  },
  computed : {
    ...mapGetters({
      about : "get_info"
    })
  }
}
</script>


