export const getStartDate = () => {
    const currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth()+1;
    let day = currentDate.getDate();
    let yearToString = "";
    let monthToString = "";
    let dayToString = "";
    month<10 ? monthToString="0"+month.toString() : monthToString=month.toString(); 
    day<10 ? dayToString="0"+day.toString() : dayToString=day.toString(); 
    yearToString=year.toString();
    return yearToString+"-"+monthToString+"-"+dayToString;
}