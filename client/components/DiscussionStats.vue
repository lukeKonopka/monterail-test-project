<template lang="html">
  <div class="" :class="['info', {'horizontal': horizontal}]">
    <div v-for="stat in statsArr" class="stat">
      <div class="value">{{stat.value}}</div>
      <div class="desc">{{stat.desc}}</div>
    </div>
  </div>
</template>

<script>
const dictionary = {
  related: 'related discussion',
  peers: 'peers involved',
  convos: 'conversations',
  upvotes: 'upvotes'
}

export default {
  props: ['stats', 'horizontal'],
  computed: {
    statsArr: function () {
      const s = this.stats
      let arr = []
      for (let key in s) {
        if(dictionary[key]){
          arr.push({value: s[key], desc: dictionary[key]});
        }
      }
      return arr
    }
  }
}
</script>

<style scoped lang="scss">
.info {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 32px 0;

  .stat {
    display: flex;
    flex-direction: row;
    align-items: center;

    .value {
      padding-left: 32px;
      padding-right: 8px;

      font-size: 16pt;
    }

    .desc {
      font-family: "Courgette";
      opacity: 0.8;
    }
  }
}

.info.horizontal {
  width: 100%;
  padding: 0 32px 16px 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .stat{
    align-items: baseline;

    .value {
      padding-left: 0;
    }
  }
}
</style>
