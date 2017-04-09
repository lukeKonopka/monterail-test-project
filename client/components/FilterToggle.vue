<template lang="html">
  <div class="filterToggle">
    <span class="option">
      <input type="radio" name="filter" value="myShelf">
      <span class="desc">
        My Shelf
      </span>
    </span>
    <span class="option">
      <input type="radio" name="filter" value="all">
      <span class="desc">
        All questions
      </span>
    </span>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.filterToggle {
  flex-grow: 1;

  text-align: right;

  .option {
    margin-left: 16px;
  }

  input[type="radio"] {
    position: relative;
    top: -2px;
  }
}
</style>
