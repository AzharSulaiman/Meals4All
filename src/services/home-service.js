export function getHomeDataApi(callback) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        callback(JSON.parse(xhr.response).data);
      }
    };
    // xhr.setRequestHeader('Bearer Token', value)
    xhr.open('GET', 'http://69.48.142.41/api/donations', true);
    xhr.setRequestHeader("Authorization", 'Bearer ' + localStorage.getItem('token'));
    xhr.send();
}

export function requestService(param, callback){
  const xhr = new XMLHttpRequest();
  xhr.open("POST", 'http://69.48.142.41/api/donations/requests', true);
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

export function searchService(param, callback){
  const xhr = new XMLHttpRequest();
  xhr.open("POST", 'http://69.48.142.41/api/donations/search', true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.setRequestHeader("Authorization", 'Bearer ' + localStorage.getItem('token'));


  xhr.onreadystatechange = () => { 
  if (xhr.readyState == 4 && xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // Request finished. Do processing here.
      callback(JSON.parse(xhr.response).data);
  }else if(xhr.readyState == 4){
      alert('Something went wrong');
  }
  }
  xhr.send('search_keyword='+param.searchTxt);
}

export function filterService(param, callback){
  const xhr = new XMLHttpRequest();
  xhr.open("POST", 'http://69.48.142.41/api/donations/filter', true);
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
  xhr.send('filter_medium='+param.filterVal);
}
  