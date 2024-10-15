const { default: axios } = require("axios")

class kiaServcie {
    async setKiaNewKar(obj) {
        try {
            const setLid = await axios.post(`${process.env.DB_API}`, obj, {
                auth: {
                    username: 'hs',
                    password: 'w9aX'
                }
            })
    
            return [{'result': '200'}]
        } catch(e) {
            return e
        }
    }
}

module.exports = new kiaServcie()