import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { NikeService } from "./nike.service";
import { NikeDTO } from "./nike.dto";

@Controller("nike")
export class NikeController {

    constructor(private readonly service: NikeService) { };

    @Post()
    create(@Body() dto: NikeDTO) {
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