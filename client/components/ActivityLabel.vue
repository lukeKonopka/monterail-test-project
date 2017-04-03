<template lang="html">
  <div :class="['label', {'grey': type!='answer', 'more': type=='more'}]">
    {{labels[type]}}
  </div>
</template>

<script>

export default {
  props: ['type'],
  data: function () {
    return {
      labels: {
        'question': 'asked',
        'answer': 'answered',
        'finding': 'found',
        'comment': 'commented',
        'more': 'more activities'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  $dotSize: 12px;
  $padding: 8px;
  $fullColor: black;
  $greyColor: #999;

  .label {
    text-transform: uppercase;
    text-align: center;
    font-size: 10pt;

    max-width: 100px;

    padding: $padding 0 calc(#{$padding} + #{$dotSize / 2}) 0;
    border-top: 1px solid $fullColor;
    margin: 0 10px;
    position: relative;

    &::after {
      content: "";
      width: $dotSize;
      height: $dotSize;
      bottom: calc(0px - #{$dotSize} / 2);
      left: calc(50% - #{$dotSize} / 2);
      position: absolute;

      background-color: $fullColor;

      border-radius: 50%;
    }

    &.grey {
      color: $greyColor;
      border-top: 1px solid $greyColor;

      &::after {
        background-color: $greyColor;
      }
    }

    &.more {
      font-family: "Courgette";
      font-size: 12pt;
      text-transform: none;
      border-top: none;
      color: $fullColor;
    }
  }
</style>
