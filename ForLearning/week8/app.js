
function resizeTab() {
    let tab = document.getElementsByClassName("tab")[0]
    let bar = document.getElementsByClassName("bar")[0]
    tab.style.height = bar.offsetHeight + "px"
}
resizeTab();

function moveTab() {
    let texts = document.querySelectorAll(".txt")
    texts.forEach(text => {
        text.addEventListener("click", function () {
            let tab = document.getElementsByClassName("tab")[0]
            tab.style.left = text.offsetLeft + "px"
            tab.style.width = text.offsetWidth + "px"
            let type = text.getAttribute("type")
            filterBlog(type)
        })
    })
}

moveTab()

function filterBlog(text_type) {
    let blogs = document.querySelectorAll(".blog")
    blogs.forEach(blog => {
        let blog_type = blog.getAttribute("type")
        blog.style.animation = "hide .25s linear forwards"
        setTimeout(function(){
            if (text_type == blog_type) {
                blog.style.display = "initial"
                blog.style.animation = "show .25s linear forwards"
            }
            else {
                blog.style.display = "none"
            }
            if(text_type == "all"){
                blog.style.display = "initial"
                blog.style.animation = "show .25s linear forwards"
            }
        }, 10)
    })
}

function aniHover(){
    let blogs = document.querySelectorAll(".blog")
    blogs.forEach(blog => {
        blog.addEventListener("mouseover", function(){
            let content = blog.getElementsByClassName("content")[0]
            content.style.top = "30%"
            content.style.height = "70%"
        })
        blog.addEventListener("mouseleave", function(){
            let content = blog.getElementsByClassName("content")[0]
            content.style.top = "80%"
            content.style.height = "70%"
        })
    })
}

aniHover()