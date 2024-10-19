import React from 'react';
import styles from './CardModule.css'; 
import img from './Iphone.jpeg';

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}> 
                <img src={img} alt="Iphone" className={styles.profileImage} /> 
                <h2 className={styles.title}>Iphone 16</h2>
                <p className={styles.description}>iPhone 16. Con Control de la Cámara Fusion de 48 MP. Cinco colores espectaculares. Y el chip A18.</p>
                <button className={styles.button}>Comprar</button> 
            </div>
        </div>
    );
};

export default Card;
