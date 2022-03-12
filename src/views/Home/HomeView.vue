<template>
  <div class="HomeView">
    <HeaderShow title="健康信息上报"></HeaderShow>
    <van-form @submit="onSubmit" scroll-to-error>
      <QuestionModule title="基本信息">
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
        <QuestionModuleItem title="现居住地址" required>
          <van-field
            readonly
            clickable
            name="address"
            :value="currentAddressText"
            placeholder="请选择现居住地址"
            :rules="[{ required: true }]"
            @click="showCurrentAddressPicker = true"
          />
          <van-popup v-model="showCurrentAddressPicker" position="bottom">
            <van-area
              title="请选择"
              @confirm="onCurrentAddressConfirm"
              @cancel="showCurrentAddressPicker = false"
              :area-list="areaList"
            />
          </van-popup>
        </QuestionModuleItem>
        <QuestionModuleItem title="楼栋门牌号（详细地址）" required>
          <van-field
            v-model="addressDetail"
            name="addressDetail"
            placeholder="请输入如小区、单元、楼栋号、门牌号"
            :rules="[{ required: true }]"
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

      <QuestionModule title="人员类型(必选)">
        <van-field
          name="peopleType"
          :rules="[{ required: true, message: '请选择人员类型' }]"
          style="padding: 0"
        >
          <template #input>
            <van-radio-group v-model="peopleType" icon-size="16">
              <van-radio name="1">
                <div class="checkItem">
                  <div class="title">来珠海人员</div>
                  <div class="text">
                    非本地常住，2020年1月1日后从外地来珠海，暂住旅店或投靠亲友
                  </div>
                </div>
              </van-radio>
              <van-radio name="2">
                <div class="checkItem">
                  <div class="title">返珠海人员</div>
                  <div class="text">
                    本地常住，2020年1月1日后从外地返回或计划返回珠海
                  </div>
                </div>
              </van-radio>
              <van-radio name="3">
                <div class="checkItem">
                  <div class="title">留珠海人员</div>
                  <div class="text">2020年1月1日后一直在珠海居住的人员</div>
                </div>
              </van-radio>
            </van-radio-group>
          </template>
        </van-field>
      </QuestionModule>
      <QuestionModule title="是否居家隔离">
        <QuestionModuleItem
          title="相关部门已经确认需居家隔离观察人员，且在观察期内"
        >
          <van-field
            v-model="isolateAddress"
            name="isolateAddress"
            maxLength="30"
            clearable
            placeholder="如是，请输入隔离地址，否则输入否"
          />
        </QuestionModuleItem>
      </QuestionModule>
      <QuestionModule title="居住属性(必选)">
        <van-field
          name="liveType"
          :rules="[{ required: true, message: '请选择居住属性' }]"
          style="padding: 0"
        >
          <template #input>
            <van-radio-group v-model="liveType" icon-size="16" style="flex: 1">
              <van-radio
                :name="index"
                v-for="(item, index) in liveTypeEnum"
                :key="item"
              >
                <div class="checkItem">
                  <div class="title">{{ item }}</div>
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
              <van-checkbox
                shape="square"
                :name="index"
                v-for="(item, index) in symptomType"
                :key="item"
              >
                <div class="checkItem">
                  <div class="title">{{ item }}</div>
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
              <van-switch v-model="over37" size="20" inactive-color="#dcdee0" />
            </van-cell>
          </template>
        </van-field>
      </QuestionModule>
      <QuestionModule title="其他">
        <QuestionModuleItem
          title="2022年3月1日起本市以外行程"
          style="margin-top: 10px"
        >
          <div v-for="(item, index) in tripList" :key="index">
            {{ item.placeOfDeparture }}
          </div>
          <div class="addListItem" @click="toAddTrip">
            <van-icon name="plus" class="icon" />添加行程
          </div>
        </QuestionModuleItem>
        <QuestionModuleItem
          title="与确诊或疑似病例密切接触史"
          style="margin-top: 10px"
        >
          <div v-for="(item, index) in contactRecordList" :key="index">
            {{ item.patientName }}
          </div>
          <div class="addListItem" @click="toAddContactRecord">
            <van-icon name="plus" class="icon" />添加接触记录
          </div>
        </QuestionModuleItem>
        <QuestionModuleItem title="请上传核酸检测结果">
          <div style="margin-bottom: 5px; color: #bebebe">
            如未离开工作地，请上传粤康码截图
          </div>
          <van-field name="nucleicResult" style="padding: 0">
            <template #input>
              <van-uploader v-model="nucleicResult" max-count="1" />
            </template>
          </van-field>
        </QuestionModuleItem>
        <QuestionModuleItem title="请上传健康码截图(粤康码)">
          <van-field name="healthyScreenshot" style="padding: 0">
            <template #input>
              <van-uploader v-model="healthyScreenshot" max-count="1" />
            </template>
          </van-field>
        </QuestionModuleItem>
        <QuestionModuleItem title="核酸情况">
          <van-field
            readonly
            clickable
            name="nucleicTime"
            :value="nucleicTimeValue"
            placeholder="请选择"
            @click="nucleicTimePicker = true"
          />
          <van-popup v-model="nucleicTimePicker" position="bottom">
            <van-picker
              title="核酸情况"
              show-toolbar
              :columns="nucleicTimeColumns"
              @confirm="onNucleicTimeConfirm"
              @cancel="nucleicTimePicker = false"
            />
          </van-popup>
        </QuestionModuleItem>
        <van-field name="toHospital" style="padding: 10px 0">
          <template #input>
            <van-cell center title="去医院做过检查" style="padding: 0">
              <van-switch
                v-model="toHospital"
                size="20"
                inactive-color="#dcdee0"
              />
            </van-cell>
          </template>
        </van-field>
        <van-field name="needHelp" style="padding: 10px 0">
          <template #input>
            <van-cell center title="需要咨询或帮助" style="padding: 0">
              <van-switch
                v-model="needHelp"
                size="20"
                inactive-color="#dcdee0"
              />
            </van-cell>
          </template>
        </van-field>
      </QuestionModule>
      <van-checkbox v-model="hasSee" shape="square"
        >我已阅知本申报所列事项，并保证以上申报内容正确属实</van-checkbox
      >
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit"> 提交 </van-button>
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
import { symptomType, liveTypeEnum } from "./consts";
import HeaderShow from "@/components/HeaderShow.vue";

