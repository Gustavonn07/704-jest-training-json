const DB = require('./../database/index');

async function listAll() {
    return await DB.execute(
        `SELECT * FROM tarefa;`
    );
};

async function createTarefa(data) {
    try {
        await DB.execute(
            `INSERT INTO tarefa (tarefa_id, tarefa_nome) VALUES (${data.tarefa_id}, '${data.tarefa_nome}');`
        );

        return {
            type: 'success',
            message: 'Tarefa criada com sucesso'
        };

    } catch(err) {
        return {
            type: 'error',
            message: err.message
        };
    }
};

async function deleteTarefa(id) {
    try {
        await DB.execute(
            `DELETE FROM tarefa WHERE tarefa_id = ${id};`
        );

        return {
            type: 'success',
            message: 'Tarefa excluida com sucesso'
        }
    
    } catch (err) {
        return {
            type: 'error',
            message: err.message
        };
    }
};

module.exports = {
    createTarefa,
    deleteTarefa,
    listAll
};
