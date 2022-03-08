// 这里放表单相关的代码
export default {
    data() {
        return {
            // 表单相关
            placeOfDeparture: undefined,
            timeOfDeparture: undefined,
            destination: undefined,
            arrivalDate: undefined,
            traffic: undefined,
            trafficInfo: undefined,
            stayDays: undefined,
            liveInfo: undefined
        }
    },
    computed: {
        placeOfDepartureText() {
            if (this.placeOfDeparture) {
                const text = this.placeOfDeparture.map(item => item.name).join('-')
                return text
            }
            return undefined
        },
        destinationText() {
            if (this.destination) {
                const text = this.destination.map(item => item.name).join('-')
                return text
            }
            return undefined
        }
    }
}