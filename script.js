var newYearDate = new Date("2014-01-01 00:00:00");
function addLeadingZeros(number, length) {
    var num = '' + number;
    while (num.length < length) num = '0' + num;
    return num;
}

$(document).ready(function () {
    var loop = setInterval(function () {
        var currDate = new Date();
        var diff = new Date(newYearDate - currDate);
        if(diff <= 0) {
            clearInterval(loop);
            window.location='finish.html';
            return;
        }
        $('#digits').show();
        if(diff.getUTCDate() > 1) {
            $('#days').text(addLeadingZeros(diff.getUTCDate() - 1, 2));
        } else {
            $('#digit-days').hide();
        }
        $('#hours').text(addLeadingZeros(diff.getUTCHours(), 2));
        $('#minutes').text(addLeadingZeros(diff.getUTCMinutes(), 2));
        $('#seconds').text(addLeadingZeros(diff.getUTCSeconds(), 2));
        if(diff <= 60000) {
            var barWidth = (1 - diff / 60000) * 100 + '%';
            $('#bar').animate({'width': barWidth}, 250);
        }
        
    }, 1000);
});