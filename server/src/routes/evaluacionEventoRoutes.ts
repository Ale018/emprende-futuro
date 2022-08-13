import { evaluacionEventoController } from './../controllers/evaluacionEventoControllers';
import { Router } from "express";


class EvaluacionEventoRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/',evaluacionEventoController.list);
        this.router.post('/',evaluacionEventoController.create);
        this.router.delete('/:id',evaluacionEventoController.delete);
        this.router.put('/:id',evaluacionEventoController.update);
        this.router.get('/:id',evaluacionEventoController.getOne);
    }
}
const evaluacionEventoRoutes = new EvaluacionEventoRoutes();
export default evaluacionEventoRoutes.router;