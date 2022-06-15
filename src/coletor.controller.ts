import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { col } from "sequelize/types";
import { Coletor } from "./coletor.model";
import { ColetorServices } from "./coletor.services";


@Controller('coletor')
export class ColetorController{
    constructor(private coletorServices: ColetorServices){

    }

    @Get()
    async ObterTodos(): Promise<Coletor[]> {
        return this.coletorServices.ObterTodos();  
    }

    @Get(':id')
    async ObterUm(@Param() params): Promise<Coletor> {
        return this.coletorServices.ObterUm(params.id);
    }

    @Post('criar')
    criar(@Body() coletor: Coletor) {
        console.log('listando coletor cadastrado')
        console.log(coletor)
       this.coletorServices.criar(coletor)
        
    }

    @Put('alterar')
    async alterar(@Body() coletor: Coletor): Promise<[number]> {
        return this.coletorServices.alterar(coletor);
    }

    @Delete(':id')
    async apagar(@Param()params) {
        this.coletorServices.apagar(params.id)
    }
}