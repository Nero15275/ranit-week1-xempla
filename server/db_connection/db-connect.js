const mongoose = require('mongoose')
const dbUrl = process.env.dbUrl
mongoose.connect(`mongodb://localhost:27017/plotly`, {
    useUnifiedTopology: true
}).then(() => {
    console.log(`DB connection Successful`)
}).catch((err) => {
    console.log(`Db connection failed Error` + err)
})
module.exports = mongoose