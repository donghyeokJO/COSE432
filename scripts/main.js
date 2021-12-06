window.onload = function() {
    var url = window.location.href;
    url = decodeURI(url);
    const url_str = new URL(url);

    const url_params = url_str.searchParams;

    var location = url_params.get("location");

    console.log(location);

    if (!location) {
        location = "서울시 성북구"
    }


    document.getElementById('main-location').innerText = location;

}