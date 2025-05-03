const getStoredLowyer = () => {
  const storedLowyerSTR = localStorage.getItem('lowyer');
  if (storedLowyerSTR) {
    const storedLowyerData = JSON.parse(storedLowyerSTR);
    return storedLowyerData;
  } else {
    return [];
  }
};
// Utilitys.js

export const removeStoredLowyer = id => {
  const stored = getStoredLowyer();
  const remaining = stored.filter(lowyerId => lowyerId !== id);
  localStorage.setItem('booked-lowyers', JSON.stringify(remaining));
};

const addStoredData = id => {
  const storedLowyerData = getStoredLowyer();
  if (storedLowyerData.includes(id)) {
    alert('Alreday added this lowyer');
  } else {
    storedLowyerData.push(id);
    const data = JSON.stringify(storedLowyerData);
    localStorage.setItem('lowyer', data);
  }
};

export { addStoredData, getStoredLowyer };
