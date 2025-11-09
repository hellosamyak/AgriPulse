export const API_BASE_URL = 'https://backend-agripulse.onrender.com';

// Example of how your chat endpoint call should look:
async function sendChatMessage(message) {
  try {
    const response = await axios.post(`${API_BASE_URL}/chat`, { text: message });
    return response.data;
  } catch (error) {
    console.error("API Call failed:", error);
  }
}