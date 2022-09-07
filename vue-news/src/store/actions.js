import { fetchAskList, fetchJobsList, fetchNewsList } from '../api/index.js';

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
        .then(response => {
            context.commit('SET_NEWS',response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_JOBS(context) {
        fetchJobsList()
        .then(response => {
            context.commit('SET_JOBS',response.data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_ASKS({commit}) {
        fetchAskList()
        .then(({data}) => {
            commit('SET_ASKS',data);
        })
        .catch(error => {
            console.log(error);
        })
    },
}