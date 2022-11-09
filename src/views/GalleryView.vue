<template>
 <template-view>
    <div>
        <div class="container">
            <h1>फोटो ग्यालरी</h1>
            <div class="row py-5">
                <div class="col-md-3" v-for="(gallery,index) in galleries" :key="index">
            <el-card shadow="hover">
              <a :href="gallery.link" target="_blank"><img :src="gallery.featured" class="img-fluid" /></a>
              <div class="card-body">
               <h5> {{ gallery.title }}</h5>
              </div>
            </el-card>
            </div>
        </div>
        </div>
    </div>
 </template-view>
</template>

<script>
import { mapGetters } from 'vuex'
import TemplateView from "./TemplateView.vue"
export default {
    name:'GalleryView',
  components:{
    TemplateView
  },
  computed: {
    ...mapGetters({
      galleries: "get_galleries",
    }),
  },
}
</script>


