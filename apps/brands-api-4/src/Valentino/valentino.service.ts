import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ValentinoDTO } from "./valentino.dto";

@Injectable()
export class ValentinoService {

    constructor(private readonly prisma: PrismaService) { };

    async seedValentino(data: ValentinoDTO[]) {

        if (!Array.isArray(data)) {

            throw new Error("Data Must Be An Array");

        }

        const result = await this.prisma.valentino.createMany({
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

    async create(dto: ValentinoDTO) {

        try {

            return await this.prisma.valentino.create({ data: dto });

        } catch (error: any) {

            if (error.code === "P2002") {

                throw new ConflictException("ImageUrl Already Exists");

            }

            throw error;

        }

    };

    async findAll() {

        return this.prisma.valentino.findMany({ orderBy: { createdAt: "desc" } });

    };

    async findOne(id: string) {

        const product = await this.prisma.valentino.findUnique({ where: { id } });

        if (!product) {

            throw new NotFoundException(`Valentino With ID ${id} Not Found`);

        }

        return product;

    };

};