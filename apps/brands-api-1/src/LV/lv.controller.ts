import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { LVService } from "./lv.service";
import { LVDTO } from "./lv.dto";

@Controller("lv")
export class LVController {

    constructor(private readonly service: LVService) { };

    @Post()
    create(@Body() dto: LVDTO) {
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