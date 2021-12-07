function getCityGU() {
    new daum.Postcode({
        oncomplete: function(data) {
            var si = data.sido
            var sigungu = data.sigungu; // 최종 주소 변수
            console.log(si);
            console.log(sigungu);
            // 주소 정보를 해당 필드에 넣는다.
            document.getElementById("location-text").value = si + ' ' + sigungu;
        }
    }).open();
}

function gotomain() {
    var location = document.getElementById("location-text").value;
    window.location.href = "index.html?location=" + location;
}

function loadmap() {
    // if (navigator.geolocation) {

    //     // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    //     navigator.geolocation.getCurrentPosition(function(position) {

    //         var lat = position.coords.latitude, // 위도
    //             lon = position.coords.longitude; // 경도

    //         var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
    //             message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다

    //         // 마커와 인포윈도우를 표시합니다
    //         displayMarker(locPosition, message);

    //     });

    // } else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

    //     var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
    //         message = 'geolocation을 사용할수 없어요..'

    //     displayMarker(locPosition, message);
    // }
}