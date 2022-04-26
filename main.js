const { promises: fs } = require('fs');
const { stringify } = require('qs');

class Contenedor {
    constructor(ruta) {
        this.ruta = ruta;
    }

    async getAll() {
        try {
            const objs = await fs.readFile(this.ruta, "utf-8");

            return JSON.parse(objs);
        } catch (error) {
            return [];
        }
    }
    // Retorna un objeto random
    async getRandom() { 
        const objs = await this.getAll()            
        return objs[Math.floor(Math.random()*objs.length)]      
    }



}
exports.Contenedor = Contenedor;