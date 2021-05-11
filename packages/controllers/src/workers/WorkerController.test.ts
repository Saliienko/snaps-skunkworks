import Worker from '../../mocks/Worker';
import { WorkerController } from './WorkerController';

(global as any).Worker = Worker;

describe('Worker Controller', () => {
  it('can boot', async () => {
    const workerController = new WorkerController({
      setupWorkerConnection: () => {
        // do nothing
      },
      workerUrl: new URL('https://foo.bar.baz'),
    });
    expect(workerController).toBeDefined();
  });
  it('can create a plugin worker and get the workerId back', async () => {
    const workerController = new WorkerController({
      setupWorkerConnection: () => {
        // do nothing
      },
      workerUrl: new URL('https://foo.bar.baz'),
    });
    expect(
      typeof (await workerController.createPluginWorker({
        hostname: 'foo.bar.baz',
      })),
    ).toEqual('string');
  });
  it('can create a plugin worker and start the plugin', async () => {
    const workerController = new WorkerController({
      setupWorkerConnection: () => {
        // do nothing
      },
      workerUrl: new URL('https://foo.bar.baz'),
    });
    const pluginName = 'foo.bar.baz';
    const workerId = await workerController.createPluginWorker({
      hostname: pluginName,
    });
    const response = await workerController.startPlugin(workerId, {
      pluginName,
      sourceCode: `
        console.log('foo');
      `,
    });
    expect(response).toEqual({});
  });
});
