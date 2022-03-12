<template>
  <div class="SubmitSuccess">
    <div class="totas">
      <van-icon
        color="#339933"
        size="40"
        name="success"
        style="margin-bottom: 10px"
      />
      <div>填写完成，感谢您的配合</div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
.SubmitSuccess {
  height: 100vh;
  width: 100%;
  position: relative;
  .totas {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
  }
}
</style>