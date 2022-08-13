import {Request,Response} from 'express';
import pool from '../database';


class IndexController{
    public index(req:Request, resp:Response){
        resp.send("Hello");
    }
}


export const indexController= new IndexController();