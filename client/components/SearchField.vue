<template lang="html">
  <div class="searchField">
    <input class="inputField" type="text" placeholder="Search questions" v-model="query"/>
    <button @click="searchThis">Search</button>
  </div>
</template>

<script>
export default {
  methods: {
    searchThis: function () {
      this.$store.commit('setSearchQuery', this.query)
      this.query = ''
      document.querySelector('.inputField').value = ''
    }
  }
}
</script>

<style scoped lang="scss">
.searchField {
  width: 100%;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  input {
    flex-basis: 75%;
    height: 100%;
    box-sizing: border-box;

    background-color: #f6f6f6;
    border: 1px solid #ccc;
    color: #999;
    font-size: 12pt;
    font-family: "Roboto";

    padding-left: 12px;
  }

  button {
    flex-basis: 23%;
    height: 100%;
    box-sizing: border-box;

    background-color: white;
    border: 2px solid #999;
    color: #999;
    font-size: 12pt;
    font-family: "Roboto";
    text-transform: uppercase;

    cursor: pointer;

    transition: all 0.1s ease;

    &:active {
      background-color: #999;
      color: white;
    }
  }
}
</style>
