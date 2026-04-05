import { Controller, Get, Post, Body, Param, ParseIntPipe, HttpCode, HttpStatus } from "@nestjs/common";
import { CATService } from "./cat.service";
import { CATDTO } from "./cat.dto";

@Controller("categories")
export class CATController {

    constructor(private readonly catService: CATService) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto: CATDTO) {
        return this.catService.create(dto);
    };

    @Get()
    findAll() {
        return this.catService.findAll();
    };

    @Get(":id")
    findOne(@Param("id", ParseIntPipe) id: number) {
        return this.catService.findOne(id);
    };

};