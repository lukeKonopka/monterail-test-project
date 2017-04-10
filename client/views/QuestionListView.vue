<template lang="html">
  <div class="view">
    <HeaderComponent>
      <div slot="top" class="filters">
        <FilterToggle> </FilterToggle>
        <SortByToggle> </SortByToggle>
      </div>
      <SearchField> </SearchField>
    </HeaderComponent>

    <div class="wrapper">
      <main>
        <FilteredQuestionList> </FilteredQuestionList>
      </main>
    </div>
    <UserDetailModal v-if="$store.getters.userDetail.id"> </UserDetailModal>
  </div>

</template>

<script>
import HeaderComponent from '../components/Header'
import FilteredQuestionList from '../components/FilteredQuestionList'
import FilterToggle from '../components/FilterToggle'
import SortByToggle from '../components/SortByToggle'
import SearchField from '../components/SearchField'

//test
import UserDetailModal from '../components/UserDetailModal'

export default {
  components: {
    HeaderComponent,
    FilteredQuestionList,
    FilterToggle,
    SortByToggle,
    SearchField,
    UserDetailModal
  }
}
</script>

<style scoped lang="scss">
  .filters {
    display: flex;
    flex-grow: 1;
    flex-direction: row;
  }

  .wrapper {
    width: 1400px;
    margin: 0 auto;

    background-color: #eee;

    margin-top: 132px;
    margin-bottom: 100px;
    padding-bottom: 32px;

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
