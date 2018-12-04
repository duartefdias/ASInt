function sendPostRequest(url, data) {
    console.log('Starting ajax post request');

    axios.post(url, {
        data,
        headers: {
            "Access-Control-Allow-Origin": "localhost"
        },
        responseType: 'json'
    })
        .then(function(response) {
            //console.log(response);
            console.log('[C]Server response:');
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
}

//Get latitute & longitude
function successFunction(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    //console.log('Your latitude is :'+lat+' and longitude is '+long);
    //Send user id and respective coordinates
    url = serverURL + "/sendLocation";
    sendPostRequest(url, {'user': dummyID,'location': {'latitude':lat, 'longitude':long}});
}

//Send user data to add him to DB
function addUserToDB(id , name) {
    url = serverURL + "/sendUserInfo";
    sendPostRequest(url, {'id': id,'name': name});
}