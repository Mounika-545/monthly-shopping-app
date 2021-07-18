import axios from 'axios';

const URL = "http://localhost:8080/groceries";

class GroceryService {

    getGroceries() {
        return axios.get(URL);
    }

    createGroceryItem(item) {
        return axios.post(URL, item);
    }

    updateGrocery(groceryId, grocery) {
        return axios.patch(`${URL}/${groceryId}`, grocery);
    }

    deleteGrocery(groceryId) {
        return axios.delete(URL + '/' + groceryId);
    }
}

export default new GroceryService()