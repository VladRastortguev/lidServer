const toyotaService = require("../service/toyota-service")


class toyotaController {
    async toyotaNewCar(req, res, next) {
        try {
            const obj = req.body[0]

            const setLid = await toyotaService.setToyotaNewCar(obj)

            return res.json(setLid)
        } catch(e) {
            console.log(e)
        }
    }

    async toyotaBuCar(req, res, next) {

    }
}

module.exports = new toyotaController()