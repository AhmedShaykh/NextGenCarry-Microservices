import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CATDTO } from "./cat.dto";

@Injectable()
export class CATService {

    constructor(private readonly prisma: PrismaService) { };

    async create(dto: CATDTO) {
        return this.prisma.cat.create({
            data: dto
        });
    }

    async findAll() {
        return this.prisma.cat.findMany({
            orderBy: { createdAt: "desc" },
        });
    }

    async findOne(id: number) {
        const brand = await this.prisma.cat.findUnique({
            where: { id },
        });

        if (!brand) {
            throw new NotFoundException(`Brand with ID ${id} not found`);
        }

        return brand;
    }

};