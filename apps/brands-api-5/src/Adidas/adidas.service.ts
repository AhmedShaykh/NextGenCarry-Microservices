import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { Adidas, AdidasDocument } from "./adidas.schema";
import { InjectModel } from "@nestjs/mongoose";
import { AdidasDTO } from "./adidas.dto";
import { Model } from "mongoose";

@Injectable()
export class AdidasService {

    constructor(@InjectModel(Adidas.name) private readonly AdidasModel: Model<AdidasDocument>) { };

    async create(dto: AdidasDTO) {

        try {

            const created = new this.AdidasModel(dto);

            return await created.save();

        } catch (error: any) {

            if (error.code === 11000) {

                throw new ConflictException("ImageUrl Already Exists");

            }

            throw error;

        }

    };

    async findAll() {

        return this.AdidasModel.find().sort({ createdAt: -1 });

    };

    async findOne(id: string) {

        const product = await this.AdidasModel.findById(id);

        if (!product) {

            throw new NotFoundException(`Adidas With ID ${id} Not Found`);

        }

        return product;

    };

};