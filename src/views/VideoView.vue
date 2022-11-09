<template>
 <template-view>
    <div>
        <div class="container">
            <h1>भिडियो ग्यालरी</h1>
            <div class="row py-5">
              <div class="col-md-4" v-for="(video,index) in videos" :key="index">
                <LazyYoutube
                  ref="youtubeLazyVideo"
                  :src="video.link"
                  max-width="720px"
                  aspect-ratio="16:9"
                  thumbnail-quality="standard"
                />

                <h5>{{video.title}}</h5>
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
    name:'VideoView',
  components:{
    TemplateView
  },
  computed: {
    ...mapGetters({
      videos: "get_videos",
    }),
  },
}
</script>


