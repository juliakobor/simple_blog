const apiURL = "https://jsonplaceholder.typicode.com/posts"

let fetchPromise = fetch(apiURL + "/1");

fetchPromise
    .then(response => {
        if (!response.ok) throw Error(response.statusText)
        else return response.json()
    })
    .then(data => {
        console.log(data)
        createPost(data)
    })
    .catch(error => {
        console.log("error:", error)
    });

function createPost(data) {
        document.getElementById("post_container").innerHTML = "<header>" + data.title + "<a class='post__header_link' href='index.html'>" + "<i class='fas fa-arrow-left'></i>"+ "All posts" + "</a>" +"</header>" + "<p>" + data.body + "</p>";
    }