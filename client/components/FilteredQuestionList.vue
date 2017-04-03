<template lang="html">
  <div>
    <QuestionElement :question="question" v-for="question in allQuestions">

    </QuestionElement>
  </div>
</template>

<script>
import QuestionElement from './QuestionElement'

export default {
  components: {
    QuestionElement
  },
  computed: {
    allQuestions () {
      return this.$store.getters.questions
    }
  }
}
</script>

<style lang="scss">
</style>
