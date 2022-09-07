import { fetchNewsList } from '../api/index.js';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news : []
    },
    mutations: {
        SET_NEWS(state,news) {
            state.news = news;
        }
    },
    actions : {
        FETCH_NEWS(context) {
            fetchNewsList()
            .then(response => {
                console.log(response);
                context.commit('SET_NEWS',response.data);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
  })