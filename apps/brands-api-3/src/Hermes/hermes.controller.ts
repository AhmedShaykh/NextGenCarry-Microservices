import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { HermesService } from "./hermes.service";
import { HermesDTO } from "./hermes.dto";

@Controller("hermes")
export class HermesController {

    constructor(private readonly service: HermesService) { };

    @Post()
    create(@Body() dto: HermesDTO) {
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