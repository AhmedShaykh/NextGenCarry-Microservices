import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { GucciService } from "./gucci.service";
import { GucciDTO } from "./gucci.dto";

@Controller("gucci")
export class GucciController {

    constructor(private readonly service: GucciService) { };

    @Post()
    create(@Body() dto: GucciDTO) {
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