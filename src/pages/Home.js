import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import RoleSelector from '../components/RoleSelector';
import { getPointsByRole } from '../services/pointsService';
import styled from 'styled-components';

const Home = () => {
    const [points, setPoints] = useState(0);

    const handleRoleSelect = (role) => {
        const earnedPoints = getPointsByRole(role);
        setPoints(points + earnedPoints);
        console.log(`Pontos ganhos: ${earnedPoints}, Total: ${points + earnedPoints}`);
    };

    return (
        <Container>
            <Title>Albion Hunts</Title>
            <RoleSelector onRoleSelect={handleRoleSelect} />
            <Points>Pontos acumulados: {points}</Points>
            <Link to="/ranking">
                <Button>Ver Ranking</Button>
            </Link>
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

const Points = styled.p`
    font-size: 1.5rem;
    color: white;
    margin: 20px 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

export default Home;