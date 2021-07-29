const { Inventory } = require('../models')

class InventoryController {
  static showInventory (req, res, next) {
    Inventory
      .findAll()
      .then(items => {
        res.status(200).json({ items })
      })
      .catch(err => next(err))
  }

  static addInventory (req, res, next) {

    if(!req.file) {
      const err = new Error ('Image must be upload first')
      err.errorStatus = 404;
      next(err)
    }

    const newItem = {
      imageUrl  : req.file.path,
      name      : req.body.name,
      buyPrice  : req.body.buyPrice,
      sellPrice : req.body.sellPrice,
      stock     : req.body.stock
    }

    Inventory
      .create({ ...newItem })
      .then(item => res.status(201).json({ item }))
      .catch(err => next(err))
  }

  static updateInventory (req, res, next) {

    const id = req.params.id

    if(!req.file) {
      const err = new Error ('Image must be upload first')
      err.errorStatus = 404;
      next(err)
    }

    const dataUpdate = {
      imageUrl  : req.file.path,
      name      : req.body.name,
      buyPrice  : req.body.buyPrice,
      sellPrice : req.body.sellPrice,
      stock     : req.body.stock
    }

    Inventory
      .update(dataUpdate, { where: {id}, returning: true })
      .then(updated => res.status(200).json({ updated }))
      .catch(err => next(err))
  }

  static deleteInventory (req, res, next) {
    const id = req.params.id

    Inventory
      .destroy({ where: { id }, returning: true })
      .then(deleted => {
        if (deleted) res.status(200).json({ message: 'Item has been delete!' })
        else res.status(404).json({ message: 'Data not found!' })
      })
      .catch(err => next(err))
  }
}

module.exports = InventoryController