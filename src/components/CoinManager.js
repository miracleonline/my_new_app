import React, { useEffect, useState } from 'react';
import { getCoins, earnCoins, spendCoins } from '../api';

const CoinManager = () => {
  const [coins, setCoins] = useState(0);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await getCoins();
        setCoins(res.data.coins);
      } catch (error) {
        console.log('Error fetching coins:', error);
      }
    };
    fetchCoins();
  }, []);

  const handleEarnCoins = async () => {
    try {
      await earnCoins({ coins: 1 });
      setCoins(coins + 1);
    } catch (error) {
      console.log('Error earning coins:', error);
    }
  };

  const handleSpendCoins = async () => {
    try {
      if (coins > 0) {
        await spendCoins({ coins: 1 });
        setCoins(coins - 1);
      } else {
        alert('Not enough coins');
      }
    } catch (error) {
      console.log('Error spending coins:', error);
    }
  };

  return (
    <div>
      <h3>Coins: {coins}</h3>
      <button onClick={handleEarnCoins}>Watch Video to Earn Coins</button>
      <button onClick={handleSpendCoins}>Spend Coins to Share Location</button>
    </div>
  );
};

export default CoinManager;
