const { default: axios } = require('axios')

class BikeModel {
    static find(){
        return axios.get('http://localhost:4001/bike')
    }

    static findById(id){
        return axios.get('http://localhost:4001/bike/'+id)
    }

    static findByName(name){
        return axios.get('http://localhost:4001/bike/'+name)
    }

    static create(payload){
        const { name, year, color, price } = payload
        return axios.post('http://localhost:4001/bike', { data: { name, year, color, price } })
    }

    static update(id, payload){
        const { name, year, color, price } = payload
        return axios.put('http://localhost:4001/bike/'+id, { data: { name, year, color, price } })
    }

    static delete(id){
        return axios.delete('http://localhost:4001/bike/'+id)
    }
}

module.exports = BikeModel