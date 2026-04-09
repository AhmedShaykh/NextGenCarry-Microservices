import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { RolexService } from "./rolex.service";
import { RolexDTO } from "./rolex.dto";

@Controller("rolex")
export class RolexController {

    constructor(private readonly service: RolexService) { };

    @Post()
    create(@Body() dto: RolexDTO) {
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