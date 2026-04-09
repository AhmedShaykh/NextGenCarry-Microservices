import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { YSLService } from "./ysl.service";
import { YSLDTO } from "./ysl.dto";

@Controller("ysl")
export class YSLController {

    constructor(private readonly service: YSLService) { };

    @Post()
    create(@Body() dto: YSLDTO) {
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