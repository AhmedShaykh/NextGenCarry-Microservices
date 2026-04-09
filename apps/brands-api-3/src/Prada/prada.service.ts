import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { PradaDTO } from "./prada.dto";

@Injectable()
export class PradaService {

    constructor(private readonly prisma: PrismaService) { };

    async create(dto: PradaDTO) {

        try {

            return await this.prisma.prada.create({ data: dto });

        } catch (error: any) {

            if (error.code === "P2002") {

                throw new ConflictException("ImageUrl Already Exists");

            }

            throw error;

        }

    };

    async findAll() {

        return this.prisma.prada.findMany({ orderBy: { createdAt: "desc" } });

    };

    async findOne(id: string) {

        const product = await this.prisma.prada.findUnique({ where: { id } });

        if (!product) {

            throw new NotFoundException(`Prada With ID ${id} Not Found`);

        }

        return product;

    };

};