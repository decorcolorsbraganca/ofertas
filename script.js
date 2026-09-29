// O rastreamento não interfere na abertura dos links do WhatsApp.
document.querySelectorAll('a[data-track]').forEach((link) => {
  link.addEventListener('click', () => {
    const isCommunity = link.dataset.track === 'community';
    const eventName = isCommunity ? 'decor_community_click' : 'decor_contact_click';
    const contentName = isCommunity
      ? 'Comunidade de Ofertas Decor Colors BP'
      : 'Consultor Decor Colors BP';

    if (typeof window.fbq === 'function') {
      window.fbq('track', isCommunity ? 'Lead' : 'Contact', {
        content_name: contentName,
        content_category: 'WhatsApp',
      });
    }

    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        click_location: link.dataset.trackLocation,
        link_url: link.href,
      });
    }
  });
});
