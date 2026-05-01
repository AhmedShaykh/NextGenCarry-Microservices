import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { CelineService } from "./celine.service";
import { CelineDTO } from "./celine.dto";

@Controller("celine")
export class CelineController {

    constructor(private readonly service: CelineService) { };

    @Post("seed")
    async seedCeline(@Body() data: CelineDTO[]) {
        return this.service.seedCeline(data);
    };

    @Post()
    create(@Body() dto: CelineDTO) {
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