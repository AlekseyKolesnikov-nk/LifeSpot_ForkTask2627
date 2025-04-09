// Сессия теперь создается в общей области видимости и будет "захватываться" тремя функциями
let session = new Map();

// Вывод данных сессии в консоль
let sessionLog = function logSession()
{
    // Вывод в консоль
    for (let result of session)
    {
        console.log(result)
    }
}

// Сохранение данных сессии сразу при заходе пользователя на страницу
function handleSession()
{
    // Сохранение времени начала сессии
    session.set("startDate", new Date().toLocaleString())

    // Сохранение UserAgent
    session.set("userAgent", window.navigator.userAgent)
}

// Проверка возраста пользователя
function checkAge()
{
    session.set("age", prompt("Пожалуйста, введите Ваш возраст..."))

    if (session.get("age") >= 18)
    {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    else
    {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}

function filterContent()
{
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++)
    {
        let videoText = elements[i].querySelector(".video-title").innerText;
        if (!videoText.toLowerCase().includes(inputParseFunction()          // Захват переменной теперь происходит с помощью замыкания
            .toLowerCase()))
        {
            elements[i].style.display = 'none';
        }
        else
        {
            elements[i].style.display = 'inline-block';
        }
    }
}