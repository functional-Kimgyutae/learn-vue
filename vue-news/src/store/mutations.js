export default {
    SET_NEWS(state,news) {
        state.news = news;
    },
    SET_JOBS(state,jobs) {
        state.jobs = jobs;
    },
    SET_ASKS(state,asks) {
        state.asks = asks;
    },
    SET_LIST(state,list) {
        state.list = list;
    },
    SET_USER(state,user) {
        state.user = user;
    },
    SET_ITEM(state,item) {
        console.log(item)
        state.item = item;
    }
}