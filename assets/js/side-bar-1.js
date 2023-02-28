let bars = document.querySelector('#bars')
let login_aside = document.querySelector('#login-aside')
let login_close = document.querySelector('#login-close')

bars.onclick = () => {
    login_aside.style = "display:flex; animation: animtesidebar .8s forwards;"
}
login_close.onclick = () => {
    login_aside.style = "display:none;"
}

let password_btn = document.querySelector('#password-btn')
let password_btn_1 = document.querySelector('#password-btn-1')



let coun1 = 0


password_btn.onclick = ()=>{
    if(coun1 == 1){
        coun1=0
        password_btn.innerHTML=`<i class="fas fa-eye"></i>`
        password_btn.parentElement.querySelector('input').type="password"
    }
    else{
        password_btn.innerHTML=`<i class="fas fa-eye-slash"></i>`
        password_btn.parentElement.querySelector('input').type="text"
        coun1 = 1
    }
}
let coun2= 0
password_btn_1.onclick = ()=>{
    if(coun2 == 1){
        coun2=0
        password_btn_1.innerHTML=`<i class="fas fa-eye"></i>`
        password_btn_1.parentElement.querySelector('input').type="password"
    }
    else{
        password_btn_1.innerHTML=`<i class="fas fa-eye-slash"></i>`
        password_btn_1.parentElement.querySelector('input').type="text"
        coun2 = 1
    }
}

