
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/sensors",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/sensors"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 670, hash: '76ac76e4e57e045899f7d5fdaa69ba5ca09594a15d16fb8c06159849495e6b94', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 951, hash: '72f79037dc7321b709b34fbb99b980490c411f269c866ab71d985340a6c2cb6f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sensors/index.html': {size: 4765, hash: '731a904d7db6d1dd1fa77bf7af5c5746d53227fd98e93ad217d93d46a0efe601', text: () => import('./assets-chunks/sensors_index_html.mjs').then(m => m.default)},
    'styles-2XBYA4Y3.css': {size: 131, hash: '3Q9RH7VZ15E', text: () => import('./assets-chunks/styles-2XBYA4Y3_css.mjs').then(m => m.default)}
  },
};
