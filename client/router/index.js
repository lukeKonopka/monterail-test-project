import Vue from 'vue'
import Router from 'vue-router'
import QuestionListView from '../views/QuestionListView'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: QuestionListView
    }
  ]
})
