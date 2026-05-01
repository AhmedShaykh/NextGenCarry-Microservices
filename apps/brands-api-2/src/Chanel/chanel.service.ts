import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ChanelDTO } from "./chanel.dto";

@Injectable()
export class ChanelService {

    constructor(private readonly prisma: PrismaService) { };

    async seedChanel(data: ChanelDTO[]) {

        if (!Array.isArray(data)) {

            throw new Error("Data Must Be An Array");

        }

        const result = await this.prisma.chanel.createMany({
            data: data.map(item => ({
                title: item.title,
                desc: item.desc,
                imageUrl: item.imageUrl,
                category: item.category
            })),
            skipDuplicates: true
        });

        return {
            message: "Seed Completed",
            inserted: result.count,
            received: data.length
        };

    };

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