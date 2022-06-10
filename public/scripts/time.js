function nowTime() {
    var now = new Date();
    var date = new Date(now.getTime());

    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();

    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

}

function getTimestamp(strTime=null, nullIsNow=true) {
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

    if (!nullIsNow && strTime == null) {
        return null;
    }
    return new Date(strTime).toISOString().slice(0,16);
    //return new Date(strTime).toISOString().slice(10,16);
}

function getDate(strTime=null, nullIsNow=true) {
    if (!nullIsNow && strTime == null) {
        return null;
    }
    return new Date(strTime).toISOString().substring(0,10);
}