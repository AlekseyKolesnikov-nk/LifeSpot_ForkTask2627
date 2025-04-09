//alert("Javascript для страницы 'о проекте' подключен!")

/* Запрос пользовательского ввода и сохранение отзыва в объект */
function getReview() {
    // Создание объекта
    let review = {}

    // Сохранение свойства имени
    review["userName"] = prompt("Как Вас зовут ?")
    if (review["userName"] == null) {
        return
    }

    // Сохранение текста отзыва
    review["comment"] = prompt("Напишите свой отзыв")
    if (review["comment"] == null) {
        return
    }

    // Сохранение текущего времени
    review["date"] = new Date().toLocaleString()

    // Добавление на страницу
    writeReview(review)
}

/* Запись отзыва на страницу */
const writeReview = review => {
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['userName']}</b>  ${review['date']}</i></p>` +
        `<p>${review['comment']}</p>` +
        '</div>';
}