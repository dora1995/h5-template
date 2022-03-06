<template>
  <div class="QuestionModuleItem">
    <div class="title">
      <span class="redStar" v-if="required">*</span>
      <span>{{ title }}</span>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    required: Boolean,
  },
};
</script>

<style scoped lang="less">
.QuestionModuleItem {
  margin-bottom: 10px;
  border-bottom: 1px solid #e6e6e6;
  .title {
    font-size: 16px;
    margin-bottom: 5px;
    font-weight: 400;
    .redStar {
      margin-right: 5px;
      color: red;
    }
  }
}
</style>
