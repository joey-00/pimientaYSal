const menu = require("../data/menu.json")

module.exports = {
    home: (req,res) =>{
        return res.render('index', {menu})
    },
    detalle : (req,res) => {
        let id = +req.params.id

        let plato = menu.find(plato => plato.id === id)

        return res.render('detalleMenu', {
            plato
        })
    }
}