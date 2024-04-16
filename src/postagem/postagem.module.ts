import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "./entities/postagem.entity";
import { PostagemService } from "./services/postagem.service";
import { PostagemConytroller } from "./controllers/postagem.controller";

@Module({
    imports:[TypeOrmModule.forFeature([Postagem])],
    providers: [PostagemService],
    controllers: [PostagemConytroller],
    exports: [TypeOrmModule]
})
export class PostagemModule {}