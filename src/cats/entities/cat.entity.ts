import { Breed } from "src/breeds/entities/breed.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm";


@Entity()
export class Cat {
    @Column({primary:true, generated:true})
    id: number;

    @Column()
    name:string;

    @Column()
    age:number;

    @DeleteDateColumn()
    delatedAt: Date


    @ManyToOne(()=>Breed,(breed)=>breed.id,{eager:true}) //eager es para que al hacer un findOne traiga la raza
    breed:Breed
} 
