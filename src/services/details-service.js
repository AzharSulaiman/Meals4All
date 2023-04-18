export function getDetailsApi(callback) {
    const xhr = new XMLHttpRequest();
    const id = localStorage.getItem('itemId')
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log('ddd', JSON.parse(xhr.response).data)
        callback(JSON.parse(xhr.response).data);
      }
    };
    // xhr.setRequestHeader('Bearer Token', value)
    xhr.open('GET', 'http://69.48.142.41/api/donations/'+id, true);
    xhr.setRequestHeader("Authorization", 'Bearer ' + localStorage.getItem('token'));
    xhr.send();
}