export function loginService(param, callback){
    console.log('sdad')
    const xhr = new XMLHttpRequest();
    xhr.open("POST", '/server', true);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = () => { 
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // Request finished. Do processing here.
        callback()
    }else{
        alert('Something went wrong');
    }
    }
    xhr.send("foo=bar&lorem=ipsum");
}