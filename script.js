
document.querySelectorAll("*").fontStyle = "none";

// function mFollwerSkew() {
//     var recPosX = 1;
//     var recPosY = 1;


//     preX = 0;
//     perY = 0;

//     window.addEventListener("mousemove", function (dets) {
//         clearTimeout(timeout);
//         recPosX = gsap.utils.clamp(0.8, 1.2, dets.clientX - preX);
//         recPosY = gsap.utils.clamp(0.8, 1.2, dets.clientY - perY);

//         preX = dets.clientX;
//         perY = dets.clientY;

//         timeout = setTimeout(function () {
//             document.querySelector(".mousefollwer").style.display = "block ";
//             document.querySelector(".mousefollwer").style.left = `${Math.abs(dets.clientX)}px`;
//             document.querySelector(".mousefollwer").style.top = `${Math.abs(dets.clientY)}px`;
//             document.querySelector(".mousefollwer").style.transform = `scale(1 , 1)`;
//         }, 100);
//         mousefollwer(recPosX, recPosY);
//     });
// };

function mousefollwer(recPosX, recPosY) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector(".mousefollwer").style.display = "block ";
        document.querySelector(".mousefollwer").style.left = `${Math.abs(dets.clientX)}px`;
        document.querySelector(".mousefollwer").style.top = `${Math.abs(dets.clientY)}px`;
        // document.querySelector(".mousefollwer").style.transform = `scale(${recPosX}, ${recPosY})`;
    });
};


function bigCirclettt() {
    document.querySelector(".mousefollwer").style.backgroundImage = `url("js-cursor.png")`;
    document.querySelector(".mousefollwer").style.backgroundSize = "cover";
    document.querySelector(".mousefollwer").style.backgroundColor = "transparent";
    document.querySelector(".mousefollwer").style.borderRadius = "0";
    document.querySelector(".mousefollwer").style.scale = "25";
    document.querySelector(".mousefollwer").style.zIndex = "-999";
};
function bigCirclekkk() {
    document.querySelector(".mousefollwer").style.backgroundImage = `url("css-3-1.png")`;
    document.querySelector(".mousefollwer").style.backgroundSize = "cover";
    document.querySelector(".mousefollwer").style.backgroundColor = "transparent";
    document.querySelector(".mousefollwer").style.borderRadius = "0";
    document.querySelector(".mousefollwer").style.scale = "25";
    document.querySelector(".mousefollwer").style.zIndex = "-999";
};
function bigCirclerrr() {
    document.querySelector(".mousefollwer").style.backgroundImage = `url("html-5-1.png")`;
    document.querySelector(".mousefollwer").style.backgroundSize = "cover";
    document.querySelector(".mousefollwer").style.backgroundColor = "transparent";
    document.querySelector(".mousefollwer").style.borderRadius = "0";
    document.querySelector(".mousefollwer").style.scale = "25";
    document.querySelector(".mousefollwer").style.zIndex = "-999";
};
function bigCircle1() {
    // document.querySelector(".mousefollwer").style.backgroundImage = `url("myimage.jpg")`;
    // document.querySelector(".mousefollwer").style.backgroundSize = "cover";
    document.querySelector(".mousefollwer").style.scale = "19";
    document.querySelector(".mousefollwer").style.zIndex = "-999";
    document.querySelector(".mousefollwer").style.boxShadow = "0 0 8px #bababa";
};

function bigCircleOut() {
    document.querySelector(".mousefollwer").style.backgroundImage = `url("blackBg.png")`;
    document.querySelector(".mousefollwer").style.borderRadius = "100px";
    document.querySelector(".mousefollwer").style.scale = "1";
    document.querySelector(".mousefollwer").style.zIndex = "999";
    document.querySelector(".mousefollwer").style.boxShadow = "0 0 0 transparent";
};

function mousefollwerHide() {
    document.querySelector(".mousefollwer").style.zIndex = "-999";
};
function mousefollwerIn() {
    document.querySelector(".mousefollwer").style.display = "block";
};


mousefollwer();
mFollwerSkew();