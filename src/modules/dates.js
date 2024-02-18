import moment from 'moment';

export default {
    namespaced: true,
    state: {
        currentDate: moment(),
        currentWeekDates: []
    },
    getters: {
        getCurrentDate(state) {
            return state.currentDate;
        },
        getCurrentWeekDates(state) {
            return state.currentWeekDates;
        },
    },
    mutations: {
        setCurrentWeekDates(state) {
            const currentMonday = state.currentDate.clone().startOf('isoWeek');
            const currentWeekDates = [];

            for (let i = 0; i < 7; i++) {
                const date = currentMonday.clone().add(i, 'days');
                currentWeekDates.push(date.format('YYYY-MM-DD'));
            }

            state.currentWeekDates = currentWeekDates;
        },
        // setPreviousWeekDates(state) {
        //     const prewiousWeekDates = []
        // }
    },
    actions: {
        setCurrentWeekDates({ commit }) {
            commit('setCurrentWeekDates');
        },
    },
}
