"use strict";


/* Encapsulation of the code */

let encap = (function() {


    /* Declaring global variables only in this scope */

    let x = 0;
    let y = 0;
    let moveX = 0;
    let moveY = 0;
    let canvas = document.getElementById('myCanvas');
    let context = canvas.getContext('2d');
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;


    /* Drawing lines */

    function coordinates(event) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 25; i++) {
            x = event.clientX;
            y = event.clientY;
            context.beginPath();
            context.moveTo(moveX, moveY);
            context.lineTo(x, y);
            context.strokeStyle = 'red';
            context.lineWidth = 2;
            context.stroke();
            moveX += 50;
        }
        moveX = 0;
        for (let i = 0; i < 25; i++) {
            x = event.clientX;
            y = event.clientY;
            moveY = 600;
            context.beginPath();
            context.moveTo(moveX, moveY);
            context.lineTo(x, y);
            if (i === 0 || i === 24) {
                context.strokeStyle = 'yellow';
            } else {
                context.strokeStyle = 'red';
            }
            context.stroke();
            moveX += 50;
        }
        moveX = 0;
        moveY = 0;
        for (let i = 0; i < 12; i++) {
            x = event.clientX;
            y = event.clientY;
            context.beginPath();
            context.moveTo(moveX, moveY);
            context.lineTo(x, y);
            if (i === 0) {
                context.strokeStyle = 'yellow';
            } else {
                context.strokeStyle = 'red';
            }
            context.stroke();
            moveY += 50;
        }
        moveY = 0;
        for (let i = 0; i < 12; i++) {
            x = event.clientX;
            y = event.clientY;
            moveX = 1200;
            context.beginPath();
            context.moveTo(moveX, moveY);
            context.lineTo(x, y);
            if (i === 0) {
                context.strokeStyle = 'yellow';
            } else {
                context.strokeStyle = 'red';
            }
            context.stroke();
            moveY += 50;
        }
        moveX = 0;
        moveY = 0;
    };


    /* Closure (IIFE --->>> return) */

    return {
        getCoordinates: () => {
            return coordinates(event);
        }
    };

})();