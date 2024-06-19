const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 9876;
const WINDOW_SIZE = 10;
const numbersWindow = [];

const apiEndpoints = {
  p: 'http://20.244.56.144/test/primes',
  f: 'http://20.244.56.144/test/fibo',
  e: 'http://20.244.56.144/test/even',
  r: 'http://20.244.56.144/test/rand',
};

app.get('/numbers/:numberId', async (req, res) => {
  const { numberId } = req.params;

  if (!apiEndpoints[numberId]) {
    return res.status(400).json({ error: 'Invalid number ID' });
  }

  const prevWindow = [...numbersWindow];

  try {
    const response = await axios.get(apiEndpoints[numberId], { timeout: 500 });
    const newNumbers = response.data.numbers;

    // Add unique numbers to the window
    newNumbers.forEach((num) => {
      if (!numbersWindow.includes(num)) {
        if (numbersWindow.length >= WINDOW_SIZE) {
          numbersWindow.shift(); // Remove the oldest number
        }
        numbersWindow.push(num);
      }
    });

    const average =
      numbersWindow.reduce((acc, num) => acc + num, 0) / numbersWindow.length;

    return res.json({
      windowPrevState: prevWindow,
      windowCurrState: numbersWindow,
      numbers: newNumbers,
      avg: average.toFixed(2),
    });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch numbers' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
