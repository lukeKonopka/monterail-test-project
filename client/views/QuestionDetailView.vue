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
        <QuestionBox :question="discussion.post"> </QuestionBox>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '../components/Header'
import QuestionBox from '../components/QuestionBox'

export default {
  components: {
    HeaderComponent,
    QuestionBox
  },
  computed: {
    discussion: function() {
      return this.$store.getters.questionDetail
    }
  }
}
</script>

<style scoped lang="scss">
$bgColor: #eee;

.questionDetailView {
  .discussedLastTime {
    text-align: right;
  }

  main {
    margin: 132px auto 0px auto;
    width: 1400px;
    background-color: $bgColor;
  }
}
</style>
