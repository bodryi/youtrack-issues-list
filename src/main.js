import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    youtrackUrl: 'https://youtrack.protei.ru',
  },
});

export default app;
