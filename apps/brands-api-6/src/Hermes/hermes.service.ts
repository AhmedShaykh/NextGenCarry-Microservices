import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { Hermes, HermesDocument } from "./hermes.schema";
import { InjectModel } from "@nestjs/mongoose";
import { HermesDTO } from "./hermes.dto";
import { Model } from "mongoose";

@Injectable()
export class HermesService {

    constructor(@InjectModel(Hermes.name) private readonly HermesModel: Model<HermesDocument>) { };

    async seedHermes(data: HermesDTO[]) {

        if (!Array.isArray(data)) {

            throw new Error("Data Must Be An Array");

        }

        try {

            const result = await this.HermesModel.insertMany(
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

    async create(dto: HermesDTO) {

        try {

            const created = new this.HermesModel(dto);

            return await created.save();

        } catch (error: any) {

            if (error.code === 11000) {

                throw new ConflictException("ImageUrl Already Exists");

            }

            throw error;

        }

    };

    async findAll() {

        return this.HermesModel.find().sort({ createdAt: -1 });

    };

    async findOne(id: string) {

        const product = await this.HermesModel.findById(id);

        if (!product) {

            throw new NotFoundException(`Hermes With ID ${id} Not Found`);

        }

        return product;

    };

};