import axios from 'axios'
import { useState } from 'react';

export const fetchCategories = async () => {
    const categoriesArray = [];
    try {
        const response = await axios.get('http://jservice.io/api/categories?count=6');
        const allCategories = response.data;
        for (var i = 0; i < allCategories.length; i++) {
            categoriesArray.push(allCategories[i].title)
        }
        // console.log(categoriesArray)
        return categoriesArray
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