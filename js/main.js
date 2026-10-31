/**
 * BA 1204 / BA2026 Capstone Portfolio - Interactive Engine
 * Student: Manat Amir (DPA-2602, ID: 261434)
 * Astana IT University · School of Digital Public Administration
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initTabs();
  initPdfModal();
  initDatasetFilters();
  initCopyCode();
  initActiveNavLink();
});

/**
 * Mobile Navigation Toggle
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (toggleBtn && mainNav) {
    toggleBtn.addEventListener('click', () => {
      mainNav.classList.toggle('show');
      const isExpanded = mainNav.classList.contains('show');
      toggleBtn.setAttribute('aria-expanded', isExpanded);
    });
  }
}

/**
 * Highlight Current Nav Item
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/**
 * Tab Navigation Component
 */
function initTabs() {
  const tabContainers = document.querySelectorAll('[data-tabs]');

  tabContainers.forEach(container => {
    const tabButtons = container.querySelectorAll('.tab-btn');
    const tabContents = container.querySelectorAll('.tab-content');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab-target');

        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        const targetContent = container.querySelector(`#${targetId}`);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });

    // Handle hash on load (direct tab ID or nested anchor inside a tab)
    function activateHashTarget() {
      if (!window.location.hash) return;
      const hashId = window.location.hash.substring(1);
      const directBtn = container.querySelector(`[data-tab-target="${hashId}"]`);
      if (directBtn) {
        directBtn.click();
        return;
      }
      const nestedEl = container.querySelector(`#${CSS.escape(hashId)}`);
      if (nestedEl) {
        const parentTab = nestedEl.closest('.tab-content');
        if (parentTab && parentTab.id) {
          const parentBtn = container.querySelector(`[data-tab-target="${parentTab.id}"]`);
          if (parentBtn) parentBtn.click();
          nestedEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
    activateHashTarget();
    window.addEventListener('hashchange', activateHashTarget);
  });
}

/**
 * Interactive Modal PDF & Media Viewer
 */
function initPdfModal() {
  const modal = document.getElementById('pdfModal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close-btn');
  const modalTitle = modal.querySelector('#modalPdfTitle');
  const modalIframe = modal.querySelector('#modalPdfFrame');
  const modalDownload = modal.querySelector('#modalPdfDownload');

  // Trigger buttons with data-pdf-url
  document.querySelectorAll('[data-open-pdf]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const pdfUrl = btn.getAttribute('data-open-pdf');
      const title = btn.getAttribute('data-pdf-title') || 'Document Viewer';

      if (modalTitle) modalTitle.textContent = title;
      if (modalIframe) modalIframe.src = pdfUrl;
      if (modalDownload) modalDownload.href = pdfUrl;

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('active');
    if (modalIframe) modalIframe.src = '';
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/**
 * Dataset Table Search & Filters
 */
function initDatasetFilters() {
  const searchInput = document.getElementById('orderSearchInput');
  const filterChannel = document.getElementById('channelFilterSelect');
  const tableRows = document.querySelectorAll('#ordersTableBody tr');

  if (!searchInput && !filterChannel) return;

  function filterTable() {
    const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
    const channel = filterChannel ? filterChannel.value : 'all';

    tableRows.forEach(row => {
      const rowText = row.textContent.toLowerCase();
      const rowChannel = row.getAttribute('data-channel') || '';

      const matchesSearch = !query || rowText.includes(query);
      const matchesChannel = channel === 'all' || rowChannel.toLowerCase() === channel.toLowerCase();

      if (matchesSearch && matchesChannel) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }

  if (searchInput) searchInput.addEventListener('input', filterTable);
  if (filterChannel) filterChannel.addEventListener('change', filterTable);
}

/**
 * Copy Code Snippet Helper
 */
function initCopyCode() {
  document.querySelectorAll('.copy-code-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const codeEl = document.getElementById(targetId);
      if (codeEl) {
        navigator.clipboard.writeText(codeEl.innerText).then(() => {
          const originalText = btn.textContent;
          btn.textContent = 'Copied!';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('copied');
          }, 2000);
        });
      }
    });
  });
}
