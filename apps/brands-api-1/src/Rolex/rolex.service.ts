import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { RolexDTO } from "./rolex.dto";

@Injectable()
export class RolexService {

    constructor(private readonly prisma: PrismaService) { };

    async seedRolex(data: RolexDTO[]) {

        if (!Array.isArray(data)) {

            throw new Error("Data Must Be An Array");

        }

        const result = await this.prisma.rolex.createMany({
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

    async create(dto: RolexDTO) {

        try {

            return await this.prisma.rolex.create({ data: dto });

        } catch (error: any) {

            if (error.code === "P2002") {

                throw new ConflictException("ImageUrl Already Exists");

            }

            throw error;

        }

    };

    async findAll() {

        return this.prisma.rolex.findMany({ orderBy: { createdAt: "desc" } });

    };

    async findOne(id: string) {

        const product = await this.prisma.rolex.findUnique({ where: { id } });

        if (!product) {

            throw new NotFoundException(`Rolex With ID ${id} Not Found`);

        }

        return product;

    };

};