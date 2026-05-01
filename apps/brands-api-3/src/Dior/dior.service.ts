import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { DiorDTO } from "./dior.dto";

@Injectable()
export class DiorService {

    constructor(private readonly prisma: PrismaService) { };

    async seedDior(data: DiorDTO[]) {

        if (!Array.isArray(data)) {

            throw new Error("Data Must Be An Array");

        }

        const result = await this.prisma.dior.createMany({
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