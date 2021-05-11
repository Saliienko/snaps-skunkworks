class Worker {
  public url: string;

  private onmessage: any;

  constructor(stringUrl: string) {
    this.url = stringUrl;
    this.onmessage = () => {
      // gets replaced
    };
  }

  postMessage(msg: unknown) {
    console.log(`WORKER:MOCK: ${JSON.stringify(msg, null, 4)}`);
    this.onmessage(msg);
  }
}

export default Worker;
