<template lang="html">
  <div class="questionBox">
    <header>
      <UserAvatar :src="question.user.avatarUrl" :userId="question.user.id" class="avatar"> </UserAvatar>
      <div class="desc">
        <div class="topLine">
          <span class="name">{{question.user.name}}</span>
          <span class="action">is asking:</span>
        </div>
        <h1> {{question.title}} </h1>
      </div>
      <div class="unfollow">
        unfollow
      </div>
    </header>
    <main>
      <div class="drape"> </div>
      <div class="content">
        {{question.content}}
      </div>
      <VoteComponent :upvotes="question.upvotes"> </VoteComponent>
    </main>
    <div class="newAnswer">
      GIVE new answer
    </div>
  </div>
</template>

<script>
import UserAvatar from './UserAvatar'
import VoteComponent from './VoteComponent'

export default {
  props: ['question'],
  components: {
    UserAvatar,
    VoteComponent
  }
}
</script>

<style scoped lang="scss">
$blue: #cff0ff;
$darkBlue: #006b9c;

.questionBox {
  width: 1000px;
  margin: 0 auto;
  background-color: white;
  position: relative;
  box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.1);

  header {
    background-color: $blue;
    height: 100px;

    display: flex;
    flex-direction: row;
    align-items: center;

    .avatar {
      width: 64px;
      height: 64px;
      margin: 18px;
    }

    .desc {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex-grow: 1;

      .topLine {
        text-transform: uppercase;

        .name {
          font-size: 14pt;
          color: $darkBlue;
          text-transform: none;
        }
      }

      h1 {
        font-family: "Courgette";
        color: $darkBlue;
        margin: 0;
      }
    }

    .unfollow {
      margin-right: 24px;
      font-size: 14pt;
      font-style: italic;
      color: $darkBlue;
    }
  }

  main {
    display: flex;
    flex-direction: row;

    .drape{
      flex-basis: 100px;
      background-color: $blue;
    }

    .content{
      flex-basis: calc(100% - 300px);
      flex-grow: 1;
      padding: 16px;
      text-align: justify;

      margin-bottom: 24px;
    }
  }

  .newAnswer {
    width: 200px;
    height: 30px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    box-sizing: border-box;
    position: absolute;
    bottom: -15px;
    left: calc(50% - 100px);
    border: 1px solid #e3e3e3;

    cursor: pointer;
  }
}

@media (max-width: 1000px) {
  .questionBox {
    width: 100%;

    header {
      .desc {
        h1 {
          font-size: 16pt;
        }
      }
    }

    main {

      .drape {
        display: none;
      }
    }
  }
}

@media (max-width: 660px) {
  .questionBox {
    header {
      height: 120px;

      .avatar{
        width: 48px;
        height: 48px;
      }

      .unfollow {
        font-size: 8pt;
        margin-left: 2px;
      }
    }

    main {
      flex-direction: column;
      padding-bottom: 16px;
    }
  }
}
</style>
