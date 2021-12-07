function set_alarm() {
    var umbrella = document.getElementById('chk1').checked;
    var sunscreen = document.getElementById('chk2').checked;
    var mask = document.getElementById('chk3').checked;
    var jacket = document.getElementById('chk4').checked;

    var banner = document.getElementById('chk5').checked;
    var voice = document.getElementById('chk6').checked;
    var messenger = document.getElementById('chk7').checked;

    var time1 = document.getElementById('time1').value;
    var time2 = document.getElementById('time2').value;
    var time3 = document.getElementById('time3').value;
    var time4 = document.getElementById('time4').value;

    var result = confirm("저장하시겠습니까?");

    if (result) {
        var message = "다음과 같이 알림을 설정합니다." + '\n';
        if (!banner && !voice && !messenger || !umbrella && !sunscreen && !mask && !jacket) {
            message += "알림 받지 않기";
        } else {
            message += "***알림 설정 내용***" + '\n';
            if (umbrella) message += "우산 챙김 알림" + '\n';
            if (sunscreen) message += "선크림 알림" + '\n';
            if (mask) message += "미세먼지 마스크 알림" + '\n';
            if (jacket) message += "외투 챙김 알림" + '\n';
            message += '\n' + "***알림 방식***" + '\n';
            if (banner) message += "배너 알림 받기" + '\n';
            if (voice) message += "음성 알림 받기" + '\n';
            if (messenger) message += "메신저 알림 받기" + '\n';
            message += '\n' + '***알림 시간***' + '\n';
            message += time1 + '' + time2 + ' : ' + time3 + '' + time4
        }
        alert(message);
        location.href = "index.html"
    }
}