import React from 'react';

const ProductDetail = (props) => {
  const { name, description, price, sku, availableQuantity } = props;

  return (
    <div>
      <h1>Detalles del Producto</h1>
      <div>
        <p><strong>Nombre:</strong> {name}</p>
        <p><strong>Descripción:</strong> {description}</p>
        <p><strong>Precio:</strong> {price}</p>
        <p><strong>SKU:</strong> {sku}</p>
        <p><strong>Cantidad Disponible:</strong> {availableQuantity}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
