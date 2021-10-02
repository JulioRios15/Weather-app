


export const getTodaysDate = () => {
    var today = new Date();
    return (today.getMonth()+1) + '-' + today.getDate() + '-'+ today.getFullYear();
}

export const getNextDay = (days) => {
    var today = new Date();
    today.setDate(today.getDate() + days);

    return (today.getMonth()+1) + '-' + today.getDate() + '-'+ today.getFullYear(); 
}
