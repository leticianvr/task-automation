// Função para calcular o próximo domingo
const calculateNextSunday = () => {
    const today = new Date();
    const daysUntilSunday = 7 - today.getDay();
    today.setDate(today.getDate() + daysUntilSunday);
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    return `${day}.${month}`;
  };
  
  module.exports = calculateNextSunday;
  