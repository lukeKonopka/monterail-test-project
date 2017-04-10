<template lang="html">
  <div class="qElement">
    <header>
      <UserAvatar :src="question.user.avatarUrl" :userId="question.user.id"> </UserAvatar>
      <div class="desc">
        <h2>
          <span class="name">{{question.user.name}}</span> is asking:
        </h2>
        <h1> {{question.content.title}} </h1>
      </div>
    </header>
    <main>
      <div class="type">
        <ActivityLabel type="question"> </ActivityLabel>
      </div>
      <div class="activities">
        <ActivityList :activities="question.content.activities"> </ActivityList>
      </div>
      <DiscussionStats :stats="question.stats"> </DiscussionStats>
    </main>
  </div>
</template>

<script>
import ActivityList from './ActivityList'
import ActivityLabel from './ActivityLabel'
import UserAvatar from './UserAvatar'
import DiscussionStats from './DiscussionStats'

export default {
  components: {
    ActivityList,
    ActivityLabel,
    UserAvatar,
    DiscussionStats
  },
  props: ['question']
}
</script>

<style scoped lang="scss">
$lightBlue: #cff0ff;
$blue: darken($lightBlue, 60);

.qElement {
  width: 100%;
  height: 320px;
  background-color: white;

  display: flex;
  flex-direction: column;

  padding-bottom: 40px;

  header {
    width: 75%;
    height: 100px;
    background-color: $lightBlue;

    display: flex;
    flex-direction: row;

    img {
      width: 64px;
      height: 64px;

      border-radius: 50%;

      padding: 18px;
    }

    .desc {
      padding-left: 18px;
      flex-grow: 1;

      display: flex;
      flex-direction: column;
      justify-content: center;

      h2 {
        margin: 0;
        font-size: 12pt;
        font-weight: normal;

        .name {
          color: $blue;
          font-size: 16pt;
          font-weight: bold;
        }
      }

      h1 {
        margin: 0;
        color: $blue;
        font-family: "Courgette";
        font-weight: normal;
        font-size: 18pt;
      }
    }
  }

  main {
    flex-grow: 1;
    display: flex;
    flex-direction: row;

    .type {
      width: 100px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      background-color: $lightBlue;
    }

    .activities {
      flex-grow: 1;
    }
  }
}

@media (max-width: 1000px) {
  .qElement{
    header {
      width: 100%;
    }

    main {
      width: 100%;
    }
  }
}

@media (max-width: 660px) {
  .qElement {
    height: 285px;

    header {
      align-items: center;

      img {
        width: 48px;
        height: 48px;
      }

      .desc {
        padding: 0;
        h2 {
          font-size: 10pt;
          .name {
            font-size: 14pt;
          }
        }
        h1 {
          font-size: 14pt;
        }
      }
    }

    main {
      .type {
        display: none;
      }

      .info {
        padding: 12px 0;
        width: 100px;

        .stat{
          flex-direction: column;
          .value {
            font-size: 12pt;
            padding: 0;
          }

          .desc {
            font-size: 10pt;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
