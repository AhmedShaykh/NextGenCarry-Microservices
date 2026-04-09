import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { LVDTO } from "./lv.dto";

@Injectable()
export class LVService {

    constructor(private readonly prisma: PrismaService) { };

    async create(dto: LVDTO) {

        try {

            return await this.prisma.lV.create({ data: dto });

        } catch (error: any) {

            if (error.code === "P2002") {

                throw new ConflictException("ImageUrl Already Exists");

            }

            throw error;

        }

    };

    async findAll() {

        return this.prisma.lV.findMany({ orderBy: { createdAt: "desc" } });

    };

    async findOne(id: string) {

        const product = await this.prisma.lV.findUnique({ where: { id } });

        if (!product) {

            throw new NotFoundException(`LV With ID ${id} Not Found`);

        }

        return product;

    };

};