import axiosApi from "@/config/config"

export const state = {
    videos : []
}
export const getters = {
    get_videos : (state) => state.videos
}
export const mutations = {
    set_videos : (state,data) => state.videos = data
}
export const actions = {
    async fetchVideos({commit}){
        try{
            var response = await axiosApi.get('videos');
            if(response.status == 200){
                console.warn(response.data.data)
                commit('set_videos',response.data.data)
            }
        }catch(e){
            console.warn(e)
        }
    }
}