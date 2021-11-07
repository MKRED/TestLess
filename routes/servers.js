import {Router} from 'express'
import {getALL, create, remove} from '../controllers/servers.js'
const router = Router()

router.get('/api/server', getALL)

router.post('/api/server', create)

router.delete('/api/server/:id', remove)

export default router
