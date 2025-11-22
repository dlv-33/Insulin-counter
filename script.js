class Product{
    constructor(name, value){
        this.name = name
        this.value = value
    }
}

const products = {
    
    "Milk" : new Product("Молоко", 4.7),
    "Prunes" : new Product("Чернослив", 57.5),
    "Potato" : new Product("Картошка", 16.3),
    "Cream 20%" : new Product("Сливки 20%", 1.6),
    "Kefir" : new Product("Кефир", 4),
    "Sour milk" : new Product("Простокваша", 4.1),
    "Fermented baked milk" : new Product("Ряженка", 4.2),
    "Cream 35%" : new Product("Сливки 35%", 1.3),
    "Yogurt 1%" : new Product("Йогурт 1%", 5.9),
    "Yogurt 3.2%" : new Product("Йогурт 3.2%", 3.5),
    "Fruit yogurt 1.5%" : new Product("Фруктовый йогурт 1.5%", 14.3),
    "Fruit yogurt 3.2%" : new Product("Фруктовый йогурт 3.2%%", 8.5),
    "Sour cream 15%" : new Product("Сметана 15%", 0.7),
    "Sour cream 30%" : new Product("Сметана 30%", 0.6),
    "Curd" : new Product("Творог", 3),
    "Glazed cheese" : new Product("Глазированный сырок", 32),
    "Cheese" : new Product("Сыр", 0),
    "Condensed milk": new Product("Молоко сгущенное", 55),
    "Cocoa with condensed milk": new Product("Какао со сгущенным молоком и сахаром", 51.6),
    "Dumplings with cottage cheese": new Product("Вареники с творогом", 13.8),
    "Casserole": new Product("Запеканка", 14.2),
    "Syrniki": new Product("Сырники", 18.2),
    "Ice cream": new Product("Пломбир", 20.4),
    "Cod liver canned": new Product("Печень трески (консервы)", 1.2),
    "Mussels": new Product("Мидии", 3),
    "Sliced loaf": new Product("Батон нарезной", 51),
    "Borodinsky bread": new Product("Хлеб бородинский", 40),
    "Riga bread": new Product("Хлеб рижский", 51),
    "Ukrainian bread": new Product("Хлеб украинский", 48),
    "Wheat flour": new Product("Мука пшеничная", 70),
    "Boiled pasta": new Product("Макароны отварные", 20),
    "Homemade noodles": new Product("Лапша домашняя", 60.1),
    "Butter bun": new Product("Булочка сдобная", 56),
    "Butter bagels": new Product("Баранки сдобные", 60),
    "Simple drying": new Product("Сушки простые", 70),
    "Bagel": new Product("Бублик", 57),
    "Galettes": new Product("Галеты", 65),
    "Sweet straws": new Product("Соломка сладкая", 69),
    "Doctor's breadsticks": new Product("Хлебцы докторские", 46),
    "Crackers": new Product("Крекеры", 62.7),
    "Almond cookies": new Product("Печенье миндальное", 67),
    "Sugar cookies": new Product("Печенье сахарное", 74),
    "Butter cookies": new Product("Печенье сдобное", 69),
    "Gingerbread": new Product("Пряники заварные", 75),
    "Vatrushka": new Product("Ватрушка", 38),
    "Milk soup with pasta": new Product("Суп молочный с макаронами", 8),
    "Meat solyanka": new Product("Солянка сборная мясная", 1.3),
    "Rice soup": new Product("Суп рисовый", 6.2),
    "Pea puree soup": new Product("Суп-пюре из гисовой крупы", 7.7),
    "Kharcho soup with meat": new Product("Суп харчо с мясом", 5.5),
    "Pearl barley soup with mushrooms": new Product("Суп перловый с грибами", 6.4),
    "Millet soup with meat": new Product("Суп пшенный с мясом", 6.4),
    "Bean soup": new Product("Суп фасолевый", 7),
    "Spinach puree soup": new Product("Суп-пюре из шпината", 4),
    "Sorrel soup": new Product("Щи из щавеля", 1.8),
    "Fresh cabbage and potato soup": new Product("Суп из свежей капусты и картофеля", 5.4),
    "Fresh cabbage soup": new Product("Щи из свежей капусты", 2.5),
    "Sauerkraut soup": new Product("Щи из квашеной капусты", 1.5),
    "Beef liver": new Product("Печень говяжья", 5.3),
    "Pork liver": new Product("Печень свиная", 4.7),
    "Beef kidneys": new Product("Почки говяжьи", 1.9),
    "Pork kidneys": new Product("Почки свиные", 2.7),
    "Beef heart": new Product("Сердце говяжье", 2),
    "Pork heart": new Product("Сердце свиное", 2.6),
    "Beef tongue": new Product("Язык говяжий", 2.2),
    "Chicken cutlets": new Product("Котлеты куриные", 13.5),
    "Fried chicken": new Product("Курица жареная во фритюре", 13.3),
    "Chicken stewed with vegetables": new Product("Курица тушенная с овощами", 9.6),
    "Chicken meatballs": new Product("Фрикадельки куриные", 7.8),
    "Turkey cutlets": new Product("Котлеты из индейки", 8.7),
    "Stewed lamb": new Product("Баранина тушеная", 3.6),
    "Lamb cutlets": new Product("Котлеты из баранины", 12.9),
    "Lamb ragout": new Product("Рагу из баранины", 10.1),
    "Lamb schnitzel": new Product("Шницель из баранины", 9.1),
    "Beef azu": new Product("Азу из говядины", 10.2),
    "Beef stroganoff": new Product("Бефстроганов из говядины", 5.9),
    "Stewed beef": new Product("Говядина тушеная", 3.3),
    "Beef cutlets": new Product("Котлеты из говядины", 13),
    "Meat roll with onion and egg": new Product("Рулет мясной с луком и яйцом", 8.1),
    "Beef sausages": new Product("Сардельки говяжьи", 1.3),
    "Beef wieners": new Product("Сосиски говяжьи", 0.8),
    "Beef meatballs": new Product("Тефтели из говядины", 9.6),
    "Beef schnitzel": new Product("Шницель из говядины", 9),
    "Borscht": new Product("Борщ", 6.5),
    "Kulebyaka with fish and rice": new Product("Кулебяка с рыбой и рисом", 31.8),
    "Pancakes": new Product("Блины", 32.6),
    "Dumplings with cottage cheese": new Product("Вареники с творогом", 16.2),
    "Oladi": new Product("Оладьи", 31.6),
    "Fried pies with cabbage": new Product("Пирожки жареные с капустой", 28.8),
    "Rice casserole": new Product("Запеканка рисовая", 50.4),
    "Rice casserole with cottage cheese": new Product("Запеканка рисовая с творогом", 67.9),
    "Boiled peas": new Product("Горох отварной", 20.4),
    "Green peas canned": new Product("Горошек зеленый (консервы)", 6.5),
    "Boiled peas with smoked brisket": new Product("Горох отварной с копченой грудинкой", 50.7),
    "String beans canned": new Product("Фасоль стручковая (консервы)", 2.4),
    "Olives canned": new Product("Оливки (консервы)", 19),
    "Stewed cabbage": new Product("Капуста тушеная", 9.2),
    "Fried cabbage": new Product("Капуста жареная", 4.2),
    "Vegetable cabbage rolls": new Product("Голубцы овощные", 9.7),
    "Cabbage casserole": new Product("Запеканка капустная", 13.5),
    "Cabbage cutlets": new Product("Котлеты капустные", 15.3),
    "Sauerkraut": new Product("Капуста квашенная", 3),
    "Fried cauliflower": new Product("Капуста цветная жареная", 3),
    "Fried onion": new Product("Лук жареный", 13.8),
    "Vegetable okroshka": new Product("Окрошка овощная", 17),
    "Boiled potatoes": new Product("Картофель отварной", 15.8),
    "Fried potatoes": new Product("Картофель жареный", 18.6),
    "Mashed potatoes": new Product("Картофельное пюре", 14.7),
    "Potato zrazy": new Product("Зразы картофельные", 20.3),
    "Vegetable ragout": new Product("Рагу овощное", 10.6),
    "Tomato paste canned": new Product("Томатная паста (консервы)", 19),
    "Fried zucchini": new Product("Кабачки жареные", 7.5),
    "Zucchini caviar": new Product("Икра кабачковая", 7.7),
    "Mushroom solyanka": new Product("Солянка грибная", 1.3),
    "Fried mushrooms": new Product("Грибы жареные", 1.2),
    "Mushrooms fried in sour cream sauce": new Product("Грибы жареные в сметанном соусе", 3.5),
    "Semolina porridge": new Product("Каша манная", 16.5),
    "Oatmeal porridge": new Product("Каша овсяная", 16),
    "Hercules porridge": new Product("Каша из хлопьев 'Геркулес'", 14.8),
    "Rice porridge": new Product("Каша рисовая", 25.8),
    "Buckwheat porridge": new Product("Каша гречневая", 14.7),
    "Pearl barley porridge": new Product("Каша перловая", 22.9),
    "Barley porridge": new Product("Каша ячневая", 15.4),
    "Millet porridge": new Product("Каша пшенная", 16.8),
    "Peanuts": new Product("Арахис", 9.9),
    "Walnuts": new Product("Грецкий", 11.1),
    "Cashews": new Product("Кешью", 22.5),
    "Almonds": new Product("Миндаль", 13),
    "Hazelnuts": new Product("Фундук", 9.4),
    "Lettuce": new Product("Салат", 2),
    "Green salad": new Product("Салат зеленый", 2.4),
    "White cabbage": new Product("Капуста белокочанная", 4.7),
    "Brussels sprouts": new Product("Капуста брюссельская", 3.1),
    "Kohlrabi cabbage": new Product("Капуста Кольраби", 7.9),
    "Red cabbage": new Product("Капуста краснокочанная", 5.1),
    "Cauliflower": new Product("Капуста цветная", 4.2),
    "Onion": new Product("Лук репчатый", 8.2),
    "Carrot": new Product("Морковь", 2.4),
    "Beetroot": new Product("Свекла", 8.8),
    "Radish": new Product("Редис", 3.4),
    "Black radish": new Product("Редька черная", 6.7),
    "Cucumbers": new Product("Огурцы", 1.9),
    "Tomatoes": new Product("Томаты", 3.8),
    "Eggplant": new Product("Баклажаны", 4.5),
    "Zucchini": new Product("Кабачки", 4.6),
    "Sweet pepper": new Product("Перец сладкий", 4.9),
    "Pumpkin": new Product("Тыква", 4.4),
    "Apricot": new Product("Абрикос", 9),
    "Dried apricots with pit": new Product("Урюк", 53),
    "Dried apricots": new Product("Курага", 51),
    "Cherry plum": new Product("Алыча", 8),
    "Cherry": new Product("Вишня", 10.6),
    "Peach": new Product("Персик", 9.5),
    "Plum": new Product("Слива", 9.6),
    "Dates": new Product("Финики", 70),
    "Sweet cherry": new Product("Черешня", 10.6),
    "Quince": new Product("Айва", 9),
    "Pear": new Product("Груша", 10.3),
    "Chokeberry": new Product("Рябина черноплодная", 10.9),
    "Apples": new Product("Яблоки", 9.8),
    "Pomegranate": new Product("Гранат", 14.5),
    "Fig": new Product("Инжир", 12),
    "Dried fig": new Product("Инжир сушеный", 58),
    "Kiwi": new Product("Киви", 8.1),
    "Persimmon": new Product("Хурма", 15.3),
    "Orange": new Product("Апельсин", 8.1),
    "Grapefruit": new Product("Грейпфрут", 6.5),
    "Lemon": new Product("Лимон", 3),
    "Mandarin": new Product("Мандарин", 7.5),
    "Pineapple": new Product("Ананас", 11.5),
    "Banana": new Product("Банан", 21),
    "Grapes": new Product("Виноград", 15.4),
    "Kishmish": new Product("Кишмиш", 65.8),
    "Strawberry": new Product("Земляника", 7.5),
    "Gooseberry": new Product("Крыжовник", 9.1),
    "Raspberry": new Product("Малина", 8.3),
    "Sea buckthorn": new Product("Облепиха", 5.7),
    "White currant": new Product("Смородина белая", 8),
    "Red currant": new Product("Смородина красная", 7.7),
    "Black currant": new Product("Смородина черная", 7.3),
    "Lingonberry": new Product("Брусника", 8),
    "Blueberry": new Product("Голубика", 6.6),
    "Blackberry": new Product("Ежевика", 4.4),
    "Cranberry": new Product("Клюква", 3.7),
    "Cloudberry": new Product("Морошка", 7.4),
    "Bilberry": new Product("Черника", 7.6),
    "Watermelon": new Product("Арбуз", 5.8),
    "Melon": new Product("Дыня", 7.4),
    "Sugar": new Product("Сахар", 100),
    "Caramel candy": new Product("Карамель леденцовая", 93),
    "Toffee": new Product("Ирис", 85),
    "Marmalade": new Product("Мармелад", 79),
    "Pastila": new Product("Пастила", 80),
    "Halva": new Product("Халва", 48),
    "Dark chocolate": new Product("Шоколад горький", 48),
    "Creamy chocolate": new Product("Шоколад сливочный", 53),
    "Milk chocolate": new Product("Шоколад молочный", 50),
    "Chocolate paste": new Product("Шоколадная паста", 56),
    "Fondant candies": new Product("Конфеты помадные", 70),
    "Chocolate candies": new Product("Конфеты шоколадные", 59),
    "Wafers with fat filling": new Product("Вафли с жировой начинкой", 62.5),
    "Wafers with fruit filling": new Product("Вафли с фруктовой начинкой", 77),
    "Puff pastry with cream": new Product("Пирожное слоеное с кремом", 49),
    "Sponge cake with cream": new Product("Пирожное бисквитное с кремом", 63),
    "Shortbread with cream": new Product("Пирожное песочное с кремом", 52),
    "Almond cake": new Product("Пирожное миндальное", 53),
    "Cream puff": new Product("Пирожное заварное с кремом (трубочка)", 48),
    "Sponge cake with fruit filling": new Product("Торт бисквитный с фруктовой начинкой", 61),
    "Puff cake": new Product("Торт слоеный", 42),
    "Almond cake": new Product("Торт миндальный", 44),
    "Apricot jam": new Product("Абрикосовый сок", 12.7),
    "Pineapple jam": new Product("Ананасовый сок", 11.8),
    "Orange jam": new Product("Апельсиновый сок", 13.2),
    "Grape jam": new Product("Виноградный сок", 16.3),
    "Cherry jam": new Product("Вишневый сок", 11.4),
    "Pomegranate jam": new Product("Гранатовый сок", 14.2),
    "Grapefruit jam": new Product("Грейпфрутовый сок", 7.9),
    "Peach jam": new Product("Персиковый сок", 16.5),
    "Plum jam": new Product("Сливовый сок", 15.2),
    "Apple jam": new Product("Яблочный сок", 10.1),
    "Carrot juice": new Product("Морковный сок", 12.6),
    "Tomato juice": new Product("Томатный сок", 2.9),
    "Tea with sugar": new Product("Чай с сахаром", 7),
    "Tea with lemon": new Product("Чай с лимоном", 6.8),
    "Tea with milk": new Product("Чай с молоком", 8.2),
    "Black coffee without sugar": new Product("Кофе черный без сахара", 0.4),
    "Coffee with milk": new Product("Кофе с молоком", 11.2),
    "Sweet carbonated drinks": new Product("Напитки сладкие газированные", 8.7)
    

}

