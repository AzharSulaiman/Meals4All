export function registerService(param, callback){
    console.log('register')
    const xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://69.48.142.41/api/register', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = () => { 
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // Request finished. Do processing here.
    console.log('success');

        callback()
    }else{
        alert('Something went wrong');
    console.log('failed')

    }
    }
    xhr.send("name=Az&email=azharsulaiman2@gmail.com&password=abc@321&c_password=abc@321");
}