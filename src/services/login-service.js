export function loginService(param, callback){
    const xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://69.48.142.41/api/login?email='+param.email+'&password='+param.password, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = () => { 
    if (xhr.readyState == 4 && xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        localStorage.setItem("token", JSON.parse(xhr.response).data.token);
        localStorage.setItem("name", JSON.parse(xhr.response).data.name);
        localStorage.setItem("email", JSON.parse(xhr.response).data.email);
        callback()
    }else if(xhr.readyState == 4 ){

    }
    }
    xhr.send();
}