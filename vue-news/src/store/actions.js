import { 
    fetchAskList, 
    fetchJobsList, 
    fetchNewsList,
    fetchList, 
    fetchItemInfo, 
    fetchUserInfo,
} from '../api/index.js';

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
        .then(response => {
            context.commit('SET_NEWS',response.data);
            return response;
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
    FETCH_USER({ commit },{userName}) {
        fetchUserInfo(userName)
        .then(({ data })=> {
            commit('SET_USER',data)
        })  
        .catch(error => console.log(error))
    },
    FETCH_ITEM({ commit },{id}) {
        fetchItemInfo(id)
        .then(({ data })=> {
            commit('SET_ITEM',data)
        })  
        .catch(error => console.log(error))
    },
    FETCH_LIST({ commit},pageName) {
        fetchList(pageName)
        .then(({ data }) => commit("SET_LIST",data))
        .catch(error => console.log(error));
    }

}