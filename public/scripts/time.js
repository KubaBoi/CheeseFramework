function nowTime() {
    var now = new Date();
    var date = new Date(now.getTime());

    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();

    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

}

function getTime(strTime=null) {
    return new Date(strTime).toISOString().slice(0,16);
}

function getDate(strTime=null, nullIsNow=true) {
    if (!nullIsNow && strTime == null) {
        return null;
    }
    return new Date(strTime).toISOString().substring(0,10);
}