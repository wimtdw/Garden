//Обрезка слишком длинных названий
//Формирование списка статей и сортировка его по категориям

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 3) + "...";
    } else {
        return str;
    }
}
function trunc() {
    var cards = document.querySelectorAll(".card-text");
    for (var i = 0; i < cards.length; i++) {
        var str = cards[i].textContent;
        cards[i].textContent = truncate(str, 80);
    }
}
let articleCards = [
    { image: "images/mint.png", desc: "Вырастить мяту легко! Узнайте всё о видах и способах ухода.", category: "Растения" },
    { image: "images/26.jpg", desc: "Идеи для сада в жарком климате.", category: "Растения" },
    { image: "images/27.png", desc: "Августовские дела в саду.", category: "Блог" },
    { image: "images/28.png", desc: "Как понимание тени может украсить или испортить сад.", category: "Декор сада" },
    { image: "images/29.png", desc: "Как я готовлюсь к лету в моём саду.", category: "Блог" },
    { image: "images/30.png", desc: "Топ 10 книг о садоводстве по мнению садовода-эксперта.", category: "Досуг" },
    { image: "images/31.png", desc: "12 растений, чтобы отогнать насекомых (включая комаров).", category: "Растения" },
    { image: "images/32.png", desc: "На вкус и цвет: выбираем идеальные яблоки для сада.", category: "Растения" },
    { image: "images/33.png", desc: "Лекарственные сорняки: какие сорные травы обладают полезными свойствами.", category: "Растения" },
    { image: "images/34.png", desc: "Не любите тыкву? 10+ рецептов, которые изменят всё.", category: "Рецепты" },
    { image: "images/35.png", desc: "Как я вырастила многолетний кипрский базилик — советы по выращиванию и кулинарии.", category: "Растения" },
    { image: "images/36.png", desc: "Цикорий и его родственники: находка для пчел и салатов.", category: "Растения" },
    { image: "images/37.png", desc: "Забота о братьях меньших, или Как помочь полезным обитателям сада пережить зиму.", category: "Другое" },
    { image: "images/38.png", desc: "Шпаргалка на ноябрь — важные садово-огородные дела.", category: "Подготовка к зиме" },
    { image: "images/39.png", desc: "Рассада больше не нужна, или 4 варианта как сохранить перец на зиму.", category: "Растения" },
    { image: "images/40.png", desc: "Мульчирование осенью обязательно? Да, но есть нюанс!", category: "Подготовка к зиме" },
    { image: "images/41.png", desc: "5 обязательных шагов, чтобы картофель хранился долго и качественно.", category: "Другое" },
    { image: "images/42.png", desc: "Как правильно ухаживать за ежевикой осенью: все об обрезке и укрытии на зиму.", category: "Подготовка к зиме" },
    { image: "images/43.png", desc: "Спелая клубника зимой за 7 простых шагов: выращиваем ягоду дома круглый год.", category: "Растения" },
    { image: "images/44.png", desc: "Как быть с малиной осенью: уход за кустами для обильного урожая в следующем сезоне.", category: "Подготовка к зиме" },
    { image: "images/45.png", desc: "Идеальная слива для сада: как выбрать и не утонуть в море разнообразия?", category: "Растения" },
    { image: "images/46.png", desc: "Витаминные ягоды шиповника: какие собирать и как правильно высушить?", category: "Растения" },
    { image: "images/47.png", desc: "Не дайте белокрылке уничтожить урожай в теплице: чем бороться с вредителем.", category: "Вредители" },
    { image: "images/48.png", desc: "Непрекращающиеся дожди в саду: как спасти растения от переувлажнения?", category: "Другое" },
    { image: "images/49.png", desc: "Картофель без вредителей — избавляемся от колорадского жука, проволочника и тли", category: "Вредители" },
    { image: "images/50.png", desc: "Мемы про кабачки — дачный юмор о любимом овоще.", category: "Досуг" },
    { image: "images/51.png", desc: "Сила черемухи — используем способности дерева на максимум.", category: "Растения" },
    { image: "images/52.png", desc: "Надежные ловушки для насекомых-вредителей — 5 нетоксичных вариантов.", category: "Вредители" },
    { image: "images/53.png", desc: "Польза сухих цветов лаванды — 4 действенных рецепта для души и тела.", category: "Рецепты" },
    { image: "images/54.png", desc: "Минимизируем ущерб для сада после града и ветра: советы по уходу после стихии", category: "Другое" },
    { image: "images/55.png", desc: "Как подготовить контейнерный сад и освежить веранду растениями?", category: "Декор сада" },
    { image: "images/56.png", desc: "10 растений для придания красок осеннему саду.", category: "Растения" },
];
let articleCardsNow = [];
let categoriesBtns = document.querySelector(".categories-btn");
categoriesBtns.addEventListener("click", function (event) {
    if (event.target.classList.contains("cat")) {
        let categ = event.target.textContent;
        articleCardsNow = articleCards;
        let filteredCards = [];
        if (categ.toUpperCase() === "ВСЕ") {
            filteredCards = articleCardsNow;
        }
        else {
            for (let i of articleCardsNow) {
                if (i.category.toUpperCase() === categ.toUpperCase()) {
                    filteredCards.push(i);
                }
            }
        }
        displayArticleCards(filteredCards);
    }
}
);

function displayArticleCards(items) {
    let cardsContainer = document.querySelector(".cards-container");
    cardsContainer.innerHTML = "";
    items.forEach((item) => {
        let card = document.createElement("a");
        card.classList.add("card");
        card.href = "article.html"

        let itemImg = document.createElement("div");
        itemImg.classList.add("card-top");

        let img = document.createElement("img");


        let itemText = document.createElement("div");
        itemText.classList.add("card-bottom");

        let category = document.createElement("div");
        category.classList.add("category");
        category.textContent = item.category;

        let text = document.createElement("div");
        text.textContent = item.desc;
        text.classList.add("card-text");

        itemText.appendChild(category);
        itemText.appendChild(text);
        itemImg.appendChild(img);
        card.appendChild(itemImg);
        card.appendChild(itemText);
        cardsContainer.appendChild(card);
        img.src = item.image;
    });
    articleCardsNow = items;
    trunc();
}
displayArticleCards(articleCards);

