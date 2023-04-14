import axios from 'axios'


export const fetchCategories = async () => {
    const response = await axios.get('http://jservice.io/api/categories?count=6');
    const allCategories = response.data;
    for (var i = 0; i < allCategories.length; i++){
        console.log(allCategories[i].title)
    }
    return allCategories
}

// export const randomCategories = () => {
//     const categories = fetchCategories();
//     randomCategoriesArray = [];
//     for (var i = 0; i < 6; i++){
//         categories 
//     }

// }