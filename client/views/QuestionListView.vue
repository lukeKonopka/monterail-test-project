<template lang="html">
  <div class="view">
    <HeaderComponent>
      <div slot="top" class="filters">Filters</div>
      <div class="search">Search</div>
    </HeaderComponent>

    <div class="wrapper">
      <main>
        <FilteredQuestionList> </FilteredQuestionList>
      </main>
    </div>
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
  .wrapper {
    width: 1400px;
    margin: 0 auto;

    background-color: #eee;

    margin-top: 132px;

    box-shadow: 2px 0px 8px 0px rgba(0,0,0,0.1);

    display: flex;
    flex-direction: row;
    justify-content: center;

    main {
      width: 1000px;
    }
  }

  @media (max-width: 1400px) {
    .wrapper {
      width: 100%;
    }
  }

  @media (max-width: 1000px) {
    .wrapper main {
      width: 100%;
    }
  }

  @media (max-width: 660px) {
    .wrapper {
      margin-top: 92px;
    }
  }
</style>
