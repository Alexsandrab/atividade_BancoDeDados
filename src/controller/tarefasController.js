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

const postTarefa = (req, res) =>{
    console.log(req.body)
    let tarefa = new tarefas(req.body)

    tarefa.save(function (err){
        if(err){
            res.status(500).send({message: err.message})
        }
        res.status(201).send(tarefa.toJSON())
    })
};

module.exports = {
    getAll,
    postTarefa
}