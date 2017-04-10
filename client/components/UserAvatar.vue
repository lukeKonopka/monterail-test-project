<template lang="html">
  <img :src="src" @click="onClick" :class="{'clickable': userId}"/>
</template>

<script>
export default {
  props: ['src', 'userId'],
  methods: {
    onClick() {
      if(this.userId){
        this.$store.dispatch('fetchUserDetail', this.userId)
      }
    }
  }
}
</script>

<style scoped lang="scss">
  img {
    width: 100%;
    height: 100%;

    border-radius: 50%;

    &.clickable {
      cursor: pointer;
    }
  }
</style>
