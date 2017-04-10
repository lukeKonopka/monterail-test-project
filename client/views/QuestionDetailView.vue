<template lang="html">
  <div class="questionDetailView">
    <Header>
      <div slot="top" class="discussedLastTime">
        <span class="desc">
          Discussed last time
        </span>
        <span class="value">
          1 day ago
        </span>
      </div>
    </Header>
    <main>
      {{$route.params.id}}
    </main>
  </div>
</template>

<script>
import Header from '../components/Header'

export default {
  components: {
    Header
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
