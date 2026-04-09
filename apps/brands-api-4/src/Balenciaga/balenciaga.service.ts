import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { BalenciagaDTO } from "./balenciaga.dto";

@Injectable()
export class BalenciagaService {

    constructor(private readonly prisma: PrismaService) { };

    async create(dto: BalenciagaDTO) {

        try {

            return await this.prisma.balenciaga.create({ data: dto });

        } catch (error: any) {

            if (error.code === "P2002") {

                throw new ConflictException("ImageUrl Already Exists");

            }

            throw error;

        }

    };

    async findAll() {

        return this.prisma.balenciaga.findMany({ orderBy: { createdAt: "desc" } });

    };

    async findOne(id: string) {

        const product = await this.prisma.balenciaga.findUnique({ where: { id } });

        if (!product) {

            throw new NotFoundException(`Balenciaga With ID ${id} Not Found`);

        }

        return product;

    };

};