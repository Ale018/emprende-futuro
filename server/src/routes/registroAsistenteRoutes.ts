import { registroAsistenteController } from './../controllers/registroAsistenteControllers';
import { Router } from "express";

class RegistroAsistenteRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/',registroAsistenteController.list);
        this.router.post('/',registroAsistenteController.create);
        this.router.delete('/:id',registroAsistenteController.delete);
        this.router.put('/:id',registroAsistenteController.update);
        this.router.get('/:id',registroAsistenteController.getOne);
    }
}
const registroAsistenteRoutes = new RegistroAsistenteRoutes();
export default registroAsistenteRoutes.router;