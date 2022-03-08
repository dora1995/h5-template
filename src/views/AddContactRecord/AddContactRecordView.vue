<template>
  <div class="HomeView">
    <HeaderShow title="添加接触记录" backButton></HeaderShow>
    <van-form @submit="onSubmit" scroll-to-error>
      <QuestionModuleItem title="确诊或疑似病例姓名">
        <van-field
          v-model="patientName"
          name="patientName"
          clearable
          placeholder="请输入确诊或疑似病例姓名"
        />
      </QuestionModuleItem>
      <QuestionModuleItem title="确诊或疑似病例身份证号">
        <van-field
          v-model="patientNumber"
          name="patientNumber"
          clearable
          placeholder="请输入确诊或疑似病例身份证号"
        />
      </QuestionModuleItem>
      <QuestionModuleItem title="与确诊或疑似病例关系">
        <van-field
          v-model="relationship"
          name="relationship"
          clearable
          placeholder="请输入与确诊或疑似病例关系"
        />
      </QuestionModuleItem>
      <QuestionModuleItem title="接触时间">
        <van-field
          :value="contactTime"
          clickable
          name="contactTime"
          placeholder="请选择接触时间"
          @click="contactTimePicker = true"
        />

        <van-popup v-model="contactTimePicker" position="bottom">
          <van-datetime-picker
            v-model="currentDate"
            type="date"
            title="选择年月日"
            :max-date="maxDate"
            @confirm="onContactTimeConfirm"
            @cancel="contactTimePicker = false"
          />
        </van-popup>
      </QuestionModuleItem>
      <QuestionModuleItem title="情况描述">
        <van-field
          v-model="describe"
          name="describe"
          type="textarea"
          cow="2"
          clearable
          placeholder="请输入情况描述"
        />
      </QuestionModuleItem>
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit"> 提交 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import QuestionModuleItem from "@/components/QuestionModuleItem";
import { areaList } from "@/utils/area";
import { mapMutations } from "vuex";
import formMixin from "./mixins/formMixin";
import popupMixin from "./mixins/popupMixin";
import HeaderShow from "@/components/HeaderShow.vue";
export default {
  components: {
    QuestionModuleItem,
    HeaderShow,
  },
  mixins: [formMixin, popupMixin],
  methods: {
    ...mapMutations({
      addContactRecord: "ADD_CONTACT_RECORD",
    }),
    onSubmit(values) {
      console.log(values);
      if (values) {
        if (!values.patientName) {
          this.$toast.fail("请至少输入确诊或疑似病例姓名");
          return;
        }
        const params = {};
        for (let i in values) {
          const text = values[i]?.trim();
          params[i] = text || "无";
        }
        this.addContactRecord(params);
        this.$router.go(-1);
      }
    },
  },
  created() {
    this.areaList = areaList;
  },
};
</script>
<style lang="less" scoped>
.HomeView {
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  position: relative;
  padding-top: 60px;
  /deep/ .van-cell {
    padding: 10px 0;
  }
}
</style>
