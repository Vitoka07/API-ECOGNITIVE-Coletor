import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColetorController } from './coletor.controller';
import { Coletor } from './coletor.model';
import { ColetorServices } from './coletor.services';

@Module({
  imports: [
    
    SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Tristanaismymain11769',
    database: 'banco_de_dados_ecognitive',
    autoLoadModels: true,
    synchronize: true,
  }),
  SequelizeModule.forFeature([ Coletor ])
],
  controllers: [AppController, ColetorController],
  providers: [AppService, ColetorServices],
})
export class AppModule {}
