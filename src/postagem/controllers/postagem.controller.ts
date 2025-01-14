import { Controller } from "@nestjs/common";
import { PostagemService } from "../service/postagem.service";
import { Postagem } from "../entities/postagem.entity"
import { Get, HttpCode, HttpStatus } from "@nestjs/common";


@Controller("/postagens")
export class PostagemController{

    constructor(
        private readonly postagemService: PostagemService

    ){}

    @Get()
    @HttpCode(HttpStatus.OK)
        findall(): Promise<Postagem[]>{
            return this.postagemService.findAll();
        }

}