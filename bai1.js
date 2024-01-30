document.getElementById('infoForm').addEventListener('submit', function(event){
    event.preventDefault();

    var info = {
        name: document.getElementById('fname').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value,
    };

    localStorage.setItem('info', JSON.stringify(info)); 

    document.getElementById('result').textContent = 'Đã lưu!'; 
}); 

window.onload = function(){
    var info = JSON.parse(localStorage.getItem('info'));
    if(info){ 
        document.getElementById('result').textContent = 'Name: ' + info.name + ', Age: ' + info.age + ', Email: ' + info.email;
    } 
}; 