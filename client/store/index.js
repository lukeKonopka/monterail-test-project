import Vue from 'vue'
import Vuex from 'vuex'

import questions from '../mockData/questions'

Vue.use(Vuex)

const state = {
  questions: [],
  userDetail: {},
  questionDetail: {}
}

const mutations = {
  addQuestions (state, newQuestions) {
    state.questions = state.questions.push(newQuestions)
  },

  setUserDetail (state, userDetail) {
    state.userDetail = userDetail
  },

  setQuestionDetail (state, questionDetail) {
    state.questionDetail = questionDetail
  }
}

const actions = {
  fetchQuestions ({ commit }, pageNo) {
    // mocked data
    commit('addQuestions', questions[pageNo])
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
