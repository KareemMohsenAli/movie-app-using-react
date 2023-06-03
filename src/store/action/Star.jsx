export const changeStar = (payload) => {
    return {
        type: "ADDSTAR",
        payload
    }
}


export const deleteStar = (payload) => {
    return {
        type: "REMOVESTAR",
        payload
    }
}