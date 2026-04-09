import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { HermesDTO } from "./hermes.dto";

@Injectable()
export class HermesService {

    constructor(private readonly prisma: PrismaService) { };

    async create(dto: HermesDTO) {

        try {

            return await this.prisma.hermes.create({ data: dto });

        } catch (error: any) {

            if (error.code === "P2002") {

                throw new ConflictException("ImageUrl Already Exists");

            }

            throw error;

        }

    };

    async findAll() {

        return this.prisma.hermes.findMany({ orderBy: { createdAt: "desc" } });

    };

    async findOne(id: string) {

        const product = await this.prisma.hermes.findUnique({ where: { id } });

        if (!product) {

            throw new NotFoundException(`Hermes With ID ${id} Not Found`);

        }

        return product;

    };

};