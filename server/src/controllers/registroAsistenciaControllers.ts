import {Request,Response} from 'express';
import pool from '../database';

class RegistroAsistenciaController{
    public async list(req: Request, resp:Response){
        const RegistroAsistenciaActividad= await pool.query('SELECT * FROM RegistroAsistenciaActividad');
        resp.json(RegistroAsistenciaActividad);
       } 

    public create(req:Request, resp:Response){
        pool.query('insert into RegistroAsistenciaActividad set ?', [req.body]);
        resp.json({text: 'Asistencia registrada'});
        console.log(req.body);
    }

    public async delete(req:Request, resp:Response):Promise<void>{
        const {Id_RegistroAsistente} = req.params;
        await pool.query('DELETE FROM RegistroAsistenciaActividad WHERE Id_RegistroAsistente=?',[Id_RegistroAsistente]);
        resp.json({message: 'Asistencia eliminada'});
    }

    public async update(req:Request, resp:Response):Promise <void>{
        const {Id_RegistroAsistente} = req.params;
        await pool.query('UPDATE RegistroAsistenciaActividad set? WHERE Id_RegistroAsistente=?',[req.body,Id_RegistroAsistente]);
        resp.json({message: 'Asistencia actualizada'});
    }
    
    public async getOne(req:Request, resp:Response):Promise<any>{
        const {Id_RegistroAsistente}=req.params;
        const RegistroAsistenciaActividad= await pool.query('SELECT * FROM RegistroAsistenciaActividad WHERE Id_RegistroAsistente=?',[Id_RegistroAsistente]);
        if(RegistroAsistenciaActividad.length>0){
            return resp.json(RegistroAsistenciaActividad[0]);
        }
        resp.status(404).json({text:'Esta asistencia no esta registrada'});
    }
}


export const registroAsistenciaController= new RegistroAsistenciaController();
export default registroAsistenciaController;