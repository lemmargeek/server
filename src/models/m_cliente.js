import Sequilize from 'sequelize';
import { db } from '../config/database';

const Cliente = db.define('cliente', {
    cliente_id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cliente_dni: {
        type: Sequilize.STRING(13),
        unique: true
    },
    cliente_apellido: {
        type: Sequilize.STRING(180)
    },
    cliente_nombre: {
        type: Sequilize.STRING(180)
    },
    cliente_fechanac: {
        type: Sequilize.DATE,
        defaultValue: '1999-09-19'
    },
    cliente_direccion: {
        type: Sequilize.STRING(200),
        defaultValue: 'Av. 7 de Agosto y Janeth Alava'
    },
    cliente_email: {
        type: Sequilize.STRING(150),
        defaultValue: 'info@ciclyshop.com'
    },
    cliente_username: {
        type: Sequilize.STRING(50),
        unique: true
    },
    cliente_pass: {
        type: Sequilize.STRING(150)
    },
    cliente_tipo: {
        type: Sequilize.SMALLINT,
        defaultValue: 1
    },
    cliente_estado: {
        type: Sequilize.SMALLINT,
        defaultValue: 1
    },
    createdat: {
        type: 'TIMESTAMP WITHOUT TIME ZONE',
        defaultValue: Sequilize.literal('CURRENT_TIMESTAMP')
    },
    updatedat: {
        type: 'TIMESTAMP WITHOUT TIME ZONE',
    }
}, {
    timestamps: false
});

export default Cliente;