const tarefas = require('../models/tarefas');

const getAll = (req, res) => {
    console.log(req.url);
    tarefas.find(function (err, tarefas){
        if(err){
            res.status(500).send({message: err.message})
        }
        res.status(200).send(tarefas);
    })
};

module.exports = {
    getAll
}