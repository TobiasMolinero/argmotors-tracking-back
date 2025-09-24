import fs from 'fs';

function getEnvio(nro_venta) {
    const data = fs.readFileSync('db.json', 'utf-8');
    const db = JSON.parse(data);

    return db.envios.find(envio => envio.nro_venta === nro_venta);
}

function createEnvio(envio) {
    const data = fs.readFileSync('db.json', 'utf-8');
    const db = JSON.parse(data);

    db.envios.push({
        ...envio,
        id: db.envios.length + 1,
    })
    
    fs.writeFileSync('db.json', JSON.stringify(db, null, 2))
    
    return envio;
}

function updateEnvio(nro_venta, estado) {
    const data = fs.readFileSync('db.json', 'utf-8');
    const db = JSON.parse(data);
    const envioIndex = db.envios.findIndex(envio => envio.nro_venta === nro_venta);

    if(envioIndex === -1) return false;

    db.envios[envioIndex].estado = estado;
    fs.writeFileSync('db.json', JSON.stringify(db, null, 2));
    
    return db.envios[envioIndex];
}

export const EnviosService = {
    getEnvio,
    createEnvio,
    updateEnvio,
}