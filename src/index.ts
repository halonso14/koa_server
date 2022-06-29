import { Command } from 'commander'
import getServer from './server'

const cmd = new Command()
cmd.option('-v, --verbose', 'Output message verbosely.')
cmd.option(
  '-c, --config <path>',
  'Config file location.',
  './config/config.json'
)
cmd.command('start').action(() => {
  const server = getServer();
  const port = 3000;
  server.listen(port, () => {
      console.log(`Server started at http://localhost:${port}.`);
    });
})
cmd.parse(process.argv)
