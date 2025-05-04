// const getStoredLowyer = () => {
//   const storedLowyerSTR = localStorage.getItem('lowyer');
//   if (storedLowyerSTR) {
//     const storedLowyerData = JSON.parse(storedLowyerSTR);
//     return storedLowyerData;
//   } else {
//     return [];
//   }
// };

// export const removeStoredLowyer = id => {
//   const stored = getStoredLowyer();
//   const remaining = stored.filter(lowyerId => lowyerId !== id);
//   localStorage.setItem('booked-lowyers', JSON.stringify(remaining));
// };

// const addStoredData = id => {
//   const storedLowyerData = getStoredLowyer();
//   if (storedLowyerData.includes(id)) {
//     alert('Alreday added this lowyer');
//   } else {
//     storedLowyerData.push(id);
//     const data = JSON.stringify(storedLowyerData);
//     localStorage.setItem('lowyer', data);
//   }
// };

// export { addStoredData, getStoredLowyer };

const STORAGE_KEY = 'lowyer';

export const getStoredLowyer = () => {
  const storedLowyerSTR = localStorage.getItem(STORAGE_KEY);
  if (storedLowyerSTR) {
    return JSON.parse(storedLowyerSTR);
  } else {
    return [];
  }
};

export const addStoredData = id => {
  const storedLowyerData = getStoredLowyer();
  if (storedLowyerData.includes(id)) {
    alert('Already added this lawyer');
  } else {
    storedLowyerData.push(id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storedLowyerData));
    // 🔥 Dispatch custom event to update UI in other components
    window.dispatchEvent(new CustomEvent('appointmentUpdated'));
  }
};

export const removeStoredLowyer = id => {
  const stored = getStoredLowyer();
  const remaining = stored.filter(lowyerId => lowyerId !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(remaining));
  // 🔥 Trigger update
  window.dispatchEvent(new CustomEvent('appointmentUpdated'));
};
