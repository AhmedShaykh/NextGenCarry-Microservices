import { Injectable, NotFoundException, ConflictException } from "@nestjs/common";
import { Rolex, RolexDocument } from "./rolex.schema";
import { InjectModel } from "@nestjs/mongoose";
import { RolexDTO } from "./rolex.dto";
import { Model } from "mongoose";

@Injectable()
export class RolexService {

    constructor(@InjectModel(Rolex.name) private readonly RolexModel: Model<RolexDocument>) { };

    async create(dto: RolexDTO) {

        try {

            const created = new this.RolexModel(dto);

            return await created.save();

        } catch (error: any) {

            if (error.code === 11000) {

                throw new ConflictException("ImageUrl Already Exists");

            }

            throw error;

        }

    };

    async findAll() {

        return this.RolexModel.find().sort({ createdAt: -1 });

    };

    async findOne(id: string) {

        const product = await this.RolexModel.findById(id);

        if (!product) {

            throw new NotFoundException(`Rolex With ID ${id} Not Found`);

        }

        return product;

    };

};