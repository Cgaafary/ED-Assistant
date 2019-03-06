export function toKg({ amount, unit }) {
    if (unit === "kg") { return amount }
    else if (unit ==="lb") { return amount / 2.2 }
    else { return null }
}

export function lidocaineDosing(weight): any[] {
    let noEpi = weight * 4;
    let addEpi = weight * 7;

    if (noEpi > 300) { noEpi = 300 };
    if (addEpi > 500) { addEpi = 500 };
    
    const table = [
        ['0.5%', (noEpi / 5).toFixed(1) + ' mL'],
        ['1%', (noEpi / 10).toFixed(1) + ' mL'],
        ['1.5%', (noEpi / 15).toFixed(1) + ' mL'],
        ['2%', (noEpi / 20).toFixed(1) + ' mL'],
        ['0.5% + epi', (addEpi / 5).toFixed(1) + ' mL'],
        ['1% + epi', (addEpi / 10).toFixed(1) + ' mL'],
        ['1.5% + epi', (addEpi / 15).toFixed(1) + ' mL'],
        ['2% + epi', (addEpi / 20).toFixed(1) + ' mL']
    ];

    return [table, noEpi.toFixed(0), addEpi.toFixed(0)];
}

export function bupivacaineDosing(weight): any[] {
    let noEpi = weight * 2;
    let addEpi = weight * 3;

    if (noEpi > 175) { noEpi = 175 };
    if (addEpi > 225) { addEpi = 225 };
    
    const table: string[][] = [
        ['0.25%', (noEpi / 2.5).toFixed(1) + ' mL'],
        ['0.5%', (noEpi / 5).toFixed(1) + ' mL'],
        ['0.25% + epi', (addEpi / 2.5).toFixed(1) + ' mL'],
        ['0.5% + epi', (addEpi / 0.5).toFixed(1) + ' mL']
    ];

    return [table, noEpi.toFixed(0), addEpi.toFixed(0)];
}

export function ropivacaineDosing(weight): any[] {
    let noEpi = weight * 3;

    if (noEpi > 225) { noEpi = 225 };
    
    const table = [
        ['0.2%', (noEpi / 2).toFixed(1) + ' mL'],
        ['0.5%', (noEpi / 5).toFixed(1) + ' mL'],
        ['0.75%', (noEpi / 7.5).toFixed(1) + ' mL']
    ];

    return [table, noEpi.toFixed(0)];
}