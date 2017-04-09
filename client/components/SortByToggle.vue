<template lang="html">
  <div class="sbToggle">
    <span>
      Sort by:
    </span>
    <a href="#" :class="['option', {'active': sortBy.recent}]" @click="changeSort('recent')">recent</a>
    <span> or </span>
    <a href="#" :class="['option', {'active': sortBy.hot}]" @click="changeSort('hot')">hot</a>
  </div>
</template>

<script>
export default {
  methods: {
    changeSort: function (sortType) {
      this.$store.commit('setSortType', sortType)
    }
  },
  computed: {
    sortBy () {
      return this.$store.getters.sortBy
    }
  }
}
</script>

<style scoped lang="scss">
.sbToggle {
  flex-basis: 250px;

  text-align: right;
  font-family: "Courgette";

  .option {
    font-family: "Roboto";
    text-decoration: none;
    color: #006b9c;

    &.active {
      text-decoration: underline;
      color: #999;
    }
  }
}
</style>
