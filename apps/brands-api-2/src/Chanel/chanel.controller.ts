import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { ChanelService } from "./chanel.service";
import { ChanelDTO } from "./chanel.dto";

@Controller("chanel")
export class ChanelController {

    constructor(private readonly service: ChanelService) { };

    @Post()
    create(@Body() dto: ChanelDTO) {
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