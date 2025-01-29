import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      console.log('Incoming data:', req.body);

      const formData = req.body;

      const meritoCreateApiUrl = process.env.MERITO_CREATE_API_URL;
      const meritoUpdateApiUrl = process.env.MERITO_UPDATE_API_URL;

      const isExistingLead = await checkLeadInCRM(formData.email);
      const apiUrl = isExistingLead ? meritoUpdateApiUrl : meritoCreateApiUrl;

      console.log('Using API URL:', apiUrl);

      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Key': process.env.MERITO_ACCESS_KEY,
          'Secret-Key': process.env.MERITO_SECRET_KEY,
        },
      });

      console.log('CRM Response:', response.data);
      res.status(200).json({ message: 'Data sent to CRM successfully', data: response.data });
    } catch (error) {
      console.error('Error sending data to CRM:', error.message);
      console.error('Error Details:', error.response?.data || error.message);
      res.status(500).json({ error: 'Failed to send data to CRM', details: error.response?.data || error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

async function checkLeadInCRM(email) {
  const meritoCheckApiUrl = `${process.env.MERITO_CHECK_API_URL}?email=${email}`;
  try {
    console.log('Checking lead:', meritoCheckApiUrl);
    const response = await axios.get(meritoCheckApiUrl, {
      headers: {
        'Access-Key': process.env.MERITO_ACCESS_KEY,
        'Secret-Key': process.env.MERITO_SECRET_KEY,
      },
    });
    console.log('Lead check response:', response.data);
    return response.data.exists;
  } catch (error) {
    console.error('Error checking lead:', error.message);
    console.error('Error Details:', error.response?.data || error.message);
    return false;
  }
}
