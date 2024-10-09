const { default: axios } = require("axios")

class toyotaService {
    async setToyotaNewCar(obj) {
        const setLid = await axios.post(`${process.env.DB_API}`, obj, {
            auth: {
                username: 'hs',
                password: 'w9aX'
            }
        })

        return '200'
    }
}

module.exports = new toyotaService()