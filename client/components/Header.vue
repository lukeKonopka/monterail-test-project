<template lang="html">
  <header>
    <div class="topBar">
      <div class="titleSection">
        <h1>{{ title }}</h1>
        <div class="addQuestion">+</div>
      </div>
      <slot name="topBar"></slot>
    </div>
    <slot name="bottomBar"></slot>
  </header>
</template>

<script>
export default {
  computed: {
    title: function () {
      return this.$router.currentRoute.name
    }
  }
}
</script>

<style scoped lang="scss">
  $circleSize: 32px;
  $circleColor: #22a;

  header {
    width: 1000px;
    margin: 0 auto;

    .topBar{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;

      .titleSection {
        display: flex;
        flex-direction: row;
        align-items: baseline;

        h1 {
          text-transform: uppercase;
          margin-right: 32px;
        }

        .addQuestion {

          width: $circleSize;
          height: $circleSize;
          background-color: $circleColor;
          border-radius: calc( #{$circleSize} / 2);

          color: white;
          font-size: $circleSize;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
</style>
