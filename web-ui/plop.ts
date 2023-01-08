import minimist from "minimist";
import { Plop, run } from "plop";
import process from "process";

const args = process.argv.slice(2);
const argv = minimist(args);

Plop.prepare({
  cwd: argv.cwd,
  configPath: argv.plopfile,
  preload: argv.preload || [],
  completion: argv.completion
}, env => Plop.execute(env,  (env) => {
  return run(env, undefined, true)
}));
