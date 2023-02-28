let items_s = document.querySelectorAll('.items-s')
let deatil_main_img = document.querySelector('#deatil-main-img')
let imgArr = []

items_s.forEach(element => {
    imgArr.push(element.querySelector('img').src);
});

const selectImg =(ele)=>{
    let getSrc = ele.querySelector('img').src
    deatil_main_img.src = getSrc 
}

console.log(imgArr);
let count = 0
setInterval(() => {


    deatil_main_img.src = imgArr[count]
    let load = document.querySelector('.load')
    load.querySelector('div').style="  animation: loader 1.7s infinite;"

    
    if(count == imgArr.length-1 ){
        count= 0
    }else{
        count++
    }

}, 2000);