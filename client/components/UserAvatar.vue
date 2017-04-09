<template lang="html">
  <img :src="src" @click="$store.dispatch('fetchUserDetail', userId)"/>
</template>

<script>
export default {
  props: ['src', 'userId']
}
</script>

<style scoped lang="scss">
  img {
    width: 100%;
    height: 100%;

    cursor: pointer;
  }
</style>
