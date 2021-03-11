const { default: axios } = require('axios')

class CarModel {
    static find(){
        return axios.get('http://localhost:4002/car')
    }

    static findById(id){
        return axios.get('http://localhost:4002/car/'+id)
    }

    static findByName(name){
        return axios.get('http://localhost:4002/car/'+name)
    }

    static create(payload){
        const { name, year, type, color, capacity, price } = payload
        return axios.post('http://localhost:4002/car', { data: { name, year, type, color, capacity, price } })
    }

    static update(id, payload){
        const { name, year, type, color, capacity, price } = payload
        return axios.put('http://localhost:4002/car/'+id, { data: { name, year, type, color, capacity, price } })
    }

    static delete(id){
        return axios.delete('http://localhost:4002/car/'+id)
    }
}

module.exports = CarModel