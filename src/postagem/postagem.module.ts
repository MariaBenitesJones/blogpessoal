import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
import { PostagemConytroller } from "./controllers/postagem.controller";
import { TemaModule } from "src/tema/tema.module";
import { TemaService } from "src/tema/services/tema.service";

@Module({
    imports:[TypeOrmModule.forFeature([Postagem]), TemaModule],
    providers: [PostagemService, TemaService],
    controllers: [PostagemConytroller],
    exports: [TypeOrmModule]
})
export class PostagemModule {}