import { IsNotEmpty } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn} from "typeorm";

@Entity({name: "tb_postagens"}) //CREATE TABLE tb_postagens{}
export class Postagem{

    @PrimaryGeneratedColumn() //id INT AUTO_INCREMENT PRIMATY KEY
    id: number;

    @IsNotEmpty() //Validação dos dados do objeto 
    @Column({length: 100, nullable: false}) //VARCHAR(100) NOT NULL
    titulo: string;

    @IsNotEmpty() //Validação dos dados do objeto 
    @Column({length: 1000, nullable: false}) //VARCHAR(100) NOT NULL
    texto: string;

    @UpdateDateColumn()
    data: Date;

}