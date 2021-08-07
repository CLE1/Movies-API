
//post
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


//delete
fetch("http://localhost:8080/movies", {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
    redirect: 'follow',
    body: JSON.stringify(11)
}).then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
});