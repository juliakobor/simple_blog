let fetchPromise = fetch("https://jsonplaceholder.typicode.com/posts");

fetchPromise
    .then(response => {
        if (!response.ok) throw Error(response.statusText)
        else return response.json()
    })
    .then(data => {
        createPost(data)
    })
    .catch(error => {
        console.log("error:", error)
    });


function createPost(data) {
    data.forEach(item => {
        const post_template = "<article>" + "<h3>" + item.title + "</h3>" + "<p>" + item.body.slice(0, 100) + "</p>" + "<a href='post.html'>" + "Learn more" + "<i class='fas fa-arrow-right'></i>" + "</a>" + "</article>";
        document.getElementById("posts_container").innerHTML += post_template;
    })
}



