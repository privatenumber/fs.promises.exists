import { expectType } from 'tsd';
import fsExists from './index.js';

expectType<Promise<boolean>>(fsExists('./'));
