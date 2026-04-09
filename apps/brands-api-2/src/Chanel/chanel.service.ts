import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ChanelDTO } from "./chanel.dto";

@Injectable()
export class ChanelService {

    constructor(private readonly prisma: PrismaService) { };

    async create(dto: ChanelDTO) {

        try {

            return await this.prisma.chanel.create({ data: dto });

        } catch (error: any) {

            if (error.code === "P2002") {

                throw new ConflictException("ImageUrl Already Exists");

            }

            throw error;

        }

    };

    async findAll() {

        return this.prisma.chanel.findMany({ orderBy: { createdAt: "desc" } });

    };

    async findOne(id: string) {

        const product = await this.prisma.chanel.findUnique({ where: { id } });

        if (!product) {

            throw new NotFoundException(`Chanel With ID ${id} Not Found`);

        }

        return product;

    };

};