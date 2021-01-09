import Cliente from '../models/m_cliente';

export async function newCliente(req, res) {
    const { cliente_dni,
        cliente_apellido,
        cliente_nombre,
        cliente_fechanac,
        cliente_direccion,
        cliente_email,
        cliente_username,
        cliente_pass } = req.body;
    try {
        let newClienteR = await Cliente.create({
            cliente_dni,
            cliente_apellido,
            cliente_nombre,
            cliente_fechanac,
            cliente_direccion,
            cliente_email,
            cliente_username,
            cliente_pass
        }, {
            fields: [
                cliente_dni,
                cliente_apellido,
                cliente_nombre,
                cliente_fechanac,
                cliente_direccion,
                cliente_email,
                cliente_username,
                cliente_pass
            ]
        });
        if (newClienteR) {
            return res.json({
                message: 'Cliente registrado con exito'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Ocurrio un error al insertar datos',
            data: {}
        });
    }
}