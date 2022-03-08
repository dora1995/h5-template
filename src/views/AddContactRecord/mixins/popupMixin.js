// 这里放地址弹窗相关的代码
import { parseTime } from '@/utils/dateFormat'
export default {
    data() {
        return {
            contactTimePicker: false,
            maxDate: new Date(),
            currentDate: new Date(),
        }
    },
    methods: {
        onContactTimeConfirm(value) {
            if (value) {
                this.contactTime = parseTime(value, '{y}-{m}-{d}')
            } else {
                this.contactTime = undefined
            }
            this.contactTimePicker = false
        },
    }
}