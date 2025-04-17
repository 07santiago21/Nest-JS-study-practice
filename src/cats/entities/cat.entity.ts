import { Column, DeleteDateColumn, Entity, PrimaryColumn } from "typeorm";


@Entity()
export class Cat {
    @Column({primary:true, generated:true})
    id: number;

    @Column()
    name:string;

    @Column()
    age:number;
    
    @Column()
    bread:string;

    @DeleteDateColumn()
    delatedAt: Date
}
