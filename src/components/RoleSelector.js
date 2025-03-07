import React, { useState } from 'react';
import styled from 'styled-components';

const roles = ['TANK', 'Fulgurante', 'Healer', 'Shadow Caller', 'Morcego', 'Águia', 'Queda Santa', 'Frost'];

const RoleSelector = ({ onRoleSelect }) => {
    const [selectedRole, setSelectedRole] = useState('');

    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
        onRoleSelect(event.target.value);
    };

    return (
        <SelectContainer>
            <Select value={selectedRole} onChange={handleRoleChange}>
                <option value="">Selecione sua role</option>
                {roles.map((role, index) => (
                    <option key={index} value={role}>{role}</option>
                ))}
            </Select>
        </SelectContainer>
    );
};

const SelectContainer = styled.div`
    margin: 20px;
`;

const Select = styled.select`
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

export default RoleSelector;