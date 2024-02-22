const express = require('express');
const controller = require(`./../controllers/tarefaController`);

const router = express.Router();

router.get('/', async (req, res) => {
    return res.send(await controller.listAll());
});

router.post('/', async (req, res) => {
    return res.send(await controller.createTarefa(req.body));
});

router.put('/update', async (req, res) => {
    return res.send(await controller.editTarefa(req.body));
});

router.delete('/:id', async (req, res) => {
    return res.send(await controller.deleteTarefa(req.params.id));
});

module.exports = router;