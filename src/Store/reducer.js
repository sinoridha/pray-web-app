const initialState = {
    location: null,
    times: [
        { id: "fajr", name: "Subuh", time: 'NaN' },
        { id: "dhuhr", name: "Dhuhr", time: 'NaN' },
        { id: "asr", name: "Ashr", time: 'NaN' },
        { id: "isha", name: "Magrib", time: 'NaN' },
        { id: "maghrib", name: "Isya", time: 'NaN' }
      ]
}

const reducer = (state = initialState, action) => {
    if (action.type === 'CHANGELOC') {
        return {
            location: null,
            times: action.times
        }
    }
    return state;
}

export default reducer;