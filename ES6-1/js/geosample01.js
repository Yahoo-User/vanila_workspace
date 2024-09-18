

// 현재 브라우저가 geolocation을 지원하는지 확인
console.log('0. navigator.geolocation supported ?', ( navigator.geolocation != null ) );

// const geolocation = window.navigator.geolocation;
const geolocation = navigator.geolocation;

const geolocationPrototype = geolocation.constructor.prototype;

console.log('1. geolocation:', geolocation);
console.log('2. geolocation.constructor.prototype:', geolocation.constructor.prototype);
console.log('3. geolocationPrototype.getCurrentPosition:', geolocationPrototype.getCurrentPosition);
console.log('4. geolocationPrototype.watchPosition:', geolocationPrototype.watchPosition);
console.log('5. geolocationPrototype.clearWatch:', geolocationPrototype.clearWatch);

// --------------------------- //

var currentPosition;
var positionError;

// geolocation.getCurrentPosition(console.log, console.log, { enableHighAccuracy: true, maximumAge: 0, timeout: 3000 });

geolocation.getCurrentPosition(
    // position => console.log(position),
    // console.log,

    position => {
        console.group('- position -');

        console.log('1. position:', position);
        console.log('2. position.timestamp:', position.timestamp);
        console.log('3. position.coords:', position.coords);
        console.log('4. position.coords.accuracy:', position.coords.accuracy);
        console.log('5. position.coords.latitude:', position.coords.latitude);
        console.log('6. position.coords.longitude:', position.coords.longitude);

        console.groupEnd();
    },

    // error => console.log(error),
    // console.log,

    error => {
        console.group('- error -');

        console.log('1. error:', error);
        console.log('2. error.code:', error.code);
        console.log('3. error.message:', error.message);
        console.log('4. error.TIMEOUT:', error.TIMEOUT);
        console.log('5. error.PERMISSION_DENIED:', error.PERMISSION_DENIED);
        console.log('6. error.POSITION_UNAVAILABLE:', error.POSITION_UNAVAILABLE);

        console.groupEnd();
    },

    // options
    {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 3000
    }
);  // .getCurrentPosition