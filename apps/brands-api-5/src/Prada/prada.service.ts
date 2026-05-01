import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { Prada, PradaDocument } from "./prada.schema";
import { InjectModel } from "@nestjs/mongoose";
import { PradaDTO } from "./prada.dto";
import { Model } from "mongoose";

@Injectable()
export class PradaService {

    constructor(@InjectModel(Prada.name) private readonly PradaModel: Model<PradaDocument>) { };

    async seedPrada(data: PradaDTO[]) {

        if (!Array.isArray(data)) {

            throw new Error("Data Must Be An Array");

        }

        try {

            const result = await this.PradaModel.insertMany(
                data.map(item => ({
                    title: item.title,
                    desc: item.desc,
                    imageUrl: item.imageUrl,
                    category: item.category
                })),
                { ordered: false }
            );

            return {
                message: "Seed Completed",
                inserted: result.length,
                received: data.length
            };

        } catch (err: any) {

            return { message: err.message };

        }

    };

    async create(dto: PradaDTO) {

        try {

            const created = new this.PradaModel(dto);

            return await created.save();

        } catch (error: any) {

            if (error.code === 11000) {

                throw new ConflictException("ImageUrl Already Exists");

            }

            throw error;

        }

    };

    async findAll() {

        return this.PradaModel.find().sort({ createdAt: -1 });

    };

    async findOne(id: string) {

        const product = await this.PradaModel.findById(id);

        if (!product) {

            throw new NotFoundException(`Prada With ID ${id} Not Found`);

        }

        return product;

    };

};