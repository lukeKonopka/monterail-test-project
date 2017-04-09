<template lang="html">
  <div :class="['activity', {'more': type == 'more'}]">
    <div class="icon">
      <template v-if="type != 'more'">
        <UserAvatar class="avatar" :src="activity.user.avatarUrl"> </UserAvatar>
      </template>
      <div v-if="type == 'more'" class="number"> {{this.activity.length}} </div>
    </div>
    <ActivityLabel :type="type"> </ActivityLabel>
  </div>
</template>

<script>
import ActivityLabel from './ActivityLabel'
import UserAvatar from './UserAvatar'

export default {
  components: {
    ActivityLabel,
    UserAvatar
  },
  props: ['activity'],
  computed: {
    type: function () {
      if (Array.isArray(this.activity)) {
        return 'more'
      } else {
        return this.activity.type
      }
    }
  }
}
</script>

<style scoped lang="scss">
.activity {
  background-color: #e3e3e3;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  //margin: 16px 8px 0 8px;

  width: 120px;
  margin: 0 4px;

  height: 180px;

  &.more {
    background-color: white;
  }

  .icon {
    width: 64px;
    height: 64px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px;
  }

  .number {
    font-size: 16pt;
    font-weight: bold;
  }

  img.avatar {
    width: 100%;
    height: 100%;

    border-radius: 50%;
  }
}

@media (max-width: 660px) {
  .activity {
    width: auto;
    margin: 2px;
    flex-grow: 1;
  }
}
</style>
