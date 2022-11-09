import Vue from 'vue'
import Vuex from 'vuex'
import * as personalinfo from './modules/personalinfo'
import * as galleries from './modules/galleries'
import * as interviews from './modules/interviews'
import * as videos from './modules/videos'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    personalinfo,
    galleries,
    interviews,
    videos
  }
})
