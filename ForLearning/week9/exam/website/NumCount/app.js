function numCount(){
    let blogs = document.querySelectorAll(".blog")
    blogs.forEach(blog => {
        let goal = Number(blog.getElementsByTagName("h1")[0].getAttribute("goal"))
        let plus = goal / 200;
        function repeat(){
            let text = Number(blog.getElementsByTagName("h1")[0].innerText)
            if(text < goal){
                blog.getElementsByTagName("h1")[0].innerText = text + plus
                setTimeout(repeat, 1)
            }
            else{
                blog.getElementsByTagName("h1")[0].innerText = goal
            }
        }
        repeat()
    })
}

function soloCount(){
    let blogs = document.querySelectorAll(".blog")[2]
    // blogs = 1
    function repeat(){
        let goal = Number(blogs.getElementsByTagName("h1")[0].getAttribute("goal"))
        let plus = Math.floor(goal / 200)
        let text = Number(blogs.getElementsByTagName("h1")[0].innerText)
        if(text < goal){
            blogs.getElementsByTagName("h1")[0].innerText = text + plus
            setTimeout(repeat, 1)
        }
        else{
            blogs.getElementsByTagName("h1")[0].innerText = goal
        }
    }
    repeat()
}

soloCount()