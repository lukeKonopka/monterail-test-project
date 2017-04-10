<template lang="html">
  <div class="discussionSnippet" :style="styleObj">
    <UserAvatar
      :src="discussion.user.avatarUrl"
      :userId="discussion.user.id"
      class="avatar" >
    </UserAvatar>

    <div class="desc">
      <div class="topLine">
        <span class="name"> {{discussion.user.name}} </span>
        <span class="action"> {{typeDesc}} on {{discussion.foundOn}}</span>
      </div>
      <h1>{{discussion.title}}</h1>
    </div>

    <div class="stats">
      <DiscussionStats :stats="discussion.stats" :horizontal="true"> </DiscussionStats>
    </div>
  </div>
</template>

<script>
import UserAvatar from './UserAvatar'
import DiscussionStats from './DiscussionStats'
import stripedBG from '../../static/stripedBG.svg'

export default {
  components: {
    UserAvatar,
    DiscussionStats
  },
  props: ['discussion'],
  data: function () {
    return {
      styleObj: {
        backgroundImage: `url(${stripedBG})`
      }
    }
  },
  computed: {
    typeDesc: function () {
      return this.discussion.type === 'finding' ? 'found' : 'asked'
    }
  }
}
</script>

<style scoped lang="scss">
$grey: #777;
$lightBlue: #cff0ff;
$blue: #006b9c;

.discussionSnippet {
  width: 100%;

  margin-top: 32px;

  .avatar {
    width: 48px;
    height: 48px;

    position: relative;
    top: -24px;
  }

  .desc {
    margin-top: -20px;
    .topLine {
      text-transform: uppercase;
      color: $grey;
      font-size: 10pt;

      .name {
        text-transform: none;
        font-size: 12pt;
        color: $blue;
        font-family: 'Courgette';
      }
    }

    h1 {
      margin: 8px 0;
      color: $blue;
      font-family: 'Courgette';
    }
  }
}

@media (max-width: 800px) {
  .discussionSnippet {
    .desc {
      h1 {
        font-size: 14pt;
      }
    }
  }
}
</style>
