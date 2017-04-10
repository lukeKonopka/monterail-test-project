import Vue from 'vue'
import Router from 'vue-router'
import QuestionListView from '../views/QuestionListView'
import QuestionDetailView from '../views/QuestionDetailView'

import store from '../store'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Questions',
      component: QuestionListView,
      beforeEnter: (to, from, next) => {
        store.dispatch('fetchQuestions', 0).then(next)
      }
    },
    {
      path: '/question/:id',
      name: 'Question',
      component: QuestionDetailView,
      beforeEnter: (to, from, next) => {
        const questionId = to.params.id
        store.dispatch('fetchQuestionDetail', questionId).then(next)
      }
    }
  ]
})
