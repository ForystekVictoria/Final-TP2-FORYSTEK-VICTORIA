import model from '../models/notas.model.js'

const postCalificaciones = async (calNueva) => {
    const calificaciones = await model.postCalificaciones(calNueva)
    return calificaciones
}
const getCalificaciones = async () => {
    const calificaciones = await model.getCalificaciones()
    return calificaciones
}

const getCalificacionesAgrupadas = async () => {
    const calificacionesAgrupadas = await model.getCalificacionesAgrupadas();
    return calificacionesAgrupadas;
  };
export default{
    postCalificaciones,
    getCalificaciones,
    getCalificacionesAgrupadas
    
}