import axiosApi from "@/config/config"

export const state = {
    galleries : []
}
export const getters = {
    get_galleries : (state) => state.galleries
}
export const mutations = {
    set_galleries : (state,data) => state.galleries = data
}
export const actions = {
    async fetchGalleries({commit}){
        try{
            var response = await axiosApi.get('galleries')
            if(response.status == 200){
                console.warn(response.data.data)
                commit('set_galleries',response.data.data)
            }
        }catch(e){
            console.warn(e)
        }
    }
}