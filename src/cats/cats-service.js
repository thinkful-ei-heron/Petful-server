const { cats } = require('../catData')

const CatsService = {
    getAllCats() {
        return cats
    }

    getCatById(id) {
        return cats.find((cat) => cat.id === id)
    }

    deleteCat(id) {
        return cats.filter((cat) => cat.id !== id)
    }

}

module.exports = CatsService;