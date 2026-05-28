// =============================================================================
// NAVBAR — Componente compartilhado para todas as páginas
// =============================================================================

import { initNav } from './nav.js';

const CHEVRON = `<svg class="nav-list__chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 6 8 10 12 6"/></svg>`;

const SEARCH_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;

const CLOSE_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

function li(href, label) {
  return `<li><a class="nav-dropdown__link" href="${href}">${label}</a></li>`;
}

function buildNavHTML() {
  return `
      <div class="site-header__inner">
        <a href="/" class="site-header__brand" aria-label="Astri Solutions">
          <img src="/assets/logotipo.svg" alt="Astri Solutions" class="site-header__logo" />
        </a>
        <nav class="site-header__nav" id="site-nav" data-nav aria-label="Principal">
          <ul class="nav-list">

            <li class="nav-list__item">
              <a href="/" class="nav-list__link">Home</a>
            </li>

            <li class="nav-list__item nav-list__item--has-sub">
              <button class="nav-list__trigger" type="button" aria-haspopup="true" aria-expanded="false" data-nav-trigger>
                A Companhia ${CHEVRON}
              </button>
              <ul class="nav-dropdown">
                ${li('/pages/a-companhia/visao-geral.html', 'Visão Geral')}
                ${li('/pages/a-companhia/nossa-historia.html', 'Nossa História')}
                ${li('/pages/a-companhia/estrategias-vantagens.html', 'Estratégias')}
                ${li('/pages/a-companhia/portfolio.html', 'Portfólio')}
              </ul>
            </li>

            <li class="nav-list__item nav-list__item--has-sub">
              <button class="nav-list__trigger" type="button" aria-haspopup="true" aria-expanded="false" data-nav-trigger>
                Governança ${CHEVRON}
              </button>
              <ul class="nav-dropdown">
                ${li('/pages/governanca/composicao-acionaria.html', 'Composição Acionária')}
                ${li('/pages/governanca/diretoria-conselho.html', 'Diretoria e Conselho')}
                ${li('/pages/governanca/estatuto-politicas.html', 'Estatuto e Políticas')}
                ${li('/pages/governanca/atas-assembleias.html', 'Atas de Assembleias')}
                ${li('/pages/governanca/codigo-conduta.html', 'Código de Conduta')}
                ${li('/pages/governanca/sustentabilidade.html', 'Sustentabilidade')}
              </ul>
            </li>

            <li class="nav-list__item nav-list__item--has-sub">
              <button class="nav-list__trigger" type="button" aria-haspopup="true" aria-expanded="false" data-nav-trigger>
                Inf. Financeiras ${CHEVRON}
              </button>
              <ul class="nav-dropdown">
                ${li('/pages/informacoes-financeiras/central-resultados.html', 'Central de Resultados')}
                ${li('/pages/informacoes-financeiras/apresentacoes.html', 'Apresentações')}
                ${li('/pages/informacoes-financeiras/dividendos-recompra.html', 'Dividendos e Recompra')}
                ${li('/pages/informacoes-financeiras/endividamento.html', 'Endividamento')}
              </ul>
            </li>

            <li class="nav-list__item nav-list__item--has-sub">
              <button class="nav-list__trigger" type="button" aria-haspopup="true" aria-expanded="false" data-nav-trigger>
                Investidores ${CHEVRON}
              </button>
              <ul class="nav-dropdown">
                ${li('/pages/investidores/como-investir.html', 'Como Investir')}
                ${li('/pages/investidores/calendario-eventos.html', 'Calendário de Eventos')}
                ${li('/pages/investidores/documentos-cvm.html', 'Documentos CVM')}
                ${li('/pages/investidores/ratings-cobertura.html', 'Ratings e Cobertura')}
              </ul>
            </li>

            <li class="nav-list__item nav-list__item--has-sub">
              <button class="nav-list__trigger" type="button" aria-haspopup="true" aria-expanded="false" data-nav-trigger>
                Contato ${CHEVRON}
              </button>
              <ul class="nav-dropdown">
                ${li('/pages/contato/fale-com-ri.html', 'Fale com RI')}
                ${li('/pages/contato/fatores-risco.html', 'Fatores de Risco')}
                ${li('/pages/contato/glossario.html', 'Glossário')}
                ${li('/pages/contato/mailing.html', 'Mailing')}
                ${li('/pages/contato/trabalhe-conosco.html', 'Trabalhe Conosco')}
              </ul>
            </li>

          </ul>
        </nav>
        <div class="site-header__actions">
          <button class="nav-search-btn" type="button" aria-label="Abrir busca" aria-expanded="false" aria-controls="search-overlay" data-nav-search>
            ${SEARCH_ICON}
          </button>
          <button class="site-header__hamburger" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="site-nav" data-nav-hamburger>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>`;
}

