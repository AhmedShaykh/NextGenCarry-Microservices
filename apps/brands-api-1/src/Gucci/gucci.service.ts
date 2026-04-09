import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { GucciDTO } from "./gucci.dto";

@Injectable()
export class GucciService {

    constructor(private readonly prisma: PrismaService) { };

    async create(dto: GucciDTO) {

        try {

            return await this.prisma.gucci.create({ data: dto });

        } catch (error: any) {

            if (error.code === "P2002") {

                throw new ConflictException("ImageUrl Already Exists");

            }

            throw error;

        }

    };

    async findAll() {

        return this.prisma.gucci.findMany({ orderBy: { createdAt: "desc" } });

    };

    async findOne(id: string) {

        const product = await this.prisma.gucci.findUnique({ where: { id } });

        if (!product) {

            throw new NotFoundException(`Gucci With ID ${id} Not Found`);

        }

        return product;

    };

};