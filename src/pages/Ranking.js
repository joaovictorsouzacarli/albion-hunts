import React from 'react';
import { getRankByPoints } from '../services/rankingService';
import styled from 'styled-components';

const Ranking = () => {
    const examplePoints = 60; // Exemplo de pontos
    const rank = getRankByPoints(examplePoints);

    return (
        <Container>
            <Title>Ranking</Title>
            <RankText>Seu elo atual: <strong>{rank}</strong></RankText>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 20px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5); /* Fundo preto com 50% de opacidade */
    border-radius: 10px; /* Bordas arredondadas */
    margin: 20px; /* Espaçamento externo */
`;

const Title = styled.h1`
    font-size: 3rem;
    color: white;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const RankText = styled.p`
    font-size: 1.5rem;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export default Ranking;