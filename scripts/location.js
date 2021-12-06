function getCityGU() {
    new daum.Postcode({
        oncomplete: function(data) {
            var addr = data.sigungu; // 최종 주소 변수

            // 주소 정보를 해당 필드에 넣는다.
            document.getElementById("location-text").value = addr;
            // 주소로 상세 정보를 검색
        }
    }).open();
}