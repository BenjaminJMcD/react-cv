

function fixDate(date) {

    let year = date.slice(0,4);
    let monthDay = date.slice(5);
    let dateFormat = monthDay+"-"+year;
    return dateFormat

};

export default fixDate