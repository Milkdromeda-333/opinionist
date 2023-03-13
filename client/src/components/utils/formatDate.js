
const formatDate = (date) => {
    let dateArr = date.split('');
    const splitIndex = dateArr.findIndex(elem => elem === 'T');
    dateArr.splice(splitIndex);
    dateArr = dateArr.join('').split('-');
    const [year, month, day] = dateArr;
    return `${month}-${day}-${year}`;
};

export {
    formatDate
};