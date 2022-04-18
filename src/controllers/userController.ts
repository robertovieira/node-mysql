import { Request, Response } from 'express';
import { User } from '../models/User';

export const nome = (req: Request, res: Response) => {
    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
};

export const idadeForm = (req: Request, res: Response) => {
    res.render('pages/idade');
};

export const idadeAction = (req: Request, res: Response) => {
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(req.body.ano) {
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
};

export const newUser = async (req: Request, res: Response) => {
    let name: string = req.body.name as string;
    let age: number = parseInt(req.body.age);

    if (name && age) {
        let user = await User.create({
            name,
            age
        });
    }

    res.redirect('/');
}

export const upAge = async (req: Request, res: Response) => {
    let user = await User.findByPk(parseInt(req.params.id as string));
    // let user = await User.findOne({ where: { id: parseInt(req.params.id as string) }});

    if (user) {
        user.age++;
        await user.save();
    }

    res.redirect('/');

    // let results = await User.findAll({ where: { id: parseInt(req.params.id as string) } });
    // if (results.length > 0) {
    //     let user = results[0];
    //     user.age++;
    //     await user.save();
    // }

    // res.redirect('/');
}

export const downAge = async (req: Request, res: Response) => {
    let results = await User.findAll({ where: { id: parseInt(req.params.id as string) }});
    if (results.length > 0) {
        let user = results[0];
        user.age--;
        await user.save();
    }

    res.redirect('/');
}

export const deleteUser = async (req: Request, res: Response) => {
    let results = await User.findAll({ where: { id: parseInt(req.params.id as string) } });
    console.log(results);
    
    if (results.length > 0) {
        let user = results[0];
        await user.destroy();
    }

    res.redirect('/');
}