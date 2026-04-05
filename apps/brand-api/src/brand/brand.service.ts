import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { BrandDTO } from "./brand.dto";

@Injectable()
export class BrandService {

    constructor(private readonly prisma: PrismaService) { };

    async create(dto: BrandDTO) {
        return this.prisma.brand.create({
            data: dto
        });
    }

    async findAll() {
        return this.prisma.brand.findMany({
            orderBy: { createdAt: "desc" },
        });
    }

    async findOne(id: number) {
        const brand = await this.prisma.brand.findUnique({
            where: { id },
        });

        if (!brand) {
            throw new NotFoundException(`Brand with ID ${id} not found`);
        }

        return brand;
    }

};