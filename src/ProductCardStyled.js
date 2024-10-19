import React from 'react';
import styled from 'styled-components';
import img from './Iphone.jpeg'
import { hover } from '@testing-library/user-event/dist/hover';

const container = styled.div`
    width: 300px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: white;
    margin: 20px;

 &:hover {
    transform: translateY(-5px);
  }
`;

const ProfileImage = styled.img`
    width:200px;
    border-radius: 50%;
    height: 200px;
`;

const ProductName = styled.h2`
    font-size: 20px;
    margin-bottom: 10px;
`;
const BuyButton = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer; 
    transition: background-color 0.3s, transform 0.2s; 

    &:hover {
        background-color: #0056b3;
    }

    &:active {
        transform: scale(0.95);
    }
`;

const ProductCardStyled = () => {
    return (
        <container>
            <card>
            <ProfileImage src={img} alt="Iphone"/>
            <ProductName>Iphone 16</ProductName>
            <p> iPhone 16. Con Control de la Camara Fusion de 48 MP. Cinco colores espectaculares. Y el chip A18.</p>
            <BuyButton>Comprar</BuyButton>
            </card>
        </container>
    );
};
export default ProductCardStyled;