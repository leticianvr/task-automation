const { getTasksFromLast24Hours, updateTaskName } = require('../services/taskService');
const calculateNextSunday = require('../config/dateUtils');

// Função para processar uma lista
const processList = async (listId, nextSunday) => {
  console.log(`Processando a lista ${listId}...`);
  const tasks = await getTasksFromLast24Hours(listId);

  if (tasks.length === 0) {
    console.log(`Nenhuma tarefa recente encontrada na lista ${listId}.`);
    return;
  }

  for (const task of tasks) {
    if (!task.name.includes(nextSunday)) {
      const newTaskName = task.name.replace(/\(\d{2}\.\d{2}\)/, `(${nextSunday})`);
      await updateTaskName(task.id, newTaskName);
    }
  }

  console.log(`Atualização concluída para a lista ${listId}.`);
};

// Função principal para processar múltiplas listas
const updateMultipleLists = async () => {
  const listIds = ['901701567517', '901701567519', '901701567520']; // IDs das listas a serem monitoradas
  const nextSunday = calculateNextSunday();

  console.log(`Atualizando tarefas para múltiplas listas com a data de domingo: ${nextSunday}`);

  for (const listId of listIds) {
    await processList(listId, nextSunday);
  }

  console.log('Atualização concluída para todas as listas!');
};

module.exports = updateMultipleLists;
