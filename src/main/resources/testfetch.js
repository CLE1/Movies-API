fetch("http://localhost:8080/movies", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    redirect: 'follow',
    body: JSON.stringify(["YOUR MOVIE ARRAY"])
}).then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
});