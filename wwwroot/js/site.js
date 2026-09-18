// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
let animationId = null;

function myMove() {
    const elem = document.getElementById("myAnimation");
    let pos = 0;

    // Stops any active animation if you click the button again midway
    clearInterval(animationId);

    animationId = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
            clearInterval(animationId);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}