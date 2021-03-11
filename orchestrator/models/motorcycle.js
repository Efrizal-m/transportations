const { default: axios } = require('axios')

class MotorcycleModel {
    static find(){
        return axios.get('http://localhost:4003/motorcycle')
    }

    static findById(id){
        return axios.get('http://localhost:4003/motorcycle/'+id)
    }

    static findByName(name){
        return axios.get('http://localhost:4003/motorcycle/'+name)
    }

    static create(payload){
        const { name, year, type, color, price } = payload
        return axios.post('http://localhost:4003/motorcycle', { data: { name, year, type, color, price } })
    }

    static update(id, payload){
        const { name, year, type, color, price } = payload
        return axios.put('http://localhost:4003/motorcycle/'+id, { data: { name, year, type, color, price } })
    }

    static delete(id){
        return axios.delete('http://localhost:4003/motorcycle/'+id)
    }
}

module.exports = MotorcycleModel