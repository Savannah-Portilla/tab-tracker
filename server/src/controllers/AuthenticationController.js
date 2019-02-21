//where you have all your end points defined
module.exports = {
    register (req, res) {
        res.send({
            message: 'Hello ${req.body.email}! Your user was registered! Have fun!'
        })
    }
}