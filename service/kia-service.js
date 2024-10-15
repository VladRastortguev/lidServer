const axios = require('axios')


class kiaServcie {
    async setKiaNewKar(obj) {
        try {
            
            const setLid = await axios.post(`${process.env.DB_API}`, obj, {
                auth: {
                    username: 'hs',
                    password: 'w9aX'
                }
            })
            
            console.log(1);            

            return {1: 1}
        } catch(e) {
            console.log(e);            

            return e
        }
    }
}

module.exports = new kiaServcie()