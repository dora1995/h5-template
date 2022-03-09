// 按需全局引入 vant组件
import Vue from "vue";
import {
    Button,
    List,
    Cell,
    Tabbar,
    TabbarItem,
    Form,
    Field,
    Area,
    Popup,
    Picker,
    DatetimePicker,
    RadioGroup,
    Radio,
    Checkbox,
    CheckboxGroup,
    Switch,
    Icon,
    Toast,
    Uploader
} from "vant";

Vue.use(Area);
Vue.use(Button);
Vue.use(Cell);
Vue.use(List);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Form);
Vue.use(Field);
Vue.use(Popup);
Vue.use(Picker);
Vue.use(DatetimePicker);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Icon);
Vue.use(Toast);
Vue.use(Uploader);
