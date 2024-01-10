import {pool} from '../db.js'

export const getAllTasks = (req,res)=>res.send('obteniendo tareas')

export const getTask = (req,res)=>res.send('obteniendo tarea unica')

export const createTask = async (req,res,next)=>{
    const {title,descriptions} = req.body
    //db insert
    try{
        const result = await pool.query('INSERT INTO task (title,descriptions) VALUES ($1,$2) RETURNING *',[title,descriptions]);

        res.json(result.rows[0]);
    } catch (error) {
        if( error.code === "23505"){
            return res.send('Ya existe titulo');
        }
        next(error)
    }
}

export const updateTask = (req,res)=>res.send('actualizando tarea')

export const deleteTask = (req,res)=>res.send('eliminando tarea')