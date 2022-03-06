<template>
  <div class="HomeView">
    <van-form @submit="onSubmit">
      <QuestionModule title="行程信息">
        <QuestionModuleItem title="姓名" required>
          <van-field
            v-model="name"
            name="name"
            maxLength="16"
            clearable
            placeholder="请输入您的姓名"
            :rules="[{ required: true, message: '请输入您的姓名' }]"
          />
        </QuestionModuleItem>
        <QuestionModuleItem title="手机号码" required>
          <van-field
            v-model="phone"
            maxLength="11"
            name="phone"
            placeholder="请输入您的手机号码"
            :rules="[{ required: true, message: '请输入您的手机号码' }]"
          />
        </QuestionModuleItem>
        <QuestionModuleItem title="证件类型" required>
          <van-field
            readonly
            clickable
            name="certificatesType"
            :value="certificatesType"
            placeholder="请选择证件类型"
            :rules="[{ required: true, message: '请选择证件类型' }]"
            @click="certificatesTypePicker = true"
          />
          <van-popup v-model="certificatesTypePicker" position="bottom">
            <van-picker
              title="证件类型"
              show-toolbar
              :columns="certificatesTypeColumns"
              @confirm="onCertificatesTypeConfirm"
              @cancel="certificatesTypePicker = false"
            />
          </van-popup>
        </QuestionModuleItem>
        <QuestionModuleItem title="证件号码" required>
          <van-field
            v-model="certificatesNumber"
            name="certificatesNumber"
            placeholder="请输入证件号码"
            maxLength="30"
            :rules="[{ required: true, message: '请输入证件号码' }]"
          />
        </QuestionModuleItem>
        <QuestionModuleItem title="性别" required>
          <van-field
            readonly
            clickable
            name="sex"
            :value="sex"
            placeholder="请选择性别"
            :rules="[{ required: true, message: '请选择性别' }]"
            @click="sexPicker = true"
          />
          <van-popup v-model="sexPicker" position="bottom">
            <van-picker
              title="性别"
              show-toolbar
              :columns="sexColumns"
              @confirm="onSexConfirm"
              @cancel="sexPicker = false"
            />
          </van-popup>
        </QuestionModuleItem>
        <QuestionModuleItem title="出生日期" required>
          <van-field
            v-model="birthday"
            name="birthday"
            placeholder="请选择出生日期"
            :rules="[{ required: true, message: '请选择出生日期' }]"
          />
        </QuestionModuleItem>
        <QuestionModuleItem title="居住地址" required>
          <van-field
            v-model="address"
            name="address"
            placeholder="请选择居住地址"
            :rules="[{ required: true, message: '请选择居住地址' }]"
          />
        </QuestionModuleItem>
        <QuestionModuleItem title="楼栋门牌号（详细地址）" required>
          <van-field
            v-model="addressDetail"
            name="addressDetail"
            placeholder="请输入如小区、单元、楼栋号、门牌号"
            :rules="[{ required: true, message: '请输入您的姓名' }]"
          />
        </QuestionModuleItem>
        <QuestionModuleItem title="单位（学校）名称" required>
          <van-field
            v-model="company"
            name="company"
            placeholder="请输入您的单位（学校）名称"
            :rules="[{ required: true, message: '请输入您的单位（学校）名称' }]"
          />
        </QuestionModuleItem>
        <QuestionModuleItem title="目前所在城市" required>
          <van-field
            readonly
            clickable
            name="currentCity"
            :value="currentCity"
            placeholder="请选择您目前所在城市"
            :rules="[{ required: true, message: '请选择您目前所在城市' }]"
            @click="showAddressPicker = true"
          />
          <van-popup v-model="showAddressPicker" position="bottom">
            <van-area
              title="请选择"
              @confirm="onAddressConfirm"
              @cancel="onAddressCancel"
              :area-list="areaList"
            />
          </van-popup>
        </QuestionModuleItem>
      </QuestionModule>

      <QuestionModule title="人员类型"> phone </QuestionModule>
      <QuestionModule title="是否居家隔离"> phone </QuestionModule>
      <QuestionModule title="居住属性"> phone </QuestionModule>
      <QuestionModule title="其他"> phone </QuestionModule>

      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import QuestionModule from "@/components/QuestionModule";
import QuestionModuleItem from "@/components/QuestionModuleItem";

import { mapMutations, mapState } from "vuex";
import { areaList } from "@/utils/area";
import formMixin from "./mixins/formMixin";
import popupMixin from "./mixins/popupMixin";

export default {
  name: "HomeView",
  components: {
    QuestionModule,
    QuestionModuleItem,
  },
  mixins: [formMixin, popupMixin],
  data() {
    return {
      // 地址选择相关
      showAddressPicker: false,
    };
  },
  computed: {
    ...mapState(["userId"]),
  },
  methods: {
    ...mapMutations({
      setUserId: "SET_USER_ID",
    }),
    onSubmit(values) {
      console.log(values);
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
  },
  created() {
    this.areaList = areaList;
    const { query } = this.$route;
    console.log(query);
    const userId = query.id;
    if (userId) {
      this.setUserId(userId);
      console.log(this.userId);
    }
  },
};
</script>
<style lang="less" scoped>
.HomeView {
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  /deep/ .van-cell {
    padding: 10px;
  }
}
</style>
