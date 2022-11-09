import axiosApi from "@/config/config"

export const state = {
    interview : []
}
export const getters = {
    get_interview : (state) => state.interview
}
export const mutations = {
    set_interview : (state,data) => state.interview = data
}
export const actions = {
    async fetchInterview({commit}){
        try{
            var response = await axiosApi.get('')
            if(response.status == 200){
                console.warn(response.data.data)
                commit('set_interview',response.data.data)
            }
        }catch(e){
            console.warn(e)
        }
    }
}