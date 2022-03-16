<template>
  <div class="HomeView">
    <HeaderShow title="添加行程" backButton></HeaderShow>
    <van-form @submit="onSubmit" scroll-to-error>
      <QuestionModule title="行程信息">
        <QuestionModuleItem title="出发地" required>
          <van-field
            readonly
            clickable
            name="placeOfDeparture"
            :value="placeOfDepartureText"
            placeholder="请选择出发地"
            :rules="[{ required: true }]"
            @click="showPlaceOfDepartureAddressPicker = true"
          />
          <van-popup
            v-model="showPlaceOfDepartureAddressPicker"
            position="bottom"
          >
            <van-area
              title="请选择"
              @confirm="onPlaceOfDepartureAddressConfirm"
              @cancel="showPlaceOfDepartureAddressPicker = false"
              :area-list="areaList"
            />
          </van-popup>
        </QuestionModuleItem>
        <QuestionModuleItem title="出发日期" required>
          <van-field
            :value="timeOfDeparture"
            readonly
            clickable
            name="timeOfDeparture"
            placeholder="请选择出发日期"
            @click="timeOfDeparturePicker = true"
            :rules="[{ required: true }]"
          />

          <van-popup v-model="timeOfDeparturePicker" position="bottom">
            <van-datetime-picker
              v-model="currentDate"
              type="date"
              title="选择年月日"
              :max-date="maxDate"
              @confirm="onTimeOfDepartureConfirm"
              @cancel="timeOfDeparturePicker = false"
            />
          </van-popup>
        </QuestionModuleItem>
        <QuestionModuleItem title="目的地" required>
          <van-field
            readonly
            clickable
            name="destination"
            :value="destinationText"
            placeholder="请选择目的地"
            :rules="[{ required: true }]"
            @click="showDestinationAddressPicker = true"
          />
          <van-popup v-model="showDestinationAddressPicker" position="bottom">
            <van-area
              title="请选择"
              @confirm="onDestinationAddressConfirm"
              @cancel="showDestinationAddressPicker = false"
              :area-list="areaList"
            />
          </van-popup>
        </QuestionModuleItem>
        <QuestionModuleItem title="抵达日期" required>
          <van-field
            :value="arrivalDate"
            clickable
            readonly
            name="arrivalDate"
            placeholder="请选择抵达日期"
            @click="arrivalDatePicker = true"
            :rules="[{ required: true }]"
          />

          <van-popup v-model="arrivalDatePicker" position="bottom">
            <van-datetime-picker
              v-model="currentDate"
              type="date"
              title="选择年月日"
              :max-date="maxDate"
              @confirm="onArrivalDateConfirm"
              @cancel="arrivalDatePicker = false"
            />
          </van-popup>
        </QuestionModuleItem>
      </QuestionModule>
      <QuestionModule title="出行交通方式(必选)">
        <van-field
          name="liveType"
          :rules="[{ required: true, message: '请选择出行交通方式' }]"
          style="padding: 0"
        >
          <template #input>
            <van-radio-group v-model="traffic" icon-size="16" style="flex: 1">
              <van-radio
                :name="index"
                v-for="(item, index) in trafficType"
                :key="item"
              >
                <div class="checkItem">
                  <div class="title">{{ item }}</div>
                </div>
              </van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <QuestionModuleItem
          title="乘坐航班车次或车牌号码及座位号(没有填无)"
          style="margin-top: 10px"
          required
        >
          <van-field
            v-model="trafficInfo"
            name="trafficInfo"
            clearable
            placeholder="请输入"
            :rules="[{ required: true }]"
          />
        </QuestionModuleItem>
        <QuestionModuleItem
          title="目的地停留天数"
          style="margin-top: 10px"
          required
        >
          <van-field
            v-model="stayDays"
            name="stayDays"
            clearable
            placeholder="请输入目的地停留天数"
            :rules="[{ required: true }]"
          />
        </QuestionModuleItem>
        <QuestionModuleItem title="居住地" style="margin-top: 10px" required>
          <van-field
            v-model="liveInfo"
            name="liveInfo"
            type="textarea"
            clearable
            placeholder="请详细输入到达目标地后的居住地，如酒店名称、住宅地址等"
            :rules="[{ required: true }]"
          />
        </QuestionModuleItem>
      </QuestionModule>
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit"> 提交 </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import QuestionModule from "@/components/QuestionModule";
import QuestionModuleItem from "@/components/QuestionModuleItem";
import { areaList } from "@/utils/area";
import { mapMutations } from "vuex";
import formMixin from "./mixins/formMixin";
import popupMixin from "./mixins/popupMixin";
import { trafficType } from "./consts";
import HeaderShow from "@/components/HeaderShow.vue";
export default {
  components: {
    QuestionModule,
    QuestionModuleItem,
    HeaderShow,
  },
  mixins: [formMixin, popupMixin],
  data() {
    return {
      trafficType,
    };
  },
  methods: {
    ...mapMutations({
      addTrip: "ADD_TRIP",
    }),
    onSubmit(values) {
      if (values) {
        const params = { ...values };
        params.trafficText = trafficType[params.traffic];
        params.trafficInfo = params.trafficInfo?.trim();
        params.stayDays = params.stayDays?.trim();
        params.liveInfo = params.liveInfo?.trim();
        this.addTrip(params);
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
  /deep/ .van-radio {
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
}
</style>
