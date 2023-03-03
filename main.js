function pizza_list() {
    let food_list = document.querySelector(".food-list")
    food_list.innerHTML = ""

    for (i = 1; i < 6; i++) {

        let food_card = document.createElement('div')
        food_card.setAttribute('class', 'food-card')

        let food_pic = document.createElement('div')
        food_pic.setAttribute('class', `food-pic-${i} food-pic`)
        let food_pic_img = document.createElement('img')
        food_pic_img.setAttribute('src', `./img/pizza${i}.jpg`)
        food_pic_img.setAttribute('alt', 'food')
        food_pic_img.setAttribute('width', '100%')
        food_pic_img.setAttribute('height', '100%')
        food_pic.appendChild(food_pic_img)

        let food_text = document.createElement('div')
        food_text.setAttribute('class', 'food-text')
        food_text.innerHTML = "Pizza"

        let food_price = document.createElement('div')
        food_price.setAttribute('class', 'food-text food-price')
        food_price.innerHTML = "$5.99"

        food_card.appendChild(food_pic)
        food_card.appendChild(food_text)
        food_card.appendChild(food_price)

        food_list.appendChild(food_card)
    }
}

function hamburger_list() {
    let food_list = document.querySelector(".food-list")
    food_list.innerHTML = ""

    for (i = 1; i < 7; i++) {

        let food_card = document.createElement('div')
        food_card.setAttribute('class', 'food-card')

        let food_pic = document.createElement('div')
        food_pic.setAttribute('class', `food-pic-${i} food-pic`)
        let food_pic_img = document.createElement('img')
        food_pic_img.setAttribute('src', `./img/ham${i}.jpg`)
        food_pic_img.setAttribute('alt', 'food')
        food_pic_img.setAttribute('width', '100%')
        food_pic_img.setAttribute('height', '100%')
        food_pic.appendChild(food_pic_img)

        let food_text = document.createElement('div')
        food_text.setAttribute('class', 'food-text')
        food_text.innerHTML = "Hamburger"

        let food_price = document.createElement('div')
        food_price.setAttribute('class', 'food-text food-price')
        food_price.innerHTML = "$3.99"

        food_card.appendChild(food_pic)
        food_card.appendChild(food_text)
        food_card.appendChild(food_price)

        food_list.appendChild(food_card)
    }
}


function misc_list() {
    let food_list = document.querySelector(".food-list")
    food_list.innerHTML = ""

    for (i = 1; i < 9; i++) {

        let food_card = document.createElement('div')
        food_card.setAttribute('class', 'food-card')

        let food_pic = document.createElement('div')
        food_pic.setAttribute('class', `food-pic-${i} food-pic`)
        let food_pic_img = document.createElement('img')
        food_pic_img.setAttribute('src', `./img/salad${i}.jpg`)
        food_pic_img.setAttribute('alt', 'food')
        food_pic_img.setAttribute('width', '100%')
        food_pic_img.setAttribute('height', '100%')
        food_pic.appendChild(food_pic_img)

        let food_text = document.createElement('div')
        food_text.setAttribute('class', 'food-text')
        food_text.innerHTML = "Salad"

        let food_price = document.createElement('div')
        food_price.setAttribute('class', 'food-text food-price')
        food_price.innerHTML = "$1.99"

        food_card.appendChild(food_pic)
        food_card.appendChild(food_text)
        food_card.appendChild(food_price)

        food_list.appendChild(food_card)
    }
}