<template lang="html">
  <header>
    <div class="content">
      <div class="top">
        <div class="titleSection">
          <h1>{{ title }}</h1>
          <div class="addQuestion">+</div>
        </div>
        <slot name="top"></slot>
      </div>
      <slot></slot>
    </div>
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

  header{
    width: 100vw;
    height: 100px;
    background-color: white;

    position: fixed;
    top: 0;
    left: 0;

    padding: 16px 0;


    .content {
      width: 1000px;
      margin: 0 auto;

      .top{
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-between;

        .titleSection{
          display: flex;
          flex-direction: row;
          align-items: baseline;
          flex-basis: 25%;

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
  }
</style>
