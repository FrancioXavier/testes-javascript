import { database } from "../db.js";

const usersController = {
    createUser: (req, res) => {
        const { name } = req.body;
    
        if(name.length < 2){
            return res.status(403).json({mensagem: "Não é possível criar usuários sem um nome."})
        }else{
            database.push(name);
            return res.status(200).json({mensagem: "Usuário criado com sucesso!"})
        }
    },

    readUsers: (req, res) => {
        return res.status(200).json(database);
    }
}

export {usersController};