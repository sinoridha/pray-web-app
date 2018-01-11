const initialState = {
    location: null,
    times: [
        { id: "fajr", name: "Subuh", time: 'NaN' },
        { id: "dhuhr", name: "Dhuhr", time: 'NaN' },
        { id: "asr", name: "Ashr", time: 'NaN' },
        { id: "isha", name: "Magrib", time: 'NaN' },
        { id: "maghrib", name: "Isya", time: 'NaN' }
      ],
    geo : [],
    displayTablePray: false
}

const reducer = (state = initialState, action) => {
    if (action.type === 'CHANGELOC') {
        return {
            ...state,
            times: action.times,
            location: action.location
        }
    }
    if (action.type === 'DISPLAYTABLE') {
        return {
            ...state,
            displayTablePray : true
        }
    }
    if (action.type === 'HIDETABLE') {
        return {
            ...state,
            displayTablePray : false
        }
    }
    return state;
}

export default reducer;