<template lang="html">
  <div class="modal">
    <div class="shade" @click="close"> </div>
    <div class="content">
      <div class="close" @click="close">
        &times;
      </div>
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .close {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 16pt;
    margin: 10px;
    margin-right: 16px;
    cursor: pointer;
    user-select: none;
  }

  .content {
    background-color: white;
    position: fixed;
  }

  .shade {
    width: 100vw;
    height: 100vh;
    background-color: black;

    opacity: 0.8;

    cursor: pointer;
  }
}
</style>
