// 这里放地址弹窗相关的代码
import { certificatesType, sexType } from '../consts'
import { parseTime } from '@/utils/dateFormat'
export default {
    data() {
        return {
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
            currentDate: new Date()
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
        onBirthdayConfirm(value) {
            if (value) {
                this.birthday = parseTime(value, '{y}-{m}-{d}')
            } else {
                this.birthday = undefined
            }
            this.birthdayPicker = false
        },
    }
}