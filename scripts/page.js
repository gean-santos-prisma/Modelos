// =============================================================================
// PAGE — Init compartilhado para páginas internas
// =============================================================================

import { mountNavbar } from './navbar.js';
import { mountFooter } from './footer.js';

document.addEventListener('DOMContentLoaded', () => {
  mountNavbar();
  mountFooter();
});
