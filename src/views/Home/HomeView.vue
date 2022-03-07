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
            :rules="[{ required: true }]"
          />
        </QuestionModuleItem>
        <QuestionModuleItem title="手机号码" required>
          <van-field
            v-model="phone"
            maxLength="11"
            name="phone"
            clearable
            placeholder="请输入您的手机号码"
            :rules="[{ required: true }]"
          />
        </QuestionModuleItem>
        <QuestionModuleItem title="证件类型" required>
          <van-field
            readonly
            clickable
            name="certificatesType"
            :value="certificatesTypeValue"
            placeholder="请选择证件类型"
            :rules="[{ required: true }]"
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
            clearable
            v-model="certificatesNumber"
            name="certificatesNumber"
            placeholder="请输入证件号码"
            maxLength="30"
            :rules="[{ required: true }]"
          />
        </QuestionModuleItem>
        <QuestionModuleItem title="性别" required>
          <van-field
            readonly
            clickable
            name="sex"
            :value="sexTypeValue"
            placeholder="请选择性别"
            :rules="[{ required: true }]"
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
            :value="birthday"
            clickable
            name="birthday"
            placeholder="请选择出生日期"
            @click="birthdayPicker = true"
            :rules="[{ required: true }]"
          />

          <van-popup v-model="birthdayPicker" position="bottom">
            <van-datetime-picker
              v-model="currentDate"
              type="date"
              title="选择年月日"
              :max-date="maxDate"
              :min-date="minDate"
              @confirm="onBirthdayConfirm"
              @cancel="birthdayPicker = false"
            />
          </van-popup>
        </QuestionModuleItem>
        <QuestionModuleItem title="居住地址" required>
          <van-field
            v-model="address"
            name="address"
            placeholder="请选择居住地址"
            :rules="[{ required: true }]"
          />
        </QuestionModuleItem>
        <QuestionModuleItem title="楼栋门牌号（详细地址）" required>
          <van-field
            v-model="addressDetail"
            name="addressDetail"
            placeholder="请输入如小区、单元、楼栋号、门牌号"
            :rules="[{ required: true }]"
          />
        </QuestionModuleItem>
        <QuestionModuleItem title="单位（学校）名称">
          <van-field
            v-model="company"
            name="company"
            placeholder="请输入您的单位（学校）名称"
          />
        </QuestionModuleItem>
        <QuestionModuleItem title="目前所在城市" required>
          <van-field
            readonly
            clickable
            name="currentCity"
            :value="currentCityText"
            placeholder="请选择您目前所在城市"
            :rules="[{ required: true }]"
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

      <QuestionModule title="人员类型">
        <van-field
          name="peopleType"
          :rules="[{ required: true, message: '请选择人员类型' }]"
          style="padding: 0"
        >
          <template #input>
            <van-radio-group v-model="peopleType" icon-size="16">
              <van-radio name="1">
                <div class="checkItem">
                  <div class="title">来XX人员</div>
                  <div class="text">
                    非本地常住，2020年1月1日后从外地来XX，暂住旅店或投靠亲友
                  </div>
                </div>
              </van-radio>
              <van-radio name="2">
                <div class="checkItem">
                  <div class="title">返XX人员</div>
                  <div class="text">
                    本地常住，2020年1月1日后从外地返回或计划返回XX
                  </div>
                </div>
              </van-radio>
              <van-radio name="3">
                <div class="checkItem">
                  <div class="title">留XX人员</div>
                  <div class="text">2020年1月1日后一直在XX居住的人员</div>
                </div>
              </van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </QuestionModule>
      <QuestionModule title="是否居家隔离"> phone </QuestionModule>
      <QuestionModule title="居住属性">
        <van-field
          name="liveType"
          :rules="[{ required: true, message: '请选择居住属性' }]"
          style="padding: 0"
        >
          <template #input>
            <van-radio-group v-model="liveType" icon-size="16" style="flex: 1">
              <van-radio name="1">
                <div class="checkItem">
                  <div class="title">居家自住</div>
                </div>
              </van-radio>
              <van-radio name="2">
                <div class="checkItem">
                  <div class="title">租住</div>
                </div>
              </van-radio>
              <van-radio name="3">
                <div class="checkItem">
                  <div class="title">投靠借助</div>
                </div>
              </van-radio>
              <van-radio name="4">
                <div class="checkItem">
                  <div class="title">酒店旅店</div>
                </div>
              </van-radio>
              <van-radio name="5">
                <div class="checkItem">
                  <div class="title">其他</div>
                </div>
              </van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </QuestionModule>
      <QuestionModule title="是否有如下症状">
        <van-field name="symptom" style="padding: 0">
          <template #input>
            <van-checkbox-group
              v-model="symptom"
              icon-size="16"
              style="flex: 1"
            >
              <van-checkbox shape="square" name="1">
                <div class="checkItem">
                  <div class="title">发热</div>
                </div>
              </van-checkbox>
              <van-checkbox shape="square" name="2">
                <div class="checkItem">
                  <div class="title">乏力</div>
                </div>
              </van-checkbox>
              <van-checkbox shape="square" name="3">
                <div class="checkItem">
                  <div class="title">干咳</div>
                </div>
              </van-checkbox>
              <van-checkbox shape="square" name="4">
                <div class="checkItem">
                  <div class="title">鼻塞</div>
                </div>
              </van-checkbox>
              <van-checkbox shape="square" name="5">
                <div class="checkItem">
                  <div class="title">流涕</div>
                </div>
              </van-checkbox>
              <van-checkbox shape="square" name="6">
                <div class="checkItem">
                  <div class="title">腹泻</div>
                </div>
              </van-checkbox>
              <van-checkbox shape="square" name="7">
                <div class="checkItem">
                  <div class="title">呼吸困难</div>
                </div>
              </van-checkbox>
            </van-checkbox-group>
          </template>
        </van-field>
        <QuestionModuleItem title="详细描述" style="margin-top: 10px">
          <van-field
            v-model="detailSymptom"
            name="detailSymptom"
            type="textarea"
            rows="2"
            clearable
            placeholder="请输入您的症状详细描述情况"
            style="padding: 0"
          />
        </QuestionModuleItem>
        <van-field name="over37" style="padding: 0">
          <template #input>
            <van-cell center title="腋下体温超过37.3摄氏度" style="padding: 0">
              <van-switch v-model="over37" size="16" inactive-color="#dcdee0" />
            </van-cell>
          </template>
        </van-field>
      </QuestionModule>
      <QuestionModule title="其他">
        <van-field name="over37" style="padding: 10px 0">
          <template #input>
            <van-cell center title="去医院做过检查" style="padding: 0">
              <van-switch v-model="over37" size="16" inactive-color="#dcdee0" />
            </van-cell>
          </template>
        </van-field>
        <van-field name="over37" style="padding: 10px 0">
          <template #input>
            <van-cell center title="需要咨询或帮助" style="padding: 0">
              <van-switch v-model="over37" size="16" inactive-color="#dcdee0" />
            </van-cell>
          </template>
        </van-field>
      </QuestionModule>

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
  /deep/ .van-radio {
    padding: 10px 0;
    border-bottom: 1px solid #e6e6e6;
  }
  /deep/ .van-checkbox {
    padding: 10px 0;
    border-bottom: 1px solid #e6e6e6;
  }
  .checkItem {
    .title {
      font-size: 16px;
      font-weight: 400;
    }
    .text {
      color: #bebebe;
    }
  }
}
</style>
