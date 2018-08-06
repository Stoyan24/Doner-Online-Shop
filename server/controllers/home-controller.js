const productApi = require('../api/product');


module.exports = {
    index: async (req, res) => {
        const products = await productApi.getAll();

        return res.render('home/index', {products})
    },
    about: (req, res) => {
        res.render('home/about')
    }
};
