module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.nextTick.DB_NAME || 'tabtracker',
        user: process.env.DB_USER || 'tabtracker',
        password: process.nextTick.DB_PASS || 'tabtracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './tabtracker.sqlite'
        }
    }
}

