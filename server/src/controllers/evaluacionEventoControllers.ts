import {Request,Response} from 'express';
import pool from '../database';


class EvaluacionEventoController{
    public async list(req: Request, resp:Response){
        const EvaluacionEvento= await pool.query('SELECT * FROM EvaluacionEvento');
        resp.json(EvaluacionEvento);
       } 

    public create(req:Request, resp:Response){
        pool.query('insert into EvaluacionEvento set ?', [req.body]);
        resp.json({text: 'Evento evaluado'});
        console.log(req.body);
    }

    public async delete(req:Request, resp:Response):Promise<void>{
        const {Id_RegistroAsistente} = req.params;
        await pool.query('DELETE FROM EvaluacionEvento WHERE Id_RegistroAsistente=?',[Id_RegistroAsistente]);
        resp.json({message: 'Evaluacion Eliminada'});
    }

    public async update(req:Request, resp:Response):Promise <void>{
        const {Id_RegistroAsistente} = req.params;
        await pool.query('UPDATE EvaluacionEvento set? WHERE Id_RegistroAsistente=?',[req.body,Id_RegistroAsistente]);
        resp.json({message: 'Evaluacion actualizada'});
    }
    
    public async getOne(req:Request, resp:Response):Promise<any>{
        const {Id_RegistroAsistente}=req.params;
        const EvaluacionEvento= await pool.query('SELECT * FROM EvaluacionEvento WHERE Id_RegistroAsistente=?',[Id_RegistroAsistente]);
        if(EvaluacionEvento.length>0){
            return resp.json(EvaluacionEvento[0]);
        }
        resp.status(404).json({text:'Este asistente no a evaluado ningun evento'});
    }
}


export const evaluacionEventoController= new EvaluacionEventoController();
export default evaluacionEventoController;