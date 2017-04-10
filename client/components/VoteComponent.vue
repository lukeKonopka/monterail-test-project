<template lang="html">
  <div class="vote">
    <div class="stat">
      <span class="value"> {{upvotes}} </span>
      <span class="desc"> upvotes </span>
    </div>
    <div class="votingControls">
      <div class="up"> &#x25B2; </div>
      <div class="down"> &#x25BC; </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['upvotes']
}
</script>

<style scoped lang="scss">
$blue: #cff0ff;
$darkBlue: #006b9c;

.vote{
  flex-basis: 200px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .stat {
    margin-right: 16px;

    .value {
      font-size: 16pt;
    }

    .desc {
      font-family: "Courgette";
    }
  }

  .votingControls {
    display: flex;
    flex-direction: column;

    .up, .down {
      color: $darkBlue;
      margin: 4px;

      cursor: pointer;
    }
  }
}

@media (max-width: 660px) {
  .vote {
    flex-basis: auto;
  }
}
</style>
