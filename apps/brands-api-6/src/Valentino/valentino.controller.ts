import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { ValentinoService } from "./valentino.service";
import { ValentinoDTO } from "./valentino.dto";

@Controller("valentino")
export class ValentinoController {

    constructor(private readonly service: ValentinoService) { };

    @Post()
    create(@Body() dto: ValentinoDTO) {
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