import axiosApi from "@/config/config"

export const state = {
    personalinfo : {}
}
export const getters = {
    get_info : (state) => state.personalinfo
}
export const mutations = {
    set_info :(state,data) => state.personalinfo = data
}
export const actions = {
    async fetchPersonalInfo({commit}){
        try{
            var response = await axiosApi.get('personalinfo')
            if(response.status == 200){
                console.warn(response.data.data)
                commit('set_info',response.data.data)
            }
        }catch(e){
            console.warn(e)
        }
    }
}