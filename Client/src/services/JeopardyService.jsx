import axios from 'axios'

export const fetchCategories = async () => {
    try {
        const response = await axios.get('http://jservice.io/api/categories?count=6');
        const allCategories = response.data;
        return allCategories
    } catch (error) {
        console.log(error)
    }

}

// export const randomCategories = () => {
//     const categories = fetchCategories();
//     randomCategoriesArray = [];
//     for (var i = 0; i < 6; i++){
//         categories 
//     }

// }