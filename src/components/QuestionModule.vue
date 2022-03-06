<template>
  <div class="QuestionModule">
    <div class="title">{{ title }}</div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped lang="less">
.QuestionModule {
  margin-bottom: 20px;
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
}
</style>