export default {
  name: "HomeView",
  components: {
    QuestionModule,
    QuestionModuleItem,
    HeaderShow,
  },
  mixins: [formMixin, popupMixin],
  data() {
    return {
      hasSee: false,
      symptomType,
      liveTypeEnum,
    };
  },
  computed: {
    ...mapState(["userId", "contactRecordList", "tripList"]),
  },
  methods: {
    ...mapMutations({
      setUserId: "SET_USER_ID",
      showLoading: "SHOW_LOADING",
      hideLoading: "HIDE_LOADING",
    }),
    async onSubmit(values) {
      console.log(values);
      if (!this.hasSee) {
        this.$toast("请勾选申报须知确认");
        return;
      }
      this.showLoading();
      const nucleicResult = this.nucleicResult[0];
      const healthyScreenshot = this.healthyScreenshot[0];

      try {
        let data1;
        if (nucleicResult) {
          const param1 = new FormData(); // 创建form对象
          param1.append("file", nucleicResult.file); // 通过append向form对象添加数据
          // 上传第一张
          data1 = await this.$http.post("/admin/file/upload/picture", param1, {
            headers: { "Content-Type": "multipart/form-data" },
            timeout: 0,
          });
        }
        let data2;
        if (healthyScreenshot) {
          const param2 = new FormData(); // 创建form对象
          param2.append("file", healthyScreenshot.file); // 通过append向form对象添加数据
          // 上传第二张
          data2 = await this.$http.post("/admin/file/upload/picture", param2, {
            headers: { "Content-Type": "multipart/form-data" },
            timeout: 0,
          });
        }

        const params = {
          ...values,
          nucleicResultPic: data1,
          healthyScreenshotPic: data2,
        };
        const data3 = await this.$http.post(`/s/${this.userId}`, {
          content: JSON.stringify(params),
        });
        this.hideLoading();
        this.$router.replace("/submitSuccess");
      } catch (e) {
        console.log(e);
        this.hideLoading();
      }
      // todo 处理数据
      // 1.两张图片要上传到服务器中
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    toAddContactRecord() {
      this.$router.push("/addContactRecord");
    },
    toAddTrip() {
      this.$router.push("/addTrip");
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
  position: relative;
  padding-top: 60px;
  /deep/ .van-cell {
    padding: 10px 0;
  }
  /deep/ .van-radio {
    padding: 20px 0;
    border-bottom: 1px solid #e6e6e6;
    &:first-child {
      padding-top: 0;
    }
  }
  /deep/ .van-checkbox {
    padding: 20px 0;
    border-bottom: 1px solid #e6e6e6;
    &:first-child {
      padding-top: 0;
    }
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
  .addListItem {
    padding: 15px 0;
    .icon {
      border: 1px solid #e6e6e6;
      padding: 5px;
      margin-right: 10px;
    }
  }
}
</style>
