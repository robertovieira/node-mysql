import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

// criando o type igual ao banco de dados (Typescript)
export interface UserInterface extends Model {
    id: number;
    name: string;
    age: number;
}

// criando o type igual ao banco de dados (Sequelize)
export const User = sequelize.define<UserInterface>("User", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('name').toUpperCase();
        }
    },
    firstLetterOfName: {
        type: DataTypes.VIRTUAL,
        get() {
            let name: string = this.getDataValue('name');
            return name.charAt(0);
        }
    },
    age: {
        type: DataTypes.INTEGER,
        defaultValue: 18,
        set(value: number) {
            this.setDataValue('age', (value < 18) ? 18 : value);
        }
    }
}, {
    tableName: 'users',
    timestamps: false
});