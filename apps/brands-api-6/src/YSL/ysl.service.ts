import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { YSL, YSLDocument } from "./ysl.schema";
import { InjectModel } from "@nestjs/mongoose";
import { YSLDTO } from "./ysl.dto";
import { Model } from "mongoose";

@Injectable()
export class YSLService {

    constructor(@InjectModel(YSL.name) private readonly YSLModel: Model<YSLDocument>) { };

    async seedYSL(data: YSLDTO[]) {

        if (!Array.isArray(data)) {

            throw new Error("Data Must Be An Array");

        }

        try {

            const result = await this.YSLModel.insertMany(
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

    async create(dto: YSLDTO) {

        try {

            const created = new this.YSLModel(dto);

            return await created.save();

        } catch (error: any) {

            if (error.code === 11000) {

                throw new ConflictException("ImageUrl Already Exists");

            }

            throw error;

        }

    };

    async findAll() {

        return this.YSLModel.find().sort({ createdAt: -1 });

    };

    async findOne(id: string) {

        const product = await this.YSLModel.findById(id);

        if (!product) {

            throw new NotFoundException(`YSL With ID ${id} Not Found`);

        }

        return product;

    };

};