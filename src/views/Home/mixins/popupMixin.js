// 这里放地址弹窗相关的代码
import { certificatesType, sexType, nucleicTimeType } from '../consts'
import { parseTime } from '@/utils/dateFormat'
export default {
    data() {
        return {
            // 地址选择相关
            showAddressPicker: false,
            // 证件类型
            certificatesTypePicker: false,
            certificatesTypeColumns: [
                ...certificatesType
            ],
            // 性别
            sexPicker: false,
            sexColumns: [...sexType],
            // 日期
            birthdayPicker: false,
            maxDate: new Date(),
            minDate: new Date(new Date().getTime() - (31536000000 * 100)),
            currentDate: new Date(),
            // 现居住地址
            showCurrentAddressPicker: false,
            nucleicTimePicker: false,
            nucleicTimeColumns: [...nucleicTimeType],
        }
    },
    methods: {
        onAddressConfirm(value) {
            console.log(value);
            this.currentCity = value
            this.showAddressPicker = false;
        },
        onAddressCancel() {
            this.showAddressPicker = false;
        },
        onCertificatesTypeConfirm(value, index) {
            this.certificatesType = index;
            this.certificatesTypePicker = false;
        },
        onSexConfirm(value, index) {
            this.sex = index;
            this.sexPicker = false;
        },
        onNucleicTimeConfirm(value, index) {
            this.nucleicTime = index;
            this.nucleicTimePicker = false;
        },
        onBirthdayConfirm(value) {
            if (value) {
                this.birthday = parseTime(value, '{y}-{m}-{d}')
            } else {
                this.birthday = undefined
            }
            this.birthdayPicker = false
        },
        onCurrentAddressConfirm(value) {
            this.address = value
            this.showCurrentAddressPicker = false;
        },
    }
}