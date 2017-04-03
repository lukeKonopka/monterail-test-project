<template lang="html">
  <div class="activityList">
    <ActivityElement v-for="activity in preppedActivities" :activity="activity"> </ActivityElement>
  </div>
</template>

<script>
import ActivityElement from './ActivityElement'

export default {
  components: {
    ActivityElement
  },
  props: ['activities'],
  computed: {
    preppedActivities: function () {
      return [
        ...this.activities.slice(0, 4),
        [...this.activities]
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.activityList {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  align-items: flex-end;

  height: 100%;
}
</style>
