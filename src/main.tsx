import { render } from 'preact';

import { App } from './app.tsx';
import './style.css';
import initI18n from './i18n/index.ts';

const startApp = async (): Promise<void> => {
  await initI18n();
  render(<App />, document.getElementById('app')!);
};

startApp();
