function toggleMenu(id) {
    var menu = document.getElementById(id);
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

function loadContent(url) {
    var mainContent = document.getElementById('mainContent');
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            mainContent.innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}

function sendData() {
    var fullName = document.getElementById('fullName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;

    var data = `ФИО: ${fullName}%0AНомер телефона: ${phoneNumber}`;
    
    var xhr = new XMLHttpRequest();

    var url = 'https://api.telegram.org/bot6793883330:AAHfIR0AZ5gdtWSOuACe2_WQ3WlPVn3MajQ/sendMessage?chat_id=961697802&text=' + data;
    
    xhr.open('GET', url, true);
    xhr.send();
    
    alert('Данные отправлены в Telegram!');
}