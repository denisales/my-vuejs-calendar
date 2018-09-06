import Vue from 'vue'

import store from './store'

import moment from 'moment-timezone';
moment.tz.setDefault('UTC')

Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } })

import App from './components/App.vue'
import { create } from 'domain';






export default function (events) {

    let initialState = Object.assign({}, store.state, { events })
    store.replaceState(initialState)


    return new Vue({
        store,
        data: {
            moment
        },
        components: {
            App
        },

        render(createElement) {
            return createElement(
                'div',
                { attrs: { id: 'app' } },
                [
                    createElement('app')
                ]
            );
        }
    });
}