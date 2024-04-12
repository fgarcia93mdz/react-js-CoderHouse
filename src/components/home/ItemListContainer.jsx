import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h2 style={{ color: 'black', textAlign: 'center', fontSize: '2em' }}>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;