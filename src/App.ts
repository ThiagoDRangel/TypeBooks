import express = require('express');

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.app.use(express.json());

    // no remove this route
    this.app.get('/', (_req, res) => res.status(200).send('Server TypeBooks response!'));
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`API TypeBooks ON in PORT ${PORT}!`));
  }
}

export default App;
