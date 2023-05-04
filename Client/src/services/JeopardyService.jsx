import axios, { all } from 'axios'

export const fetchCategories = async () => {
    const categoriesArray = [];
    try {
        const response = await axios.get('http://jservice.io/api/categories?count=6');
        const allCategories = response.data;
        // for (var i = 0; i < allCategories.length; i++) {
        //     if (categoriesArray.length < 6) {
        //         categoriesArray.push(allCategories[i].title)
        //     }
        // }
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