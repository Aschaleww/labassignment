const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();


router.post('/checkout', productController.checkout);
//Rest Api
router.get('/', productController.getAll);
//router.get('/productId' , productController.getById);

router.post('/', productController.save);
router.delete('/:productId', productController.deleteById);
router.put('/:productId', productController.edit)

router.use((req, res, next) => {
    const auth = req.headers.authorization;
    // console.log();
    const token = auth.split(' ')[1]
    if(token === 'null'){
        res.json({error: 'No Access Token'});
    } else {
        req.user = token.split('-')[0];
        next();
    }
})
module.exports = router;