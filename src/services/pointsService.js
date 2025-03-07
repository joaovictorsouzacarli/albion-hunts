const rolesPoints = {
    TANK: 10,
    Fulgurante: 8,
    Healer: 7,
    ShadowCaller: 6,
    Morcego: 5,
    Águia: 4,
    QuedaSanta: 3,
    Frost: 2,
};

export const getPointsByRole = (role) => {
    return rolesPoints[role] || 0;
};