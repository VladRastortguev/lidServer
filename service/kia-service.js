const axios = require('axios')


class kiaServcie {
    async setKiaNewKar(obj) {
        try {
            
            const setLid = await axios.post(`http://192.168.2.26:35421/MK_test_AA6kg_Vlad_dataCopy2/hs/att/create_lead`, obj, {
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