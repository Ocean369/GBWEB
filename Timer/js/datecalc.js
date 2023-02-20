import { DateTime } from "./luxon.js"; // 1


function diffDates(dateFrom, dateTo) {
    let firstDateObj = DateTime.fromISO(dateFrom);
    let secondDateObj = DateTime.fromISO(dateTo);
    if (firstDateObj > secondDateObj)
        secondDateObj = [firstDateObj, firstDateObj = secondDateObj][0]; // 2
    return secondDateObj.diff(firstDateObj, ['years', 'months', 'days']).toObject();
}

export default diffDates;