const table = document.querySelector(".products")
const button = document.querySelector("button")
const header = document.querySelector("header")
const UglK_input = document.querySelector("#uglK")

let uglK = localStorage.getItem("uglK")
if (uglK){
    UglK_input.value = uglK
}

UglK_input.addEventListener("input",()=>{
    uglK = UglK_input.valueAsNumber
    localStorage.setItem("uglK", uglK)
    UpdateIns()
})

button.addEventListener("click", AddNewProductLine)

function getXE(){
    let cells = document.querySelectorAll(".cell")

    let sum = 0
    cells.forEach(cell => {
        let product = cell.querySelector("select").value
        let gramm = cell.querySelector("input").valueAsNumber


        if (gramm && gramm > 0)
            sum += gramm / 100 * products[product].value
    })
    let res = sum / 10 * uglK
    if (res)
        return res.toFixed(1)
    else return "НЕТ"
}

function UpdateIns(){
    header.innerHTML = `ИНСУЛИН : <span>${getXE()}</span>`
}

function AddNewProductLine(){
    let newDiv = document.createElement("div")
    newDiv.classList.add("cell")

    let newSelect = document.createElement("select")
    newSelect.setAttribute("name", "product")
    newSelect.id = "p" + table.childNodes.length
    newSelect.addEventListener("change", UpdateIns)

    Object.keys(products).forEach(element =>{
        let opt = document.createElement("option")
        opt.setAttribute("value", element)
        opt.textContent = products[element].name
        newSelect.appendChild(opt)
    })

    let newInput = document.createElement("input")
    newInput.setAttribute("type", "number")
    newInput.addEventListener("input", UpdateIns)

    newDiv.appendChild(newSelect)
    newDiv.appendChild(newInput)

    table.appendChild(newDiv)
}

AddNewProductLine()