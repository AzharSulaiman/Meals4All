export function donateService(param, callback){
    const xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://69.48.142.41/api/donations', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Authorization", 'Bearer ' + localStorage.getItem('token'));


    xhr.onreadystatechange = () => { 
    if (xhr.readyState == 4 && xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // Request finished. Do processing here.

        callback()
    }else if(xhr.readyState == 4){
        alert('Something went wrong');

    }
    }
    xhr.send('title='+param.title+'&description='+param.description+'&category='+param.category+'&availability='+param.availability+'&long='+param.long+'&lat='+param.lat+'&image='+param.image+'&address='+param.address);
}

export function getCategoryDataApi(callback) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        callback(JSON.parse(xhr.response).data);
      }
    };
    // xhr.setRequestHeader('Bearer Token', value)
    xhr.open('GET', 'http://69.48.142.41/api/categories', true);
    xhr.setRequestHeader("Authorization", 'Bearer ' + localStorage.getItem('token'));
    xhr.send();
}
  