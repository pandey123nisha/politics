<template>
  <template-view>
    <div class="my-5">
      <div class="container">
        <div class="row py-5">
          <div class="col-md-" v-for="(lekh, index) in lekhs" :key="index">
            <el-card shadow="hover">
              <div class="row">
                <div class="col-md-2">
                  <img :src="lekh.featured" alt="" class="img-fluid" />
                </div>
                <div class="col-md-10">
                  <h1>{{ lekh.title }}</h1>
                  <div
                    v-html="lekh.description.toString().substring(0, 1500)"
                  ></div>
                  <a href="" class="btn btn-primary">Readmore</a>
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </div>
    </div>
  </template-view>
</template>

<script>
import TemplateView from "./TemplateView.vue";
import { mapGetters } from "vuex";
export default {
  components: { TemplateView },
  name: "LekhView",
  computed: {
    ...mapGetters({
      lekhs: "get_lekhs",
    }),
  },
};
</script>

<style lang="scss" scoped></style>
