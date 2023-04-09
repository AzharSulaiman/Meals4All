export function registerService(param, callback){
    const xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://69.48.142.41/api/register', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = () => { 
    if (xhr.readyState == 4 && xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // Request finished. Do processing here.
    console.log('success');

        callback()
    }else if(xhr.readyState == 4){
        alert('Something went wrong');
    console.log('failed')

    }
    }
    xhr.send('name='+param.name+'&email='+param.email+'&password='+param.password+'&c_password='+param.c_password);
}