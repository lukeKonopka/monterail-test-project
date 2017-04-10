import Vue from 'vue'
import Router from 'vue-router'
import QuestionListView from '../views/QuestionListView'
import QuestionDetailView from '../views/QuestionDetailView'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Questions',
      component: QuestionListView
    },
    {
      path: '/question/:id',
      name: 'Question',
      component: QuestionDetailView
    }
  ]
})
