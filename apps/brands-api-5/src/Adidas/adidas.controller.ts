import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { AdidasService } from "./adidas.service";
import { AdidasDTO } from "./adidas.dto";

@Controller("adidas")
export class AdidasController {

    constructor(private readonly service: AdidasService) { };

    @Post()
    create(@Body() dto: AdidasDTO) {
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