import { Controller, Get } from "@nestjs/common";
import { SesionService } from "./sesion.service";

@Controller("sesiones")
export class SesionController {
  constructor(private readonly sesionService: SesionService) {}

  @Get()
  findAll() {
    return this.sesionService.findAll();
  }
}
