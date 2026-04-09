import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { NikeDTO } from "./nike.dto";

@Injectable()
export class NikeService {

    constructor(private readonly prisma: PrismaService) { };

    async create(dto: NikeDTO) {

        try {

            return await this.prisma.nike.create({ data: dto });

        } catch (error: any) {

            if (error.code === "P2002") {

                throw new ConflictException("ImageUrl Already Exists");

            }

            throw error;

        }

    };

    async findAll() {

        return this.prisma.nike.findMany({ orderBy: { createdAt: "desc" } });

    };

    async findOne(id: string) {

        const product = await this.prisma.nike.findUnique({ where: { id } });

        if (!product) {

            throw new NotFoundException(`Nike With ID ${id} Not Found`);

        }

        return product;

    };

};