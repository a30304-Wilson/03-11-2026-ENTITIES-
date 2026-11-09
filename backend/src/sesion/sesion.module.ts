import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Gimnasio } from "../gimnasio/entities/gimnasio.entity";
import { Sesion } from "./entities/sesion.entity";
import { SesionController } from "./sesion.controller";
import { SesionService } from "./sesion.service";

@Module({
  imports: [TypeOrmModule.forFeature([Gimnasio, Sesion])],
  controllers: [SesionController],
  providers: [SesionService],
})
export class SesionModule {}
