import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { PradaService } from "./prada.service";
import { PradaDTO } from "./prada.dto";

@Controller("prada")
export class PradaController {

    constructor(private readonly service: PradaService) { };

    @Post()
    create(@Body() dto: PradaDTO) {
        return this.service.create(dto);
    };

    @Get()
    findAll() {
        return this.service.findAll();
    };

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.service.findOne(id);
    };

};