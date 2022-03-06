// 这里放地址弹窗相关的代码
export default {
    data() {
        return {
            showAddressPicker: false,
            // 证件类型
            certificatesTypePicker: false,
            certificatesTypeColumns: [
                '居民身份证',
                '港澳居民来往内地通行证',
                '台湾居民来往内地通行证',
                '护照',
                '其他',
                '港澳台居民居住证',
                '出生医学证明'
            ],
            // 性别
            sexPicker: false,
            sexColumns: ['男', '女']
        }
    },
    methods: {
        onAddressConfirm(value) {
            console.log(value);
            this.showAddressPicker = false;
        },
        onAddressCancel() {
            this.showAddressPicker = false;
        },
        onCertificatesTypeConfirm(value) {
            console.log(value);
        },
        onSexConfirm(value) {
            console.log(value);
        }
    }
}