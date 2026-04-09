import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { FendiService } from "./fendi.service";
import { FendiDTO } from "./fendi.dto";

@Controller("fendi")
export class FendiController {

    constructor(private readonly service: FendiService) { };

    @Post()
    create(@Body() dto: FendiDTO) {
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