function nowTime() {
    var now = new Date();
    var date = new Date(now.getTime());

    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();

    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

}

function getTimestamp(strTime=null, nullIsNow=true) {
    if (strTime == "") strTime = null;
    if (!nullIsNow && strTime == null) {
        return "";
    }
    return new Date(strTime).toISOString().slice(0,16);
}

/**
 * @deprecated Use getTimestamp. getTime will return only time part of date since CheeseFramework 1.4.0
 */
function getTime(strTime=null, nullIsNow=true) {
    console.warn(`WARNING! Obsolete function called. Function getTime() has been deprecated, 
please use the new getTimestamp() function instead! Function will return time part of datetime stamp since 1.4.0`);

    if (strTime == "") strTime = null;
    if (!nullIsNow && strTime == null) {
        return null;
    }
    return new Date(strTime).toISOString().slice(0,16);
    //return new Date(strTime).toISOString().slice(10,16);
}

function getDate(strTime=null, nullIsNow=true) {
    if (strTime == "") strTime = null;
    if (!nullIsNow && strTime == null) {
        return null;
    }
    return new Date(strTime).toISOString().substring(0,10);
}

function formatTime(rootSeconds) {
    var hours   = Math.floor(rootSeconds / 3600);
    var minutes = Math.floor((rootSeconds - (hours * 3600)) / 60);
    var seconds = rootSeconds - (hours * 3600) - (minutes * 60);

    str = "";
    if (hours > 0) str += `${hours}h`;
    if (minutes > 0) str += ` ${minutes}m`;
    if (seconds > 0) str += ` ${seconds}s`;
    return str;
}

function formatDatetime(datetime, includeSeconds=true) {

    let year = datetime.getFullYear();
    let date = datetime.getDate();
    let month = datetime.getMonth();

    let hours = datetime.getHours();
    let minutes = datetime.getMinutes();
    let seconds = datetime.getSeconds();

    if (`${hours}`.length == 1) hours = `0${hours}`;
    if (`${minutes}`.length == 1) minutes = `0${minutes}`;
    if (`${seconds}`.length == 1) seconds = `0${seconds}`;

    let dateString = `${date}.${month}.${year} ${hours}:${minutes}`;
    if (includeSeconds) {
        dateString += `:${seconds}`;
    }
    return dateString;
}

function formatDate(datetime, includeYear=true) {

    let year = datetime.getFullYear();
    let date = datetime.getDate();
    let month = datetime.getMonth();

    let dateString = `${date}.${month}`;
    if (includeYear) {
        dateString += `.${year}`;
    }
    return dateString;
}