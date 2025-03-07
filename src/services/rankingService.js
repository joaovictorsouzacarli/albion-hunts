export const getRankByPoints = (points) => {
    if (points >= 100) return 'Diamante';
    if (points >= 75) return 'Platina';
    if (points >= 50) return 'Ouro';
    if (points >= 25) return 'Prata';
    return 'Bronze';
};