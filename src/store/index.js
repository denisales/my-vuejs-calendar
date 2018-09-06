import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import moment from 'moment-timezone';
moment.tz.setDefault('UTC')


import Axios from 'axios'
import { isContext } from 'vm';

export default new Vuex.Store({
    state: {
        correntYear: 2018,
        correntMonth: 9,
        eventFormPosX: 0,
        eventFormPosY: 0,
        eventFormActive: false,
        events: [],
        eventFormDate: moment()
    },
    mutations: {
        setCurrentMonth(state, payload) {
            state.correntMonth = payload;
        },
        setCurrentYear(state, payload) {
            state.correntYear = payload;
        },
        eventFormPos(state, payload) {
            state.eventFormPosX = payload.x;
            state.eventFormPosY = payload.y;
        },
        eventFormActive(state, payload) {
            state.eventFormActive = payload
        },
        addEvent(state, payload) {
            state.events.push(payload)
        },
        eventFormDate(state, payload) {
            state.eventFormDate = payload
        }
    },
    actions: {
        addEvent(context, payload) {
            return new Promise((resolve, reject) => {
                let obj = {
                    description: payload,
                    date: context.state.eventFormDate
                }
                Axios.post('/add_event', obj).then(response => {
                    if (response.status === 200) {

                        context.commit('addEvent', obj)
                        setTimeout(function () {
                            resolve();
                        }, 1000)

                    } else {
                        reject();
                    }
                });
            });

        }
    }
})