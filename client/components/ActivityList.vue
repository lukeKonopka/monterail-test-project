<template lang="html">
  <div class="activityList">
    <ActivityElement v-for="activity in preppedActivities" :activity="activity" @more="$emit('more')"> </ActivityElement>
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
      return (this.hiddenActivities.length > 1) ?
        [ ...this.shownActivities, this.hiddenActivities ] : this.activities
    },
    shownActivities: function () {
      return this.activities.slice(0, this.numberOfShown)
    },
    hiddenActivities: function () {
      return this.activities.slice(this.numberOfShown)
    }
  },
  data: function () {
    return {
        numberOfShown: 1
    }
  },
  methods: {
    handleResize: function () {
      if(this.$children.length > 0) {
        const listWidth = this.$el.offsetWidth
        const activityWidth = Math.min(this.$children[0].$el.offsetWidth, 120)
        const paddedActivityWidth = activityWidth + 10

        this.numberOfShown = Math.floor(listWidth / paddedActivityWidth) - 1
      }
    }
  },
  mounted: function () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
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
