import { DataSource } from 'typeorm';
import { configService } from './config.service';

const connectToDataSource = async () => {
  const dataSource = new DataSource(configService.getTypeOrmConfig());
  try {
    await dataSource.initialize();
    console.info('datasource successfully initialized');
    return dataSource;
  } catch (error) {
    console.error('an error occurred during datasource initialization');
  }
};

export const dataSource = connectToDataSource();
