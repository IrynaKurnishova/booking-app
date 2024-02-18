import axios from "axios";
export default {
    namespaced: true,
    actions: {
        async fetchData() {
            try {
                const response = await axios.get('http://localhost:3000/bookings');
                return response.data.reduce((acc, current) => {
                    const roomName = current.roomDetails.name;
                    if (current.type === 'booked') {
                        if (!acc[roomName]) {
                            acc[roomName] = [];
                        }
                        acc[roomName].push(current);
                    }
                    return acc;
                }, {});
            } catch (error) {
                console.error(error);
            }
        },
//          filterBookingsByDate(bookings, targetDate) {
//     return bookings.filter(booking => {
//         const startDate = moment(booking.start);
//         const endDate = moment(booking.end);
//         return targetDate.isSameOrAfter(startDate) && targetDate.isSameOrBefore(endDate)
//     });
// }

    },
}
