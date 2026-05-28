// =============================================================================
// NAVBAR — Componente compartilhado para todas as páginas
// =============================================================================

import { initNav } from './nav.js';

const CHEVRON = `<svg class="nav-list__chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="4 6 8 10 12 6"/></svg>`;

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
        <button class="site-header__hamburger" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="site-nav" data-nav-hamburger>
          <span></span>
          <span></span>
          <span></span>
        </button>
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

export function mountNavbar() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  header.innerHTML = buildNavHTML();
  markCurrentPage(header);
  initNav();
}
