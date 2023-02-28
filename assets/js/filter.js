let filter_aside = document.querySelector('#filter-aside')

document.getElementById('filter-btn').onclick = () => {
    if (filter_aside.style.display == "block") {
        filter_aside.style = "display:none !important;"
    }
    else {
        filter_aside.style = "display:block !important;"
    }
}

document.querySelector('.body-main').onresize = ()=>{
    if(window.innerWidth < "991"){
        filter_aside.style = "display:none !important;"
    }
    else{
        filter_aside.style = "display:block !important;"
    }
}


let arrange = document.querySelectorAll('.arrange')

document.getElementById('3col').onclick =()=>{
    
    for (let i = 0; i < arrange.length; i++) {
        arrange[i].classList.add("col-lg-4");
        arrange[i].classList.add("col-6");
        arrange[i].classList.remove("col-lg-3");
        arrange[i].classList.remove("col-12");
        arrange[i].classList.remove("col-lg-12");
        arrange[i].classList.remove("listview");
        document.getElementById('4col').src="assets/images/col-2-stroke.png"
        document.getElementById('3col').src="assets/images/col-3-stroke.png"
    }
   
}
document.getElementById('4col').onclick =()=>{
    
    for (let i = 0; i < arrange.length; i++) {
        arrange[i].classList.add("col-lg-3");
        arrange[i].classList.add("col-6");
        arrange[i].classList.remove("col-lg-4");
        arrange[i].classList.remove("col-lg-12");
        arrange[i].classList.remove("col-12");
        arrange[i].classList.remove("listview");
        document.getElementById('4col').src="assets/images/col-2.png"
        document.getElementById('3col').src="assets/images/col-3.png"
    }
   
}
document.getElementById('12col').onclick =()=>{
    
    for (let i = 0; i < arrange.length; i++) {
        arrange[i].classList.add("col-12");
        arrange[i].classList.add("col-lg-12");
        arrange[i].classList.add("listview");
        arrange[i].classList.remove("col-lg-3");
        arrange[i].classList.remove("col-6");
        arrange[i].classList.remove("col-md-4");
        document.getElementById('4col').src="assets/images/col-2.png"
        document.getElementById('3col').src="assets/images/col-3.png"
    }
   
}

let search_result = document.querySelector('.search-result')
search_result.style.display="none"

const search =(e)=>{
    if(e.value !=""){
        search_result.style.display="block"
    }
    else{
        search_result.style.display="none"
    }
}