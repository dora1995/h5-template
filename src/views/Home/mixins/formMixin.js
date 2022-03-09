// 这里放表单相关的代码
import { certificatesType, sexType } from '../consts'
export default {
    data() {
        return {
            // 表单相关
            name: undefined,
            phone: undefined,
            certificatesType: 0,
            certificatesNumber: undefined,
            sex: undefined,
            birthday: undefined,
            address: undefined,
            addressDetail: undefined,
            currentCity: undefined,
            // 人员类型
            peopleType: undefined,
            // 隔离地址
            isolateAddress: undefined,
            // 居住属性
            liveType: undefined,
            // 症状
            symptom: undefined,
            detailSymptom: undefined,
            over37: false,
            toHospital: false,
            needHelp: false,
            nucleicResult: [],
            healthyScreenshot: []
        }
    },
    computed: {
        certificatesTypeValue() {
            if (this.certificatesType !== '') {
                return certificatesType[this.certificatesType]
            } else {
                return undefined
            }
        },
        sexTypeValue() {
            if (this.sex !== '') {
                return sexType[this.sex]
            } else {
                return undefined
            }
        },
        currentCityText() {
            if (this.currentCity) {
                const text = this.currentCity.map(item => item.name).join('-')
                console.log(text)
                return text
            }
            return undefined
        },
        currentAddressText() {
            if (this.address) {
                const text = this.address.map(item => item.name).join('-')
                return text
            }
            return undefined
        }
    }
}