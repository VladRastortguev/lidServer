const toyotaContoller = require('../controllers/toyota-contoller')

const Router = require('express').Router

const router = new Router()

router.post('/toyotanewcar', toyotaContoller.toyotaNewCar)
router.post('/toyotabucar', toyotaContoller.toyotaBuCar)

module.exports = router