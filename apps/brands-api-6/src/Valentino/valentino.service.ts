import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { Valentino, ValentinoDocument } from "./valentino.schema";
import { InjectModel } from "@nestjs/mongoose";
import { ValentinoDTO } from "./valentino.dto";
import { Model } from "mongoose";

@Injectable()
export class ValentinoService {

    constructor(@InjectModel(Valentino.name) private readonly ValentinoModel: Model<ValentinoDocument>) { };

    async create(dto: ValentinoDTO) {

        try {

            const created = new this.ValentinoModel(dto);

            return await created.save();

        } catch (error: any) {

            if (error.code === 11000) {

                throw new ConflictException("ImageUrl Already Exists");

            }

            throw error;

        }

    };

    async findAll() {

        return this.ValentinoModel.find().sort({ createdAt: -1 });

    };

    async findOne(id: string) {

        const product = await this.ValentinoModel.findById(id);

        if (!product) {

            throw new NotFoundException(`Valentino With ID ${id} Not Found`);

        }

        return product;

    };

};