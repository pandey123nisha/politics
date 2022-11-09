import axiosApi from "@/config/config"

export const state = {
    lekhs : []
}
export const getters = {
    get_lekhs : (state) => state.lekhs
}
export const mutations = {
    set_lekhs : (state,data) => state.lekhs = data
}
export const actions = {
    async fetchLekhs({commit}){
        try{
            var response = await axiosApi.get('rachanas')
            if(response.status == 200){
                console.warn(response.data.data)
                commit('set_lekhs',response.data.data)
            }
        }catch(e){
            console.warn(e)
        }
    }
}