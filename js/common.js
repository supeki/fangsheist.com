fetch('/html-common/navbar.html') 
.then(response => response.text()) 
.then(data => { 
    document.getElementById('myTopnav').innerHTML = data; 
}) 
.catch(error => console.error('Error loading navbar:', error)); 