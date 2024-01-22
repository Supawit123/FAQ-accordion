let acc = document.getElementsByClassName("sub_header");

function Start_Acc() {
    //1.ผูกค่าจากหน้าHTMLกับJavascriptก่อน


    //2.ใช้การวนลูปเพื่อเข้าถึง acc ทุกตัวที่มี
    //วนลูปเท่ากับจำนวนของ class 'sub_header' ในที่นี้คือ 2 (0,1)
    for (let i = 0; i < acc.length; i++) {

        //3.ดักตัวที่'คลิก'ไว้ แล้วทำฟังชั่นต่อไปนี้
        //เมื่อaccตัวที่ i เกิดการคลิกจะให้ทำฟังชั่นด้านล่าง
        acc[i].addEventListener("click", function () {

            //สร้างตัวแปรใหม่มา เก็บค่า element ตัวถัดไปจาก this (this ในที่นี้คือ acc[i]และค่าที่เก็บคือ div class="sub_p")
            let sub_p = this.nextElementSibling;

            //ถ้าตัว sub_p มีค่า maxheight อยู่(เช่นมีค่า10px ไม่นับค่า0pxหรือค่าnull)
            //ให้เปลี่ยนค่า maxheight เป็นnull
            //ลบ .active ออกไปจาก this(ซึ่งในที่นี้คือ acc[i])
            if (sub_p.style.maxHeight) {
                sub_p.style.maxHeight = null;
                this.classList.remove("active");//มีเพื่อในกรณี กดตัวเดิมแล้ว.active:after ยังไม่หายไป

                //สร้างตัวแปร ผูกค่ากับตัว class sub_header ทุกตัวในที่นี้คือ 2 (0,1)
                //วนลูปเพื่อเข้าถึงค่า active[i] ทุกตัวแล้วทำต่อไปนี้
                //ลบ class active ออก 
                //element ตัวถัดไป แก้ไขค่า maxheight เป็น null
            } else {

                let active = document.querySelectorAll('.sub_header');
                for (let a = 0; a < active.length; a++) {
                    active[a].classList.remove("active");
                    active[a].nextElementSibling.style.maxHeight = null;
                }
                //เปลี่ยนให้ this (acc[i] เป็นค่า active)
                //เปลี่ยน maxheight ให้มีค่าเท่ากับ scrollheight (scrollheight ในที่นี้มีค่าเท่ากับความสูง สูงสุดของ element)
                this.classList.toggle("active");
                sub_p.style.maxHeight = sub_p.scrollHeight + "px";

            }
        });

    }
}

function test() {

    let index = 0;

    document.addEventListener('keydown', function (e) {


        if (e.key === 'ArrowUp') {

            // Handle Arrow Up key press
            console.log('Arrow Up key pressed');

            //
            index = (index - 1 + acc.length) % acc.length;
        } else if (e.key === 'ArrowDown') {
            // Handle Arrow Down key press
            console.log('Arrow Down key pressed');

            //
            index = (index + 1) % acc.length;
        }

        acc[index].focus();




    });
}

test();
Start_Acc();


