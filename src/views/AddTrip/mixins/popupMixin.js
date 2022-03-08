// 这里放地址弹窗相关的代码
import { parseTime } from '@/utils/dateFormat'
export default {
    data() {
        return {
            showPlaceOfDepartureAddressPicker: false,
            showDestinationAddressPicker: false,
            timeOfDeparturePicker: false,
            arrivalDatePicker: false,
            maxDate: new Date(),
            currentDate: new Date(),
        }
    },
    methods: {
        onPlaceOfDepartureAddressConfirm(value) {
            this.placeOfDeparture = value
            this.showPlaceOfDepartureAddressPicker = false;
        },
        onDestinationAddressConfirm(value) {
            this.destination = value
            this.showDestinationAddressPicker = false;
        },
        onTimeOfDepartureConfirm(value) {
            if (value) {
                this.timeOfDeparture = parseTime(value, '{y}-{m}-{d}')
            } else {
                this.timeOfDeparture = undefined
            }
            this.timeOfDeparturePicker = false
        },
        onArrivalDateConfirm(value) {
            if (value) {
                this.arrivalDate = parseTime(value, '{y}-{m}-{d}')
            } else {
                this.arrivalDate = undefined
            }
            this.arrivalDatePicker = false
        }
    }
}