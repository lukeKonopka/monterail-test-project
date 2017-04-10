<template lang="html">
  <div>
    <div v-if="searchQuery" class="searchQuery"> Searched for: <span class="query"> {{searchQuery}} </span> <span @click="clearSearch" class="clear"> clear search </span></div>
    <QuestionElement :question="question" v-for="question in (searchQuery ? filteredQuestions : sortedQuestions)" :key="question.id">
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
    },
    sortedQuestions () {
      return (this.$store.getters.sortBy.hot) ? this.allQuestions.reverse() : this.allQuestions
    },
    filteredQuestions () {
      return this.sortedQuestions.filter((q) => q.content.title.includes(this.searchQuery))
    },
    searchQuery () {
      return this.$store.getters.searchQuery
    }
  },
  methods: {
    clearSearch() {
      this.$store.commit('setSearchQuery', '')
    }
  }
}
</script>

<style lang="scss">
$blue: #006b9c;

  .searchQuery {
    text-align: center;
    margin: 12px;
    color: $blue;
    font-family: "Courgette";

    .query {
      font-family: "Roboto";
    }

    .clear {
      margin-left: 16px;
      font-family: "Roboto";
      font-size: 10pt;
      text-decoration: underline;
      cursor: pointer;
    }
  }
</style>
