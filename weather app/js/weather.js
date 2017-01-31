if ("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(function (position) {
        loadWeather(position.coords.latitude + ',' + position.coords.longitude);
    });
}
else {
    loadWeather("Mumbai, IN", "");
}
