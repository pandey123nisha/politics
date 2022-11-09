<template>
  <template-view>
    <!-- feature section -->
    <div>
      <div class="feature">
        <img
          src="../assets/background-img.png"
          style="objectfit: cover"
          width="100%"
          height="100%"
        />
      </div>
    </div>
    <!-- interview section -->
    <div class="py-5">
      <section class="interview">
        <div class="container">
          <h1>अन्तरवार्ता</h1>
          <div class="row">
            <div class="col-md-4" v-for="(interview,index) in interviews" :key="index">
              <el-card shadow="hover">
                <img
                  :src="interview.featured"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{{interview.title}}</h5>
                  <p class="card-text">
                    {{ interview.description.substring(0,200) + '...' }}
                  </p>
                </div>
              </el-card>
            </div>
            
          </div>
        </div>
      </section>
    </div>

    <!-- image section -->
    <div class="bg-light py-5">
      <h1>तस्बिर</h1>
      <div class="container">
        <div class="row">
          <div class="col-md-4" v-for="(gallery,index) in galleries" :key="index">
            <el-card shadow="hover">
              <a :href="gallery.link" target="_blank"><img :src="gallery.featured" class="img-fluid" /></a>
              <div class="card-body">
               <h5> {{ gallery.title }}</h5>
              </div>
            </el-card>
          </div>
          
        </div>
        <div class="read-btn">
          <button type="button" class="btn btn-danger" @click.prevent="$router.push({name:'gallery'})">Read More...</button>
        </div>
      </div>
    </div>

    <!-- media coverage section -->
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <h1>भिडियो</h1>
            <div class="row">
              <div class="col-md-6" v-for="(video,index) in videos" :key="index">
                <LazyYoutube
                  ref="youtubeLazyVideo"
                  :src="video.link"
                  max-width="720px"
                  aspect-ratio="16:9"
                  thumbnail-quality="standard"
                />
              </div>
             
            </div>
          </div>
          <div class="col-md-4">
            <h1>कार्यक्रमहरु</h1>
            <div class="row gy-2">
              <div class="col-md-12">
                <el-card shadow="hover">
                  <h4>Heading</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque soluta sequi porro. Laboriosam quia hic quisquam
                  </p>
                </el-card>
              </div>

              <div class="col-md-12">
                <el-card shadow="hover">
                  <h4>Heading</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque soluta sequi porro. Laboriosam quia hic quisquam
                  </p>
                </el-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template-view>
</template>

<script>
import { mapGetters } from "vuex";
// @ is an alias to /src
import TemplateView from "./TemplateView.vue";
export default {
  name: "HomeView",
  components: {
    TemplateView,
  },

  computed: {
    ...mapGetters({
      person: "get_info",
      interviews: "get_interviews",
      videos: "get_videos",
      galleries: "get_galleries",
    }),
  },

  data() {
    return {
      youtubelink: "https://www.youtube.com/watch?v=B9TvueRPsmw",
    };
  },
};
</script>
<style>
.logo {
  width: 100px;
}

.fa-brands {
  color: white;
  padding: 10px;
}

.feature {
  width: 100%;
  height: 80vh;
}

h1 {
  text-align: center;
  /* color: red; */
  padding: 10px;
  text-decoration: underline;
  font-weight: bold;
}

.read-btn {
  text-align: center;
}
.card {
  align-items: center;
}
.footer {
  background-color: rgb(36, 35, 35);
  padding: 80px;
}

/* .personal-detail {
  color: white;
  font-size: 20px;
  list-style: none;
} */
</style>
