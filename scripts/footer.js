// =============================================================================
// FOOTER — Componente compartilhado para todas as páginas
// =============================================================================

function block(title, links) {
  const items = links
    .map(([href, label]) => `<li><a href="${href}">${label}</a></li>`)
    .join('');
  return `
      <div class="site-footer__block">
        <h4>${title}</h4>
        <ul>${items}</ul>
      </div>`;
}

function buildFooterHTML() {
  return `
      <div class="site-footer__inner">
        <div class="site-footer__grid">
          <div class="site-footer__brand">
            <img src="/assets/logotipo.svg" alt="Astri Solutions" class="site-footer__logo" />
            <p>Coleção de páginas modulares para Relações com Investidores, construídas sobre um sistema de design único.</p>
          </div>
          <div class="site-footer__nav-grid">
            ${block('A Companhia', [
              ['/pages/a-companhia/visao-geral.html',           'Visão Geral'],
              ['/pages/a-companhia/nossa-historia.html',        'Nossa História'],
              ['/pages/a-companhia/estrategias-vantagens.html', 'Estratégias'],
              ['/pages/a-companhia/portfolio.html',             'Portfólio'],
            ])}
            ${block('Governança', [
              ['/pages/governanca/composicao-acionaria.html', 'Composição Acionária'],
              ['/pages/governanca/diretoria-conselho.html',   'Diretoria e Conselho'],
              ['/pages/governanca/estatuto-politicas.html',   'Estatuto e Políticas'],
              ['/pages/governanca/atas-assembleias.html',     'Atas de Assembleias'],
              ['/pages/governanca/codigo-conduta.html',       'Código de Conduta'],
              ['/pages/governanca/sustentabilidade.html',     'Sustentabilidade'],
            ])}
            ${block('Inf. Financeiras', [
              ['/pages/informacoes-financeiras/central-resultados.html', 'Central de Resultados'],
              ['/pages/informacoes-financeiras/apresentacoes.html',      'Apresentações'],
              ['/pages/informacoes-financeiras/dividendos-recompra.html','Dividendos e Recompra'],
              ['/pages/informacoes-financeiras/endividamento.html',      'Endividamento'],
            ])}
            ${block('Investidores', [
              ['/pages/investidores/como-investir.html',      'Como Investir'],
              ['/pages/investidores/calendario-eventos.html', 'Calendário de Eventos'],
              ['/pages/investidores/documentos-cvm.html',     'Documentos CVM'],
              ['/pages/investidores/ratings-cobertura.html',  'Ratings e Cobertura'],
            ])}
            ${block('Contato', [
              ['/pages/contato/fale-com-ri.html',       'Fale com RI'],
              ['/pages/contato/fatores-risco.html',     'Fatores de Risco'],
              ['/pages/contato/glossario.html',         'Glossário'],
              ['/pages/contato/mailing.html',           'Mailing'],
              ['/pages/contato/trabalhe-conosco.html',  'Trabalhe Conosco'],
            ])}
          </div>
        </div>
        <div class="site-footer__bottom">
          <span>© 2025 Astri Solutions. Todos os direitos reservados.</span>
          <span>Av. Brigadeiro Faria Lima, 2.277 · São Paulo, SP</span>
        </div>
      </div>`;
}

export function mountFooter() {
  const footer = document.querySelector('.site-footer');
  if (!footer) return;
  footer.innerHTML = buildFooterHTML();
}
