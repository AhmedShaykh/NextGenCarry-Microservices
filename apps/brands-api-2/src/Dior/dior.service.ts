import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { DiorDTO } from "./dior.dto";

@Injectable()
export class DiorService {

    constructor(private readonly prisma: PrismaService) { };

    async create(dto: DiorDTO) {

        try {

            return await this.prisma.dior.create({ data: dto });

        } catch (error: any) {

            if (error.code === "P2002") {

                throw new ConflictException("ImageUrl Already Exists");

            }

            throw error;

        }

    };

    async findAll() {

        return this.prisma.dior.findMany({ orderBy: { createdAt: "desc" } });

    };

    async findOne(id: string) {

        const product = await this.prisma.dior.findUnique({ where: { id } });

        if (!product) {

            throw new NotFoundException(`Dior With ID ${id} Not Found`);

        }

        return product;

    };

};