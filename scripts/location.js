function getCityGU() {
    new daum.Postcode({
        oncomplete: function(data) {
            var si = data.sido
            var sigungu = data.sigungu; // 최종 주소 변수
            // console.log(si);
            // console.log(sigungu);

            if (si == "서울") {
                si += '시'
            }
            // 주소 정보를 해당 필드에 넣는다.
            document.getElementById("location-text").value = si + ' ' + sigungu;
        }
    }).open();
}

function gotomain() {
    var location = document.getElementById("location-text").value;
    window.location.href = "index.html?location=" + location;
}