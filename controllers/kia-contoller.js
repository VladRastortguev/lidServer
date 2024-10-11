const kiaService = require("../service/kia-service")

class kiaController {
    async kiaNewCar(req, res, next) {
        try {    
            const obj = req.body[0]

            const setLid = await kiaService.setKiaNewKar(obj)

            return res.json(setLid)
        } catch(e) {
            console.log(e);            
        }
    }
}

module.exports = new kiaController()