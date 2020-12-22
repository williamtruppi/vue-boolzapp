import Vue from 'vue';
import dayjs from 'dayjs';

Object.defineProperties(Vue.prototype, {
    $date: {
        get() {
            return dayjs
        }
    }
});