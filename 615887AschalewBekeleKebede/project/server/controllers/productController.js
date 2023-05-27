const Product = require('../models/product');
exports.save = (req, res, next) => {
    const addedProd = new Product(null, req.body.name,  req.body.price,req.body.image, req.body.stock).save();
    console.log(addedProd)
    res.status(201).json(addedProd);
}
exports.getAll = (req, res, next) => {
    res.status(200).json(Product.getAll());
}

exports.checkout = (req, res, next) => {
    Product.checkout(req.body);
    res.status(200).json({msg: "Success"})
}
exports.deleteById = (req, res, next) => {
    let data = Product.deleteById(req.params.productId);
    if (data) {
        res.status(200).json(data);
    }
    else {
        res.status(404).json({ message: "The is id is not present" });
    }
}
exports.edit = (req, res) => {
    const editedProd = new Product(req.params.productId, req.body.name,  req.body.price, req.body.image,req.body.stock).edit();
    res.json(editedProd);
}