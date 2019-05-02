import { setDefaultTimeout, After, Status, BeforeAll, AfterAll } from 'cucumber';
import { browser } from 'protractor';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { MockedData } from './mocked-data';
import { MockedApi } from './mocked-api';

let mongod: MongoMemoryServer;

setDefaultTimeout(300 * 1000); // Bump step timeout to 300 seconds for older OS/browsers and VMs

async function startMockedApi() {
  console.log('\x1b[33m%s\x1b[0m', `Starting mongo-memory-server...`);
  mongod = new MongoMemoryServer(
    {
      instance: {
        port: 3000,
        dbName: 'a7new'
      }
    }
  );
  await mongod.getConnectionString().then(async (mongoUri) => {
    const mongooseOpts = { useNewUrlParser: true };
    mongoose.connection.on('error', (e) => {
      if (e.message.code === 'ETIMEDOUT') {
        console.log('\x1b[31m%s\x1b[0m', e);
        mongoose.connect(mongoUri, mongooseOpts);
      }
      console.log('\x1b[31m%s\x1b[0m', e);
    });
    await mongoose.connect(mongoUri, mongooseOpts).then(async () => {
      console.log('\x1b[32m%s\x1b[0m', `MongoDB successfully connected to ${mongoUri}`);
      await MockedData.insertData();
      await MockedApi.startApi();
    });
  });
}

async function stopMockedApi() {
  console.log('\x1b[33m%s\x1b[0m', `\nStopping mongo-memory-server...`);
  await mongoose.disconnect();
  await mongod.stop();
}

BeforeAll(() => {
  if (browser.params.useMockedApi) {
    return startMockedApi();
  }
});

AfterAll(() => {
  if (browser.params.useMockedApi) {
    return stopMockedApi();
  }
});

After(async function (scenarioResult) {
  if (scenarioResult.result.status === Status.FAILED) {
    // Attach the original state
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot, 'image/png');
  }
  return Promise.resolve(scenarioResult.result.status);
});
