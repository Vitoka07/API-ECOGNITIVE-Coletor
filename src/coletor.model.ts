
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Coletor extends Model<Coletor> {

    
    @Column({
        type: DataType.STRING(60), 
        allowNull: false,
    })
    nome: string;

    @Column({
        type: DataType.STRING(60), 
        allowNull: false,
    })
    tipo: string;

    @Column({
        type: DataType.DECIMAL(10, 2), 
        allowNull: false,
    })
    quantidade: number;
 
     
}