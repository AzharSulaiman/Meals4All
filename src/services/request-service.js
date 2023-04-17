export function getRequestedDataApi(callback) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        callback(JSON.parse(xhr.response));
      }
    };
    xhr.open('GET', 'http://69.48.142.41/api/requests/display', true);
    xhr.setRequestHeader("Authorization", 'Bearer ' + localStorage.getItem('token'));
    xhr.send();
}

export function requestAcceptService(param, callback){
    const xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://69.48.142.41/api/requests/accept', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Authorization", 'Bearer ' + localStorage.getItem('token'));
  
  
    xhr.onreadystatechange = () => { 
    if (xhr.readyState == 4 && xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // Request finished. Do processing here.
        alert(xhr.responseText);
  
        callback()
    }else if(xhr.readyState == 4){
        alert('Something went wrong');
    }
    }
    xhr.send('donation_id='+param.itemId);
  }

  export function requestRejectService(param, callback){
    const xhr = new XMLHttpRequest();
    xhr.open("POST", 'http://69.48.142.41/api/requests/reject', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Authorization", 'Bearer ' + localStorage.getItem('token'));
  
  
    xhr.onreadystatechange = () => { 
    if (xhr.readyState == 4 && xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // Request finished. Do processing here.
        alert(xhr.responseText);
  
        callback()
    }else if(xhr.readyState == 4){
        alert('Something went wrong');
    }
    }
    xhr.send('donation_id='+param.itemId);
  }

  export function requestUpdateService(param, callback){
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", 'http://69.48.142.41/api/donations/'+param.itemId, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Authorization", 'Bearer ' + localStorage.getItem('token'));
  
  
    xhr.onreadystatechange = () => { 
    if (xhr.readyState == 4 && xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // Request finished. Do processing here.
        alert(xhr.responseText);
  
        callback()
    }else if(xhr.readyState == 4){
        alert('Something went wrong');
    }
    }
    xhr.send('availability='+0);
  }