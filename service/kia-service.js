const { default: axios } = require("axios")

class kiaServcie {
    async setKiaNewKar(obj) {
        const setLid = await axios.post(`${process.env.DB_API}`, obj, {
            auth: {
                username: 'hs',
                password: 'w9aX'
            }
        })

        return '200'
    }
}

module.exports = new kiaServcie()