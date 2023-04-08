export function loginService(param, callback){
    console.log('params', param)
    const xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://69.48.142.41/api/login?email='+param.email+'&password='+param.password, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = () => { 
    if (xhr.readyState == 4 && xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log('success');
        callback()
    }else if(xhr.readyState == 4 ){
        console.log('failed', xhr.status);

    }
    }
    xhr.send();
}