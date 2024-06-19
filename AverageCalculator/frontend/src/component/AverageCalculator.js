import React, { useState } from 'react';
import axios from 'axios';

const AverageCalculator = () => {
  const [numberType, setNumberType] = useState('e');
  const [prevWindow, setPrevWindow] = useState([]);
  const [currWindow, setCurrWindow] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = async () => {
    setError(null);

    try {
      const response = await axios.get(`http://localhost:9876/numbers/${numberType}`);
      const data = response.data;

      setPrevWindow(data.windowPrevState);
      setCurrWindow(data.windowCurrState);
      setNumbers(data.numbers);
      setAverage(data.avg);
    } catch (error) {
      setError('Failed to fetch numbers');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Average Calculator</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Select Number Type
        </label>
        <select
          className="border p-2 w-full"
          value={numberType}
          onChange={(e) => setNumberType(e.target.value)}
        >
          <option value="p">Prime</option>
          <option value="f">Fibonacci</option>
          <option value="e">Even</option>
          <option value="r">Random</option>
        </select>
      </div>
      <button
        className="bg-blue-500 text-white p-2 w-full mb-4"
        onClick={handleCalculate}
      >
        Calculate Average
      </button>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="mb-4">
        <h2 className="text-xl">Previous Window State:</h2>
        <p>{prevWindow.join(', ')}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl">Current Window State:</h2>
        <p>{currWindow.join(', ')}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl">Fetched Numbers:</h2>
        <p>{numbers.join(', ')}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-xl">Average:</h2>
        <p>{average}</p>
      </div>
    </div>
  );
};

export default AverageCalculator;
