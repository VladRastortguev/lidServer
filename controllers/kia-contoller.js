const kiaService = require("../service/kia-service")

class kiaController {
    async kiaNewCar(req, res, next) {
        try {    
            console.log(req.body[0]);            
            const obj = req.body[0]                

            const setLid = await kiaService.setKiaNewKar(obj)

            return res.json([{ok: 'ok'}])
        } catch(e) {
            console.log(e);            
        }
    }

    async ping(req, res, next) {
        return res.json([{'ping': '200'}])
    }
}

module.exports = new kiaController()