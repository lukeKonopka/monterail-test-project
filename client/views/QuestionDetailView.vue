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
        <div class="peerInfo">
          <span class="value">{{discussion.post.comments.length}}</span>
          peers already answered {{discussion.post.user.name}}
        </div>
        <CommentList :comments="discussion.post.comments" :indent="0"> </CommentList>
    </main>
    <UserDetailModal v-if="$store.getters.userDetail.id"> </UserDetailModal>
  </div>
</template>

<script>
import HeaderComponent from '../components/Header'
import QuestionBox from '../components/QuestionBox'
import CommentList from '../components/CommentList'
import UserDetailModal from '../components/UserDetailModal'

export default {
  components: {
    HeaderComponent,
    QuestionBox,
    CommentList,
    UserDetailModal
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
    padding-bottom: 100px;
    width: 1400px;
    background-color: $bgColor;

    .peerInfo {
      margin: 24px 0 12px 0;
      text-align: center;

      .value {
        font-size: 16pt;
      }
    }
  }
}

@media (max-width: 1400px) {
  .questionDetailView {
    main {
      width: 100%;
    }
  }
}

@media (max-width: 660px) {
  .questionDetailView {
    main {
      margin: 92px auto 0px auto;
    }
  }
}
</style>
