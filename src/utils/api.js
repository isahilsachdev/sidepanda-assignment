import axios from 'axios';

const API_BASE_URL = 'https://app.appointo.me/scripttag';

export const fetchTimeslotsFromAPI = async (startDate, endDate) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/mock_timeslots`, {
      params: {
        start_date: startDate.toISOString().split('T')[0],
        end_date: endDate.toISOString().split('T')[0],
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching timeslots:', error);
    return [];
  }
};