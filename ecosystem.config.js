module.exports = {
    apps : [
        {
            name    : 'service - orchestrator',
            script  : 'cd orchestrator && npm i && nodemon app.js',
            env     : {
                PORT    : 4000
            }
        },
        {
            name    : 'service - Service Bike',
            script  : 'cd services/bike && npm i && nodemon app.js',
            env     : {
                DATABASE_NAME: 'efrizal',
                COLLECTION_NAME: 'Bike',
                PORT    : 4001
            }
        },
        {
            name    : 'service - Service Car',
            script  : 'cd services/car && npm i && nodemon app.js',
            env     : {
                DATABASE_NAME: 'efrizal',
                COLLECTION_NAME: 'Car',
                PORT    : 4002
            }
        },
        {
            name    : 'service - Service Motorcycle',
            script  : 'cd services/motorcycle && npm i && nodemon app.js',
            env     : {
                DATABASE_NAME: 'efrizal',
                COLLECTION_NAME: 'Motorcycle',
                PORT    : 4002
            }
        }
    ]
}