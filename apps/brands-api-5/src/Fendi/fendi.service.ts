import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { Fendi, FendiDocument } from "./fendi.schema";
import { InjectModel } from "@nestjs/mongoose";
import { FendiDTO } from "./fendi.dto";
import { Model } from "mongoose";

@Injectable()
export class FendiService {

    constructor(@InjectModel(Fendi.name) private readonly FendiModel: Model<FendiDocument>) { };

    async create(dto: FendiDTO) {

        try {

            const created = new this.FendiModel(dto);

            return await created.save();

        } catch (error: any) {

            if (error.code === 11000) {

                throw new ConflictException("ImageUrl Already Exists");

            }

            throw error;

        }

    };

    async findAll() {

        return this.FendiModel.find().sort({ createdAt: -1 });

    };

    async findOne(id: string) {

        const product = await this.FendiModel.findById(id);

        if (!product) {

            throw new NotFoundException(`Fendi With ID ${id} Not Found`);

        }

        return product;

    };

};