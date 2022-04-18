import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { Product } from '../models/Product';
import { User } from '../models/User';

export const home = async (req: Request, res: Response)=>{
    // ------------------------------------------------------------------------------------------------
    // DELETE
    // ------------------------------------------------------------------------------------------------
    // ## Salvando dados selecionados ##
    // let results = await User.findAll({ where: { id: 7 } });
    // if (results.length > 0) {
    //     let userDelete = results[0];
    //     await userDelete.destroy();
    // }

    // ## Deletando dados em massa ##
    // await User.destroy({
    //     where: {
    //         age: {
    //             [Op.lte]: 18
    //         }
    //     }
    // });


    // ------------------------------------------------------------------------------------------------
    // UPDATE
    // ------------------------------------------------------------------------------------------------
    // ## Salvando dados selecionados ##
    // let results = await User.findAll({ where: { id: 5 } });
    // if (results.length > 0) {
    //     let userFind = results[0];
    //     userFind.age = 18;
    //     await userFind.save();
    // }

    // ## Salvando dados em massa ##
    // await User.update({ name: 'Seu Chico', age: 56}, {
    //     where: {
    //         id: 4
    //     }
    //     // where: {
    //     //     age: {
    //     //         [Op.lt]: 18
    //     //     }
    //     // }
    // });


    // ------------------------------------------------------------------------------------------------
    // INSERT
    // ------------------------------------------------------------------------------------------------
    // ## pesquisa se existe a informacao antes de cadastrar
    // const [ user, created] = await User.findOrCreate({
    //     where: { name: 'Roberto V' },
    //     defaults: {
    //         age: 89
    //     }        
    // });

    // console.log("Usuario", user);
    // console.log("Created", created);

    // ## build (salva na memoria) + save (salva no banco de dados) ##
    // const user = User.build({
    //     name: 'Fuano',
    //     age: 25
    // });    
    // await user.save();

    // ## create ##
    // const user = await User.create({
    //     name: 'Ciclano',
    //     age: 39
    // });


    // ------------------------------------------------------------------------------------------------
    // SELECT
    // ------------------------------------------------------------------------------------------------
    let users = await User.findAll();

    // let users = await User.findAll({
    //     where: {
    //         age: {
    //             [Op.gte]: 18
    //         }
    //     },
    //     order: [
    //         ['name', 'ASC']
    //     ],
    //     offset: 0,
    //     limit: 2
    //     // order: ['name']
    // });

    // let users = await User.findAll({
    //     where: {
    //         name: {
    //             [Op.like]: '%a%'
    //         }
    //     }

        // where: {
        //     age: {
        //         [Op.notIn]: [ 30, 55 ]
        //         // [Op.in]: [ 30, 55 ]
        //     }
        // }

        // where: {
        //     age: {
        //         // GT = Greather than | E = Equal | LT = Lower Than
        //         [Op.notBetween]: [40, 70]
        //         // [Op.between]: [40, 70]
        //         // [Op.gt]: 40, // > 40
        //         // [Op.gte]: 40, // >= 40
        //         // [Op.lt]: 40, // < 40
        //         // [Op.lte]: 40, // <= 40
        //     }
        // }

        // Treinando o where
        // where: {
        //     name: 'Roberto',
        //     age: [80, 15]
        // }

        // Varias maneiras de fazer o where
        // where: {
        //     age: [55, 30, 80]
        // }

        // where: {
        //     [Op.or]: [
        //         { age: 55 },
        //         { name: 'Paulo'}
        //     ]
        // }

        // where: {
        //     name: 'Chico',
        //     age: 90
        // }

        // attributes: { exclude: ['id', 'age'] }

        // attributes: ['name', 'age']

        // attributes: ['name', ['age', 'idade']],
        // raw: true
    // });
    
    // let age: number = 90;
    // let showOld: boolean = false;

    // if(age > 50) {
    //     showOld = true;
    // }

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        name: 'Bonieky',
        lastName: 'Lacerda',
        // showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [],
        users
    });
};