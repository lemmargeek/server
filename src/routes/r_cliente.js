import { Router } from 'express';
const router = Router();
import { newCliente } from '../controllers/c_cliente';

router.post('/', newCliente);

export default router;