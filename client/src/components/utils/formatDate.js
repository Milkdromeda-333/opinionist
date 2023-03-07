
const formatDate = (date) => {
    const dateArr = date.split('');
    const splitIndex = dateArr.findIndex(elem => elem === 'T');
    dateArr.splice(splitIndex);
    return dateArr.join('').split('-').reverse().join('-');
};

export {
    formatDate
};