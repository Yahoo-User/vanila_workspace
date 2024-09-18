

if(navigator.geolocation) {

    const geolocation = navigator.geolocation;
    console.log('1. geolocation:', geolocation);

    // --------------

    const options = {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: 5000
    };

    console.log('2. options:', options);

    // --------------

    function successCallback(position) {
        console.group('- position -');

        console.log('1. position:', position);
        console.log('2. position.timestamp:', position.timestamp);
        console.log('3. position.coords:', position.coords);
        console.log('4. position.coords.accuracy:', position.coords.accuracy);
        console.log('5. position.coords.latitude:', position.coords.latitude);
        console.log('6. position.coords.longitude:', position.coords.longitude);

        console.groupEnd();
    } // successCallback

    function errorCallback(error) {
        console.group('- error -');

        console.log('1. error:', error);
        console.log('2. error.code:', error.code);
        console.log('3. error.message:', error.message);
        console.log('4. error.TIMEOUT:', error.TIMEOUT);
        console.log('5. error.PERMISSION_DENIED:', error.PERMISSION_DENIED);
        console.log('6. error.POSITION_UNAVAILABLE:', error.POSITION_UNAVAILABLE);

        console.groupEnd();
    } // errorCallback

    const watchId = navigator.geolocation.watchPosition(
        // position => console.log(position),
        // console.log,
        successCallback, 
        
        // error => console.log(error),
        // console.log,
        errorCallback,

        options
    ); // .watchPosition

    // --------------

    setTimeout(() => {
        console.log('3. watchId:', watchId);

        navigator.geolocation.clearWatch(watchId);
    }, 1000 * 60);

} // if