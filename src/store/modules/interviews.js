import axiosApi from "@/config/config"

export const state = {
    interviews : []
}
export const getters = {
    get_interviews : (state) => state.interviews
}
export const mutations = {
    set_interviews : (state,data) => state.interviews = data
}
export const actions = {
    async fetchInterviews({commit}){
        try{
            var response = await axiosApi.get('interviews')
            if(response.status == 200){
                console.warn(response.data.data)
                commit('set_interviews',response.data.data)
            }
        }catch(e){
            console.warn(e)
        }
    }
}