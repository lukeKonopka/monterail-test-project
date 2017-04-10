<template lang="html">
  <Modal @close="onClose">
    <div class="userDetail">
      <header>
        <div class="userName">
          <UserAvatar class="avatar" :src="user.avatarUrl" /> </UserAvatar>
          <div class="name">{{user.name}}</div>
        </div>
        <div class="activityInfo">
          <span class="stat member">
            <span class="label">Member for</span>
            <span class="value">{{memberFor}}</span>
          </span>
          <span class="stat last">
            <span class="label">Last seen</span>
            <span class="value">{{lastSeen}}</span>
          </span>
          <span class="stat activity">
            <span class="label">Activity level</span>
            <span class="value">
              <span v-for="n in user.activity" class="star active">&#9733; </span>
              <span v-for="n in (3 - user.activity)" class="star">&#9733; </span>
            </span>
          </span>
        </div>
      </header>
      <main>
        <h1>How it all started</h1>
        <section class="roundup">
          <h2>
            That's where we have been these last {{memberFor}}
          </h2>
          <div class="statList">
            <div class="box peers">
              <div class="bg"> </div>
              <div class="value"> {{user.stats.peers}} </div>
              <div class="desc"> peers </div>
            </div>
            <div class="box discussions">
              <div class="bg"> </div>
              <div class="value"> {{user.stats.discussions}} </div>
              <div class="desc"> discussions </div>
            </div>
            <div class="box findings">
              <div class="bg"> </div>
              <div class="value"> {{user.stats.findings}} </div>
              <div class="desc"> findings </div>
            </div>
            <div class="box questions">
              <div class="bg"> </div>
              <div class="value"> {{user.stats.questions}} </div>
              <div class="desc"> questions </div>
            </div>
          </div>
        </section>
        <section class="sameTimeJoiners">
          <h2>Who joined the platform that same period</h2>
          <div class="userList">
            <div v-for="peer in user.usersWhoJoinedThen" class="userBox" :style="{backgroundImage: `url(${svgBG})`}">
              <UserAvatar :src="peer.avatarUrl" :userId="peer.id" class="avatar"> </UserAvatar>
              <div class="name">{{peer.name}}</div>
            </div>
          </div>
        </section>
        <section class="hottestDiscussion">
          <h2>The hottest discussion these days</h2>
          <DiscussionSnippet :discussion="user.hottestDiscussion"> </DiscussionSnippet>
        </section>
      </main>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal'
import UserAvatar from './UserAvatar'
import DiscussionSnippet from './DiscussionSnippet'
import bg from '../../static/stripedBG.svg'

import moment from 'moment'

export default {
  components: {
    Modal,
    UserAvatar,
    DiscussionSnippet
  },
  data: function() {
    return {svgBG: bg}
  },
  computed: {
    user: function () {
      return this.$store.getters.userDetail
    },
    memberFor: function () {
      return moment(this.user.memberSince, 'X').fromNow(true)
    },
    lastSeen: function () {
      const last = moment(this.user.lastSeen, 'X')
      return last.fromNow()
    }
  },
  methods: {
    onClose() {
      this.$store.commit('setUserDetail', {})
    }
  }
}
</script>

<style scoped lang="scss">
  $grey: #777;
  $activeColor: #f77;
  $lightBlue: #cff0ff;
  $blue: #006b9c;

  .userDetail {
    width: 800px;
    margin-top: 32px;
    header {
      display: flex;
      flex-direction: column;
      align-items: center;

      margin: 0 100px;

      border-bottom: 2px solid grey;

      .userName {
        display: flex;
        flex-direction: column;
        align-items: center;

        .name {
          font-size: 16pt;
          color: $blue;
        }

        .avatar {
          width: 64px;
          height: 64px;

          margin-bottom: 16px;
        }
      }

      .activityInfo {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: baseline;
        justify-content: space-between;
        margin-bottom: 24px;
        margin-top: 12px;

        .label {
          text-transform: uppercase;
          font-size: 10pt;
          color: $grey;
          margin-right: 6px;
        }

        .star{
          color: $grey;

          &.active {
            color: $activeColor;
          }
        }
      }
    }

    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      h1 {
        font-family: 'Courgette';
        margin-bottom: 0;
      }

      h2 {
        color: $grey;
        text-transform: uppercase;
        font-size: 12pt;
        font-weight: normal;
      }

      .roundup {
        .statList {
          display: flex;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;

          margin: 48px 0 24px 0;

          .box {
            width: 100px;
            height: 100px;


            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: relative;

            margin: 0 10px;

            .value {
              font-size: 16pt;
            }

            .bg {
              width: 100%;
              height: 100%;
              position: absolute;
              background-color: $lightBlue;

              z-index: -1;
            }

            &.peers {
              .bg {transform: rotateZ(50deg);}
            }

            &.discussions {
              .bg {transform: rotateZ(-10deg);}
            }

            &.findings {
              .bg {transform: rotateZ(45deg);}
            }

            &.questions {
              .bg {transform: rotateZ(10deg);}
            }
          }
        }
      }

      .sameTimeJoiners {
        .userList {
          display: flex;
          flex-direction: row;
          justify-content: center;
          flex-wrap: wrap;

          .userBox {
            width: 100px;
            height: 100px;
            margin: 0 6px;

            margin-bottom: 48px;
            .avatar {
              width: 48px;
              height: 48px;

              margin: 26px 0;
            }
          }
        }
      }
    }

    .hottestDiscussion {
      width: 100%;
    }
  }

  @media(max-width: 800px) {
    .userDetail {
      width: 100%;

      header {
        margin: 0 25px;

        .activityInfo {
          .stat {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      }
    }
  }

  @media(max-width: 660px) {
    .userDetail {
      main {
        .roundup {
          width: 310px;
        }
      }
    }
  }
</style>
