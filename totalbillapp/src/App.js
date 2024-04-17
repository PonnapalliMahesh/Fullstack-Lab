import React, { useState } from 'react';
import './App.css';

const HotelBillScreen = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(1);
  const [transactions, setTransactions] = useState([]);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());


  const items = [
    { id: 1, name: 'Idly', cost: 10 },
    { id: 2, name: 'Dosa', cost: 20 },
    { id: 3, name: 'Vada', cost: 20 },
    { id: 4, name: 'Poori', cost: 20 },
    { id: 5, name: 'Upma', cost: 20 },
    { id: 6, name: 'Chapati', cost: 20 },
    { id: 7, name: 'Bonda', cost: 20 },
    { id: 8, name: 'Vada', cost: 20 },
    { id: 9, name: 'Lemon Rice', cost: 30 },
    { id: 10, name: 'Tomato Rice', cost: 30 },
  ];

  const addItem = () => {
    if (selectedItems.length > 0) {
      const newTransaction = {
        id: transactions.length + 1,
        itemName: selectedItems[0].name,
        quantity: itemQuantity,
        costPerItem: selectedItems[0].cost,
      };

      setTransactions([...transactions, newTransaction]);
      setSelectedItems([]);
      setItemQuantity(1);
    } else {
      alert('Please select an item!');
    }
  };

  const calculateTotalCost = () => {
    return transactions.reduce(
      (total, transaction) => total + transaction.quantity * transaction.costPerItem,0);
  };

  const calculateGST = () => {
    const totalCost = calculateTotalCost();
    return (5 / 100) * totalCost;
  };

  const calculateBillAmount = () => {
    const totalCost = calculateTotalCost();
    const gst = calculateGST();
    const billAmount = totalCost + gst;
    return Math.ceil(billAmount);
  };

  setInterval(() => {
    setCurrentDateTime(new Date());
  }, 1000);

  const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
});

const formattedTime = currentDate.toLocaleTimeString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
});

const handlePrint = () => {
  window.print();
};

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: 'auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ textAlign: 'center', color: '#333' }}>SNEHA'S Hotel Invoice</h2>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <h4 style={{ color: '#333' }}>{formattedDate} {formattedTime}</h4>
  </div>
      
      <hr style={{ border: '1px solid #ccc', margin: '15px 0' }} />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '15px' }}>
  <div style={{ flex: 1, marginRight: '10px' }}>
    <label htmlFor="item" style={{ display: 'block', marginBottom: '5px', color: '#555', fontSize: '14px' }}>
      Select Item:
    </label>
    <select
      id="item"
      style={{ width: '100%', padding: '8px', fontSize: '14px', borderRadius: '4px' }}
      onChange={(e) => {
        const selectedItem = items.find((item) => item.id === parseInt(e.target.value));
        setSelectedItems([selectedItem]);
      }}
      value={selectedItems.length > 0 ? selectedItems[0].id : ''}
    >
      <option value="" disabled>
        Select an item
      </option>
      {items.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  </div>
  <div style={{ flex: 1, marginRight: '10px' }}>
    <label htmlFor="itemQuantity" style={{ display: 'block', marginBottom: '5px', color: '#555', fontSize: '14px' }}>
      Number of Selected Items:
    </label>
    <input
      type="number"
      id="itemQuantity"
      value={itemQuantity}
      style={{ width: '100%', padding: '8px', fontSize: '14px', borderRadius: '4px' }}
      onChange={(e) => setItemQuantity(parseInt(e.target.value))}
    />
  </div>
  <button
    style={{
      background: 'darkblue',
      color: 'white',
      border: 'none',
      padding: '12px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'background 0.3s ease',
      marginLeft: '14px',  
    }}
    onClick={addItem}
    onMouseOver={(e) => e.target.style.background = 'orange'}
    onMouseOut={(e) => e.target.style.background = 'darkblue'}
  >
    Add Item
  </button>
</div>

      
      <div style={{ marginTop: '20px' }}>
        <hr style={{ border: '1px solid #ccc', margin: '15px 0' }} />
        <h4 style={{ textAlign: 'center', color: '#333' }}>List of Items</h4>
        <table className="category-table" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px', }}>
        <thead>
        <tr style={{ background: '#0e0789', color: 'white' }}>
              <th style={{ textAlign: 'center', padding: '8px' }}>S.No.</th>
              <th style={{ textAlign: 'center', padding: '8px' }}>Item Name</th>
              <th style={{ textAlign: 'center', padding: '8px' }}>Item Quantity</th>
              <th style={{ textAlign: 'center', padding: '8px' }}>Cost Per Item</th>
              <th style={{ textAlign: 'center', padding: '8px' }}>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
                <td style={{ textAlign: 'center', padding: '8px' }}>{index + 1}</td>
                <td style={{ textAlign: 'left', padding: '8px' }}>{transaction.itemName}</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>{transaction.quantity}</td>
                <td style={{ textAlign: 'center', padding: '8px' }}>{transaction.costPerItem}</td>
                <td style={{ textAlign: 'right', padding: '8px' }}>
                  {transaction.quantity * transaction.costPerItem}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <strong>Total Cost of Items: {calculateTotalCost()}</strong>
        </div>
        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <strong>GST (5%): {calculateGST()}</strong>
        </div>
        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <strong>Bill Amount: {calculateBillAmount()}</strong>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          style={{
            background: 'darkblue',
            color: 'white',
            border: 'none',
            padding: '8px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '12px',
            transition: 'background 0.3s ease',
          }}
          onClick={handlePrint}
          onMouseOver={(e) => e.target.style.background = 'orange'}
          onMouseOut={(e) => e.target.style.background = 'darkblue'}
        >
          Print
        </button>
      </div>
      <div className="watermark">K.SNEHA'S</div>
    </div>
  );
};

export default HotelBillScreen;
