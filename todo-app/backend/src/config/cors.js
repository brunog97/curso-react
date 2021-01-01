module.exports = (req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Acess-Control-Allow-Methods','GET','POST','OPTIONS','PUT', 'PATCH','DELETE')
    res.header('Acess-Control-Allow-Headers','Origin, X-Requested-With, Conten-Type, Accept')
    next()
}