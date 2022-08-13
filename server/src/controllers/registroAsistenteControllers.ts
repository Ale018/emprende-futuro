import {Request,Response} from 'express';
import pool from '../database';


class RegistroAsistenteController{
    public async list(req: Request, resp:Response){
        const RegistroAsistente= await pool.query('SELECT * FROM RegistroAsistente');
        resp.json(RegistroAsistente);
       } 

    public create(req:Request, resp:Response){
        pool.query('insert into RegistroAsistente set ?', [req.body]);
        resp.json({text: 'Registro exitoso'});
        console.log(req.body);
    }

    public async delete(req:Request, resp:Response):Promise<void>{
        const {Id_RegistroAsistente} = req.params;
        await pool.query('DELETE FROM RegistroAsistente WHERE Id_RegistroAsistente=?',[Id_RegistroAsistente]);
        resp.json({message: 'Registro eliminado'});
    }

    public async update(req:Request, resp:Response):Promise <void>{
        const {Id_RegistroAsistente} = req.params;
        await pool.query('UPDATE RegistroAsistente set? WHERE Id_RegistroAsistente=?',[req.body,Id_RegistroAsistente]);
        resp.json({message: 'Registro actualizado'});
    }
    
    public async getOne(req:Request, resp:Response):Promise<any>{
        const {Id_RegistroAsistente}=req.params;
        const RegistroAsistente= await pool.query('SELECT * FROM RegistroAsistente WHERE Id_RegistroAsistente=?',[Id_RegistroAsistente]);
        if(RegistroAsistente.length>0){
            return resp.json(RegistroAsistente[0]);
        }
        resp.status(404).json({text:'Este asistente no existe'});
    }
}

export const registroAsistenteController= new RegistroAsistenteController();
export default registroAsistenteController;