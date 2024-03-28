let film = document.querySelector(".film");
let slidePicture = film.getElementsByClassName("slidePicture");

let = currentIndex = 1;
let imgCnt = slidePicture.length;
let time = 4000;
let x = 1680;

setInterval(function(){
        let trans = currentIndex * x;
        film.style.transform = "translateX(-"+ trans +"px)";                 
        currentIndex++;

        if (currentIndex == imgCnt){
                currentIndex = 0;
        }

}, time);



// to.bin
let input = document.getElementById("memo-input");
let button = document.getElementById("save-memo");
let ul = document.getElementById("memo-list");


button.addEventListener("click", function () {
        button.style.backgroundColor = "lightgray";

        let memo = input.value;

        if (memo != "") { // emtpyString => 텅비어있는 공간
                let li = document.createElement("li");
                li.innerText = memo;
                li.style.cursor = "pointer";
                li.style.color = "black";

                let span = document.createElement("span");
                span.innerText = new Date().toLocaleString();
                span.style.float = "right";
                span.style.fontStyle = "italic";
                span.style.color = "darkgray";

                li.appendChild(span);
                
                ul.appendChild(li);

                li.addEventListener("click", function () {
                        let ok = confirm("정말 삭제하시겠습니까?");

                        if (ok == true) {
                                li.parentNode.removeChild(li);
                        }
                });

                input.value = "";
        }
});
