import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Sesion } from "./entities/sesion.entity";

@Injectable()
export class SesionService {
  constructor(
    @InjectRepository(Sesion)
    private readonly sesionRepository: Repository<Sesion>,
  ) {}

  findAll() {
    return this.sesionRepository
      .createQueryBuilder("registro")
      .innerJoinAndSelect("registro.gimnasio", "principal")
      .orderBy("registro.id", "ASC")
      .getMany();
  }
}
