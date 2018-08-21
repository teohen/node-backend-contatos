var express = require('express');
var router = express.Router();
var model = require('../models/index');

router.get('/', function (req, res, next) {
  model.Contato.findAll({})
      .then(contato => res.json({
          error: false,
          data: contato
      }))
      .catch(error => res.json({
          error: true,
          data: [],
          error: error
      }));
});


router.post('/', function (req, res, next) {
  const {
      nome,
      numero,
      operadora
  } = req.body;
  model.Contato.create({
          nome: nome,
          numero: numero,
          operadora: operadora
      })
      .then(contato => res.status(201).json({
          error: false,
          data: contato,
          message: 'New Contato has been created.'
      }))
      .catch(error => res.json({
          error: true,
          data: [],
          error: error
      }));
});


router.put('/:id', function (req, res, next) {
  const contato_id = req.params.id;
  const { nome, numero, operadora } = req.body;
  model.Contato.update({
      nome: nome,
      numero: numero,
      operadora: operadora
      }, {
          where: {
              id: contato_id
          }
      })
      .then(contato => res.status(201).json({
          error: false,
          message: 'contato has been updated.'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});


router.delete('/:id', function (req, res, next) {
      const contato_id = req.params.id;
      model.Contato.destroy({ where: {
          id: contato_id
      }})
      .then(status => res.status(201).json({
          error: false,
          message: 'contato has been delete.'
      }))
      .catch(error => res.json({
          error: true,
          error: error
      }));
});

module.exports = router;