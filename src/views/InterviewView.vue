<template>
 <template-view>
    <div class="py-5">
     <div class="container">
        <div class="row">
          <div class="col-md-12" v-for="(interview,index) in interview" :key="index">
            <h1>{{interview.title}}</h1>
            <img :src="interview.featured" alt="">
            <div v-html = "interview.description"></div>
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
name:'InterviewView',
  components:{
    TemplateView
  },
  computed :{
    ...mapGetters({
      interview : "get_interviews"
    })
  }
}
</script>


