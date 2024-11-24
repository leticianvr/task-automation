const updateMultipleLists = require('./automations/updateTasks');

// Executar o script
(async () => {
  try {
    console.log('Iniciando automação de atualização de tarefas...');
    await updateMultipleLists();
    console.log('Automação concluída.');
  } catch (error) {
    console.error('Erro ao executar a automação:', error.message);
  }
})();