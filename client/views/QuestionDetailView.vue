<template lang="html">
  <div class="questionDetailView">
    <HeaderComponent>
      <div slot="top" class="discussedLastTime">
        <span class="desc">
          Discussed last time
        </span>
        <span class="value">
          1 day ago
        </span>
      </div>
    </HeaderComponent>
    <main>
      {{$route.params.id}}
    </main>
  </div>
</template>

<script>
import HeaderComponent from '../components/Header'

export default {
  components: {
    HeaderComponent
  }
}
</script>

<style scoped lang="scss">
.questionDetailView {
  .discussedLastTime {
    text-align: right;
  }

  main {
    margin-top: 132px;
  }
}
</style>
