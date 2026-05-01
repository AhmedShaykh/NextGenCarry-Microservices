import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { DiorService } from "./dior.service";
import { DiorDTO } from "./dior.dto";

@Controller("dior")
export class DiorController {

    constructor(private readonly service: DiorService) { };

    @Post("seed")
    async seedDior(@Body() data: DiorDTO[]) {
        return this.service.seedDior(data);
    };

    @Post()
    create(@Body() dto: DiorDTO) {
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