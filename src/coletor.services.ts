import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { NUMBER } from "sequelize";
import { col } from "sequelize/types";
import { Col } from "sequelize/types/utils";
import { Coletor } from "./coletor.model";


@Injectable()
export class ColetorServices{
    constructor(
        @InjectModel(Coletor)
        private coletorModel: typeof Coletor
    ) {}

    async ObterTodos(): Promise<Coletor[]> {
        return this.coletorModel.findAll();  
    }

    async ObterUm(id: number): Promise<Coletor>{
        return this.coletorModel.findByPk(id)
    } 

    async criar(coletor: Coletor) {
        console.log('listando coletor cadastrado/service')
        console.log(coletor)
        this.coletorModel.create(coletor)
    }
    
    
     async alterar(coletor: Coletor): Promise<[number]> 
     {  console.log('edição coletor')
        console.log(coletor.id)
        return this.coletorModel.update(coletor,  {
            where: {
                id: coletor.id
            }
        });
    } 


    async apagar(id: number) {
        const coletor: Coletor = await this.ObterUm(id);
        coletor.destroy();
    }
}
