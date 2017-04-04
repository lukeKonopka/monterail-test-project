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
    width: 100%;
    height: 100px;
    background-color: white;
    box-shadow: 0px 2px 8px 0px rgba(0,0,0,0.1);

    z-index: 100;

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
            border-radius: 50%;

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

  @media (max-width: 1000px) {
    header {
      .content {
        width: 100%;

        padding: 0 32px;
        box-sizing: border-box;
      }
    }
  }

  @media (max-width: 660px) {
    header {
      height: 60px;
      .content {
        .top {
          display: flex;
          flex-direction: column;
          align-items: center;

          .titleSection {
            width: 100%;
            justify-content: center;

            h1 {
              margin: 0px;
              font-size: 16pt;
              flex-grow: 1;
            }

            .addQuestion {
              $cSizeSmall: $circleSize / 1.5;
              width: $cSizeSmall;
              height: $cSizeSmall;
              font-size: $cSizeSmall;
            }
          }
        }
      }
    }
  }
</style>
