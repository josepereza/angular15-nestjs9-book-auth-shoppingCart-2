import { TypeOrmModule } from '@nestjs/typeorm';
import Book from './entities/book.entity';
import Category from './entities/category.entity';
import Order from './entities/order.entity';
import OrderItems from './entities/orderItems.entity';
import User from './entities/user.entity';

export const typeOrmConfig: TypeOrmModule = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'book_shop',
  entities: [User, Book, Category, Order, OrderItems],
  synchronize: true,
};
