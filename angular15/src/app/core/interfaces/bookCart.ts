export interface BookCart {
    id: number,
    title: string,
    qty:number,
    price: number,
    image: string,
    category:number
}


/* {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', nullable: true, unique: true })
    title: string;
  
    @Column({ type: 'varchar', nullable: true })
    publishedYear: string;
  
    @Column({ nullable: true, type: 'varchar' })
    authorName: string;
  
    @Column({ nullable: false, type: 'int' })
    price: number;
  
    @Column({ nullable: false, type: 'int', default: 0 })
    noOfCopies: number;
  
    @Column({ nullable: false, type: 'boolean', default: false })
    soldOut: boolean;
  
    @Column({ nullable: true, type: 'varchar' })
    image: string;
  
    @ManyToOne(() => Category, (category) => category.book, {
      nullable: false,
      eager: true,
      onDelete: 'CASCADE',
    })
    category: Category;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @OneToMany(() => OrderItems, (orderItem) => orderItem.book)
    orderItem: OrderItems[];
  } */