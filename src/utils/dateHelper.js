const zeroFollowed2Digits = (value) => ("0" + value).slice(-2);
export const getShortDate = (date) => {
    
    return zeroFollowed2Digits(date.getDate()) + "/" + zeroFollowed2Digits(date.getMonth() + 1) + "/" + date.getFullYear();
};

export const getShortTime = (date) => {
    
    return date.toLocaleTimeString('en-US');
};
