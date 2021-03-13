let promisePost = new Promise((resolve, reject) => {

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.responseText);
            resolve(data);

        } else if (request.readyState === 4) {
            reject("nem sikerült lekérni az adatot!");
        }
    });

    request.open('GET', "https://jsonplaceholder.typicode.com/posts/1");
    request.send();
});


console.log(promisePost);
promisePost.then(data => {
    console.log("promise resolved", data);
});

promisePost.catch(error => {
    console.log("error on rejected", error);
});
