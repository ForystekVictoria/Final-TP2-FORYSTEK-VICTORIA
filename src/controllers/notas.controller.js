import service from '../services/notas.service.js'

const postCalificaciones = async (req, res) => {
    try{
     const calificacionNueva = req.body
     const calificaciones = await service.postCalificaciones(calificacionNueva)
     res.send(calificaciones)
 
 }catch (error){
     console.log("Error");
     res.send({errorMsg: error.message });
 }
     
 }

 const getCalificaciones = async (req, res) => {
    const calificaciones = await service.getCalificaciones()
    res.send(calificaciones)
}

const getCalificacionesAgrupadas = async (req, res) => {
    try {
      const calificacionesAgrupadas = await service.getCalificacionesAgrupadas();
      res.send(calificacionesAgrupadas);
    } catch (error) {
      console.log("Error");
      res.send({ errorMsg: error.message });
    }
  };


export default{
    postCalificaciones,
    getCalificaciones,
    getCalificacionesAgrupadas
    
}