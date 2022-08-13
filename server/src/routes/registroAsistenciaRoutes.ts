import { registroAsistenciaController } from './../controllers/registroAsistenciaControllers';
import { Router } from "express";

class RegistroAsistenciaRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/',registroAsistenciaController.list);
        this.router.post('/',registroAsistenciaController.create);
        this.router.delete('/:id',registroAsistenciaController.delete);
        this.router.put('/:id',registroAsistenciaController.update);
        this.router.get('/:id',registroAsistenciaController.getOne);
    }
}
const registroAsistenciaRoutes = new RegistroAsistenciaRoutes();
export default registroAsistenciaRoutes.router;