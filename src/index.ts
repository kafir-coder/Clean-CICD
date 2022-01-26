import 'module-alias/register'

import helmet from 'helmet';
import { connect } from 'mongoose';
import { StartProjectInit } from "@tsclean/core";

import { AppContainer } from "@/application/app";
import {MONGODB_URI, PORT} from "@/application/config/environment";

async function run(): Promise<void> {
  console.log(MONGODB_URI)
  await connect(MONGODB_URI);
  console.log('DB Mongo connected')
  const app = await StartProjectInit.create(AppContainer);
   app.use(helmet());
   await app.listen(PORT, () => console.log('Running on port: ' + PORT))
}

console.log("ola mundo")
run();
