//รับค่าจากหน้าเว็บ
let acc = document.getElementsByClassName("sub_header");

function Accordion() {

    //วนลูปเท่ากับจำนวนของ class 'sub_header' ในที่นี้คือ 4 (0,1,2,3)
    for (let i = 0; i < acc.length; i++) {

        //เมื่อมี การคลิกที่ตัว[i]จะทำฟังชั่นนี้
        acc[i].addEventListener("click", function () {

            //สร้างตัวแปรมา เก็บค่า element ตัวถัดไปจาก this (this ในที่นี้คือ acc[i]ที่คลิก)
            let sub_p = this.nextElementSibling;

            //ถ้ากดตัวเดิม
            //ถ้าตัว sub_p เปิดอยู่ (เช่นมีค่า maxheight ที่10px)
            //ให้เปลี่ยนค่า maxheight เป็นnull
            //ลบ .active ออกไปจาก acc[i]ที่คลิก
            if (sub_p.style.maxHeight) {
                sub_p.style.maxHeight = null;
                this.classList.remove("active");//มีไว้เพื่อแก้ อาการกดตัวเดิมซ้ำ.active:after ยังไม่หายไป

            }
            //ถ้ากดตัวใหม่
            else {
                //ปิดตัวที่ยัง active อยู่ก่อนหน้านี้
                for (let a = 0; a < acc.length; a++) {
                    acc[a].classList.remove("active");
                    acc[a].nextElementSibling.style.maxHeight = null;
                }

                //เพิ่ม active และเพิ่ม maxHeight ให้ sub_p แสดงออกมา
                this.classList.toggle("active");
                sub_p.style.maxHeight = sub_p.scrollHeight + "px";
                //เปลี่ยนให้ this (acc[i] เป็นค่า active)
                //เปลี่ยน maxheight ให้มีค่าเท่ากับ scrollheight (scrollheight ในที่นี้มีค่าเท่ากับความสูง สูงสุดของ element)

            }


        });

    }
}
//ฟังชั่น ควบคุมหัวข้อด้วยปุ่มขึ้น-ลง
function focus_item_UpDown() {

    //ตัวแปร ตัวแทน ตำแหน่งที่จะfocus 
    let index = -1;

    //เมื่อมีการกดปุ่ม ให้ทำฟังชั่นและรับค่ามาใส่ใน parameter e
    document.addEventListener('keydown', function (e) {

        //ถ้า e มีชนิดข้อมูลและค่าข้อมูลต้องกับ ปุ่มขึ้น
        if (e.key === 'ArrowUp') {

            /* // log ออกมา
            console.log('กดปุ่ม Arrow Up แล้ว '); */

            //ลดค่าindex เช่น(3 - 1 +4) % 4(หารเอาเศษ) = indexที่จะfocusคือ 2
            index = (index - 1 + acc.length) % acc.length;
            //%acc.length จะทำให้ index วนกลับไปยังแรกและตัวสุดท้ายของ array ในกรณีที่ index เกินขอบเขต.

        }
        //ถ้า e มีชนิดข้อมูลและค่าข้อมูลต้องกับ ปุ่มลง
        else if (e.key === 'ArrowDown') {
            /* // log ออกมา
            console.log('กดปุ่ม Arrow Down แล้ว'); */

            //เพิ่มค่าindex เช่น (-1 + 1) %4 = indexที่จะfocusคือ 0 
            index = (index + 1) % acc.length;
        }
        //focus ตัวaccในตัวแหน่งindex
        acc[index].focus();

    });
}

//เรียกใช้ฟังชั่น
focus_item_UpDown();
Accordion();

