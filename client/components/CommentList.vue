<template lang="html">
  <div class="commentList">
    <CommentBox v-for="comment in comments" :key="comment.id" :comment="comment" :indent="indent"> </CommentBox>
  </div>
</template>

<script>
import CommentBox from './CommentBox'

export default {
  props: ['comments', 'indent'],
  components: {
    CommentBox
  }
}
</script>

<style scoped lang="scss">
</style>
