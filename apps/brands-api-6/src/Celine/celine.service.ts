import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { Celine, CelineDocument } from "./celine.schema";
import { InjectModel } from "@nestjs/mongoose";
import { CelineDTO } from "./celine.dto";
import { Model } from "mongoose";

@Injectable()
export class CelineService {

    constructor(@InjectModel(Celine.name) private readonly CelineModel: Model<CelineDocument>) { };

    async create(dto: CelineDTO) {

        try {

            const created = new this.CelineModel(dto);

            return await created.save();

        } catch (error: any) {

            if (error.code === 11000) {

                throw new ConflictException("ImageUrl Already Exists");

            }

            throw error;

        }

    };

    async findAll() {

        return this.CelineModel.find().sort({ createdAt: -1 });

    };

    async findOne(id: string) {

        const product = await this.CelineModel.findById(id);

        if (!product) {

            throw new NotFoundException(`Celine With ID ${id} Not Found`);

        }

        return product;

    };

};