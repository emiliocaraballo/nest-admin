// Libraries
import { TypeOrmModule } from '@nestjs/typeorm';

// Config
import * as config from './ormconfig';

export const connection = TypeOrmModule.forRoot(config);