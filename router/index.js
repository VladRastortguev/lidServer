const kiaContoller = require('../controllers/kia-contoller')
const toyotaContoller = require('../controllers/toyota-contoller')

const Router = require('express').Router

const router = new Router()

router.post('/toyotanewcar', toyotaContoller.toyotaNewCar)
router.post('/toyotabucar', toyotaContoller.toyotaBuCar)
router.post('/kianewcar', kiaContoller.kiaNewCar)

module.exports = router