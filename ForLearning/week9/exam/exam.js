window.onresize = function(){
    setOpCont()
    setTabSize()
}


async function setOpCont(){
    let cont = document.getElementsByClassName("op_container")[0];
    cont.style.height = window.innerHeight + "px";
}
setOpCont();

async function setTabSize(){
    let tab = document.getElementsByClassName("tab")[0];
    let height = document.getElementsByClassName("pj-bar")[0]
    let text = document.getElementsByClassName("tab-data")[0]
    tab.style.height = height.offsetHeight + "px";
    tab.style.width = text.offsetWidth + "px"
    tab.style.left = text.offsetLeft + "px"
}
setTabSize()

async function addClickEventTabPJ(){
    let tabs = document.querySelectorAll(".tab-data")
    tabs.forEach(tab => {
        tab.addEventListener("click", function(){
            data_type = Number(tab.getAttribute("tab-data-type"));
            showCate(data_type)
        })
    })
}
addClickEventTabPJ()

function showCate(type){
    let cates = document.querySelectorAll(".pj")
    cates.forEach(cate => {
        let cate_type = Number(cate.getAttribute("type"))
        cate.style.animation = "hide .1s linear forwards"
        setTimeout(() => {
            switch(type){
                case cate_type:
                    cate.style.display = "flex"
                    cate.style.animation = "show .1s linear forwards"
                    break;
                case 0:
                    cate.style.display = "flex";
                    cate.style.animation = "show .1s linear forwards"
                    break;
                default:
                    cate.style.display = "none"
                    break
            }
        }, 150);
    })
}

function addClickTabData(){
    let tabs = document.querySelectorAll(".tab-data")
    let bar = document.getElementsByClassName("tab")[0]
    tabs.forEach(tab => {
        tab.addEventListener("click", function(){
            bar.style.width = tab.offsetWidth + "px";   
            bar.style.left = tab.offsetLeft + "px"     
        })
    })
}
addClickTabData()