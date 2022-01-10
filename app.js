const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header= document.querySelector('.header.container');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});


document.addEventListener('scroll', () => {
   var scroll_postion = window.scrollY;
   if(scroll_postion > 25){
      header.style.backgroundColor = '#29323c'
   } else {
       header.style.backgroundColor = 'transparent'
   }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

function submitEmail(){
    document.getElementById("name").style.border="2px inset black";

    const name = document.getElementById("name").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message_content").value
    if(name.length === 0){
        document.getElementById("name").style.border="2px inset red";
        return
    }
    let MessageBody="Hello,\nMy name is "+name+",\n"+message;



    const aTag = document.createElement("a");
    aTag.href="mailto:abuhajer.hadeel@gmail.com?"+encodeURI("subject="+subject+"&body="+MessageBody);
    aTag.id="mailTotag"

    const body = document.querySelector("body").appendChild(aTag)
    document.getElementById("mailTotag").click()
}

