import express from 'express'
import controller from '../controllers/notas.controller.js'

const router = express.Router()

router.get("/agrupadas", controller.getCalificacionesAgrupadas)
router.get("/", controller.getCalificaciones)
router.post("/", controller.postCalificaciones)

export default router;