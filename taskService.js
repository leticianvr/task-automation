const clickUpAPI = require('../config/api');

// Função para buscar todas as tarefas criadas nas últimas 24 horas
const getTasksFromLast24Hours = async (listId) => {
  try {
    const response = await clickUpAPI.get(`/list/${listId}/task`);
    const allTasks = response.data.tasks;

    // Filtrar apenas as tarefas criadas nas últimas 24 horas
    const oneDayAgo = Date.now() - 24 * 60 * 60 * 1000;
    const recentTasks = allTasks.filter(
      (task) => task.date_created >= oneDayAgo
    );

    console.log(`Tarefas criadas nas últimas 24h na lista ${listId}: ${recentTasks.length}`);
    return recentTasks;
  } catch (error) {
    console.error(`Erro ao buscar tarefas na lista ${listId}:`, error.message);
    return [];
  }
};

// Função para atualizar o nome de uma tarefa
const updateTaskName = async (taskId, newName) => {
  try {
    await clickUpAPI.put(`/task/${taskId}`, { name: newName });
    console.log(`Tarefa ${taskId} atualizada para: "${newName}"`);
  } catch (error) {
    console.error(`Erro ao atualizar tarefa ${taskId}:`, error.message);
  }
};

module.exports = {
  getTasksFromLast24Hours,
  updateTaskName,
};
