<template lang="html">
  <div class="commentBox">
    <div class="thisComment">
      <div class="indent" v-for="n in indent" :key="n"> </div>
      <section class="avatarBox">
        <UserAvatar :src="comment.user.avatarUrl" :userId="comment.user.id" class="avatar"> </UserAvatar>
      </section>
      <section class="main">
        <div class="desc">
          <span class="who"> {{comment.user.name}} </span>
          <br class="break" />
          <span class="action"> Commented it </span>
          <span class="separation"> &#8226; </span>
          <span class="when"> {{formattedDate}} </span>
        </div>
        <div class="content">
          {{comment.content}}
        </div>
      </section>
      <VoteComponent :upvotes="comment.upvotes"> </VoteComponent>
    </div>
    <div class="subComments">
      <CommentList :comments="comment.comments" :indent="indent+1"> </CommentList>
    </div>
  </div>
</template>

<script>
import UserAvatar from './UserAvatar'
import VoteComponent from './VoteComponent'

import moment from 'moment'

export default {
  props: ['comment', 'indent'],
  components: {
    UserAvatar,
    VoteComponent
  },
  computed: {
    formattedDate: function () {
      const date = moment(this.comment.date, 'X')
      return date.fromNow()
    }
  },
  beforeCreate: function () {
    this.$options.components.CommentList = require('./CommentList.vue')
  }
}
</script>

<style scoped lang="scss">
$bgColor: #ccc;

.commentBox {
  width: 1000px;
  margin: 0 auto;

  .thisComment {
    display: flex;
    flex-direction: row;
  }

  .indent {
    min-width: 100px;
  }

  .avatarBox{
    flex-basis: 100px;
    border-right: 1px solid $bgColor;
    border-bottom: 1px solid $bgColor;
    background-color: white;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.1);

    .avatar {
      width: 64px;
      height: 64px;
      margin: 18px;
    }
  }

  .main {
    background-color: white;
    flex-grow: 1;
    padding: 16px;
    border-bottom: 1px solid $bgColor;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.1);

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .desc {
      .who {
        font-size: 16pt;
        color: #006b9c;
      }

      .break {
        display: none;
      }

      .action {
        text-transform: uppercase;
        font-size: 10pt;
      }

      .when {
        font-family: "Courgette";
      }
    }

    .content {
      font-size: 10pt;
    }
  }

  .vote {
    background-color: white;
    min-width: 200px;
    border-bottom: 1px solid $bgColor;
    box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.1);
  }
}

@media (max-width:1000px) {
  .commentBox{
    width: 100%;
  }
}

@media (max-width:660px) {
  .commentBox{
    .avatarBox {
      flex-basis: 80px;

      .avatar{
        width: 48px;
        height: 48px;
      }
    }

    .thisComment {
      flex-wrap: wrap;
      .main {
        flex-basis: 50%;

        .desc {
          .break {
            display: block;
          }

          margin-bottom: 8px;
        }
      }

      .vote {
        width: 100%;
      }
    }
    .indent {
      min-width: 16px;
    }
  }
}
</style>
