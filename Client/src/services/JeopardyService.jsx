import axios from 'axios'


export const fetchCategories = async () => {
    const selectedCategories = []
    try {
        const response = await axios.get('http://jservice.io/api/categories?count=1000');
        const allCategories = response.data;
        const randomCatArray = randomCats(allCategories.length)
        console.log(randomCatArray)
        for (var i = 0; i < randomCatArray.length; i++){
            selectedCategories.push(allCategories[randomCatArray[i]])
        }
        return selectedCategories
    } catch (error) {
        console.log(error)
    }

}

const randomCats = (number) => {
    let randomCatArray = [];
    for (var i = 0; i < 6; i++){
        const randomNumber = getRandomInt(number);
        if (randomCatArray.includes(randomNumber)) { 
            i--;
        }
        else {
            randomCatArray.push(randomNumber)
        }
    }
    return randomCatArray
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export const getClues = async (category_id) => {
    try {
        const response = await axios.get('http://jservice.io/api/clues?category=' + category_id);
        return response.data;
    }
    catch (error) {
        console.log(error)
    }
} 