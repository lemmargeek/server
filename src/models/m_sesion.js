import Sequilize from 'sequelize';
import { db } from '../config/database'

const Sesiones = db.define('sesiones', {
    sescliidgf: {
        type: Sequilize.UUID,
        allowNull: false,
        validate: {
            notNull: true
        }
    },
    sesfechaingf: {
        type: 'TIMESTAMP WITHOUT TIME ZONE',
        allowNull: true,
        defaultValue: Sequilize.literal('CURRENT_TIMESTAMP'), 
        validate: {
            isNull: true
        }
    },
    sesdirecciongf: {
        type: Sequilize.STRING(15),
        allowNull: false,
        validate: {
            isIP: true,
            isIPv4: true
        }
    }
});

export default Sesiones;