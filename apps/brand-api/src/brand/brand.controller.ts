import { Controller, Get, Post, Body, Param, ParseIntPipe, HttpCode, HttpStatus } from "@nestjs/common";
import { BrandDTO } from "./brand.dto";
import { BrandService } from "./brand.service";

@Controller("brands")
export class BrandController {

    constructor(private readonly brandService: BrandService) { }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto: BrandDTO) {
        return this.brandService.create(dto);
    };

    @Get()
    findAll() {
        return this.brandService.findAll();
    };

    @Get(":id")
    findOne(@Param("id", ParseIntPipe) id: number) {
        return this.brandService.findOne(id);
    };

};