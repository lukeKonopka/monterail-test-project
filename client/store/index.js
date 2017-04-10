import Vue from 'vue'
import Vuex from 'vuex'

import questions from '../mockData/questions'
import users from '../mockData/users'
import discussion from '../mockData/discussion'

Vue.use(Vuex)

const state = {
  questions: [],
  userDetail: {},
  questionDetail: {},
  sortBy: {
    recent: true,
    hot: false
  }
}

const mutations = {
  addQuestions (state, newQuestions) {
    state.questions.push(...newQuestions)
  },

  setUserDetail (state, userDetail) {
    state.userDetail = userDetail
  },

  setQuestionDetail (state, questionDetail) {
    state.questionDetail = questionDetail
  },

  setSortType (state, sortType) {
    for(var key in state.sortBy) {
      state.sortBy[key] = key == sortType
    }
  }
}

const actions = {
  fetchQuestions ({ commit }, pageNo) {
    // mocked data
    commit('addQuestions', questions[pageNo])
  },

  fetchUserDetail ({ commit }, userId) {
    commit('setUserDetail', users[0])
  },

  fetchQuestionDetail ({ commit }, questionId) {
    commit('setQuestionDetail', discussion)
  }
}

const getters = {
  questions: state => state.questions,
  userDetail: state => state.userDetail,
  questionDetail: state => state.questionDetail,
  sortBy: state => state.sortBy
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
