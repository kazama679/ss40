document.getElementById('infoForm').addEventListener('submit', function(event){
    event.preventDefault();

    var info = {
        name: document.getElementById('name').value,
    };

    localStorage.setItem('info', JSON.stringify(info)); 

    document.getElementById('result').textContent = 'Đã lưu!'; 
}); 

window.onload = function(){
    var info = JSON.parse(localStorage.getItem('info'));
    if(info){ 
        document.getElementById('result').textContent = 'Name: ' + info.name;
    } 
};