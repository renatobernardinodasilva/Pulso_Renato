const router = require('express').Router()
const handler = require('../handlers/plantao.handler')

router.get('/', handler.list)
router.post('/', handler.create)
router.put('/:id/pegar', handler.pegar)

module.exports = router
