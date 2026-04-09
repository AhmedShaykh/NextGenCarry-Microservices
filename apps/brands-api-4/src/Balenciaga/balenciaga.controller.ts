import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { BalenciagaService } from "./balenciaga.service";
import { BalenciagaDTO } from "./balenciaga.dto";

@Controller("balenciaga")
export class BalenciagaController {

    constructor(private readonly service: BalenciagaService) { };

    @Post()
    create(@Body() dto: BalenciagaDTO) {
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