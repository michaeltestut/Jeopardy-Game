import axios from 'axios'


export const fetchCategories = async () => {
    const response = await axios.get('http://cluebase.lukelav.in/categories');
    return response.data;
}