function buildSearchOverlayHTML() {
  return `
    <div class="search-overlay" id="search-overlay" aria-hidden="true" role="dialog" aria-label="Busca">
      <div class="search-overlay__backdrop" data-search-backdrop></div>
      <div class="search-overlay__body">
        <div class="search-overlay__inner">
          <input
            class="search-overlay__input"
            type="search"
            id="search-input"
            placeholder="Buscar no site…"
            aria-label="Buscar no site"
            autocomplete="off"
            spellcheck="false"
          />
          <button class="search-overlay__close" type="button" aria-label="Fechar busca" data-search-close>
            ${CLOSE_ICON}
            <span>Fechar</span>
          </button>
        </div>
      </div>
    </div>`;
}

function markCurrentPage(header) {
  const pathname = window.location.pathname;

  header.querySelectorAll('.nav-list__link').forEach((link) => {
    if (link.getAttribute('href') === pathname) {
      link.setAttribute('aria-current', 'page');
    }
  });

  header.querySelectorAll('.nav-dropdown__link').forEach((link) => {
    if (link.getAttribute('href') === pathname) {
      link.setAttribute('aria-current', 'page');
      const parentItem = link.closest('.nav-list__item--has-sub');
      parentItem?.querySelector('.nav-list__trigger')?.setAttribute('aria-current', 'page');
    }
  });
}

// ---------------------------------------------------------------------------
// Scroll behavior — visível no topo e durante o scroll, oculto quando para
// ---------------------------------------------------------------------------
function initScrollBehavior(header) {
  const TOP_THRESHOLD = 60;
  const HIDE_DELAY    = 1500;
  let hideTimer = null;

  function show() {
    header.classList.remove('is-hidden');
  }

  function hide() {
    if (window.scrollY > TOP_THRESHOLD) {
      header.classList.add('is-hidden');
    }
  }

  function onScroll() {
    show();
    clearTimeout(hideTimer);
    hideTimer = setTimeout(hide, HIDE_DELAY);
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // Se a página já está scrollada ao carregar, agenda o ocultamento
  if (window.scrollY > TOP_THRESHOLD) {
    hideTimer = setTimeout(hide, HIDE_DELAY);
  }
}

// ---------------------------------------------------------------------------
// Search overlay
// ---------------------------------------------------------------------------
function initSearch() {
  const overlay   = document.getElementById('search-overlay');
  const input     = document.getElementById('search-input');
  const searchBtn = document.querySelector('[data-nav-search]');
  const closeBtn  = document.querySelector('[data-search-close]');
  const backdrop  = document.querySelector('[data-search-backdrop]');

  if (!overlay || !input || !searchBtn) return;

  function openSearch() {
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    searchBtn.setAttribute('aria-expanded', 'true');
    // Aguarda a transição antes de focar
    setTimeout(() => input.focus(), 50);
    document.body.style.overflow = 'hidden';
  }

  function closeSearch() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    searchBtn.setAttribute('aria-expanded', 'false');
    input.value = '';
    document.body.style.overflow = '';
    searchBtn.focus();
  }

  searchBtn.addEventListener('click', openSearch);
  closeBtn?.addEventListener('click', closeSearch);
  backdrop?.addEventListener('click', closeSearch);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeSearch();
    }
  });
}

export function mountNavbar() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  header.innerHTML = buildNavHTML();
  markCurrentPage(header);
  initNav();
  initScrollBehavior(header);

  // Injeta overlay de busca no body (uma única vez)
  if (!document.getElementById('search-overlay')) {
    document.body.insertAdjacentHTML('beforeend', buildSearchOverlayHTML());
  }
  initSearch();
}
