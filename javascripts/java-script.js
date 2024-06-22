document.addEventListener("DOMContentLoaded", function() {
    // Получаем доступ к кнопке
    const button_cart = document.getElementsByClassName("to_cart");

    // Добавляем обработчик события клика
    button_cart[0].addEventListener("click", function() {
    // Изменяем текст кнопки
    button_cart[0].innerText = "В корзине!";
    });






    
    // КНОПКА КУПИТЬ -- ВЫЛЕЗАЕТ ФОРМА ДЛЯ ЗАПОЛНЕНИЯ
        const buy_modal = document.getElementsByClassName("buy_modal");
        const openModalBtn = document.getElementsByClassName("buy");
        const closeModalBtn = document.querySelector(".close");
    
        // Открыть модальное окно при клике на кнопку
        openModalBtn[0].addEventListener("click", function() {
            buy_modal[0].style.display = "block";
        });
    
        // Закрыть модальное окно при клике на крестик
        closeModalBtn.addEventListener("click", function() {
            buy_modal[0].style.display = "none";
        });
    
        // Закрыть модальное окно при клике вне его области
        window.addEventListener("click", function(event) {
        if (event.target == buy_modal[0]) {
            buy_modal[0].style.display = "none";
        }
        });
    
        // Отправка формы
        const form = document.getElementById("buy_myForm");
        form.addEventListener("submit", function(event) {
        event.preventDefault(); // Предотвращаем отправку формы
    
        // Здесь можно добавить код для отправки данных формы на сервер
        // alert("Форма отправлена!");
        buy_modal[0].style.display = "none"; // Закрываем модальное окно после отправки
        form.reset(); // Сбрасываем содержимое формы
        });
        

});

