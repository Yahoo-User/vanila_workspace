function sleep(millis) {
    let dt = new Date();

    while((new Date() - dt) <= millis);
} // sleep