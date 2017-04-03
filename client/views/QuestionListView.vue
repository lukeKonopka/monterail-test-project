<template lang="html">
  <div class="view">
    <HeaderComponent>
      <div slot="top" class="filters">Filters</div>
      <div class="search">Search</div>
    </HeaderComponent>

    <main>
      <FilteredQuestionList> </FilteredQuestionList>
    </main>
  </div>

</template>

<script>
import HeaderComponent from '../components/Header'
import FilteredQuestionList from '../components/FilteredQuestionList'

export default {
  components: {
    HeaderComponent,
    FilteredQuestionList
  },
  created: function () {
    this.$store.dispatch('fetchQuestions', 0)
  }
}
</script>

<style scoped lang="scss">
  main {
    width: 1000px;
    margin: 0 auto;

    background-color: #eee;

    margin-top: 132px;

    padding: 0 200px 0 200px;

    box-shadow: 2px 0px 8px 0px rgba(0,0,0,0.1);
  }
</style>
