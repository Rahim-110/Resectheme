/**
 * CTFd Resecurity Theme - Theme JavaScript
 * Handles theme-specific interactions and enhancements
 */

(function () {
  'use strict';

  // ========================================
  // INITIALIZATION
  // ========================================

  /**
   * Initialize theme
   */
  function initTheme() {
    setupEventListeners();
    setupAnimations();
    setupResponsiveness();
    initializeChallengeBridge();
  }

  // ========================================
  // EVENT LISTENERS
  // ========================================

  /**
   * Setup event listeners for interactive elements
   */
  function setupEventListeners() {
    // Close alerts
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach((alert) => {
      const closeBtn = document.createElement('button');
      closeBtn.className = 'alert-close';
      closeBtn.innerHTML = '&times;';
      closeBtn.style.cssText = `
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        margin-left: auto;
        color: inherit;
      `;
      closeBtn.onclick = () => {
        alert.style.opacity = '0';
        alert.style.transition = 'opacity 0.3s ease';
        setTimeout(() => alert.remove(), 300);
      };
      alert.appendChild(closeBtn);
    });

    // Smooth scroll for links
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Handle form submissions with loading state
    document.querySelectorAll('form').forEach((form) => {
      form.addEventListener('submit', function () {
        const submitBtn = this.querySelector('button[type="submit"]');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.style.opacity = '0.6';
        }
      });
    });
  }

  /**
   * Setup animations on scroll
   */
  function setupAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    });

    // Observe cards for animation
    document.querySelectorAll('.card, .challenge-card').forEach((card) => {
      observer.observe(card);
    });
  }

  /**
   * Setup responsive behavior
   */
  function setupResponsiveness() {
    // Handle navbar on mobile
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      // Add mobile menu toggle functionality if needed
      const navbarNav = document.querySelector('.navbar-nav');
      if (navbarNav) {
        // Mobile menu can be enhanced here
      }
    }
  }

  // ========================================
  // CTFd BRIDGE FUNCTIONS
  // ========================================

  /**
   * Initialize challenge-related functionality
   */
  function initializeChallengeBridge() {
    // Add custom flag submission with theme styling
    const flagForm = document.getElementById('submit-flag-form');
    if (flagForm) {
      setupFlagSubmission();
    }

    // Add challenge filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length > 0) {
      setupChallengeFiltering();
    }
  }

  /**
   * Setup flag submission handling
   */
  function setupFlagSubmission() {
    const form = document.getElementById('submit-flag-form');
    const input = document.getElementById('flag-input');
    const messageDiv = document.getElementById('flag-message');

    if (!form || !input || !messageDiv) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const flag = input.value.trim();
      if (!flag) return;

      // Show loading state
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting...';

      try {
        // Flag submission is handled by CTFd API
        // This is just theme-specific styling
        messageDiv.style.display = 'block';
        messageDiv.style.animation = 'slideInUp 0.3s ease-out';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }

  /**
   * Setup challenge filtering
   */
  function setupChallengeFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', function () {
        const category = this.dataset.category || '';

        filterButtons.forEach((b) => b.classList.remove('active'));
        this.classList.add('active');

        const cards = document.querySelectorAll('.challenge-card');
        cards.forEach((card) => {
          const cardCategory = card.dataset.category || '';
          if (category === '' || cardCategory === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.3s ease-in';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ========================================
  // UTILITY FUNCTIONS
  // ========================================

  /**
   * Format time difference for "last activity"
   */
  function formatTimeAgo(date) {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);
    let interval = Math.floor(seconds / 31536000);

    if (interval >= 1) return interval + ' year' + (interval > 1 ? 's' : '') + ' ago';
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) return interval + ' month' + (interval > 1 ? 's' : '') + ' ago';
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) return interval + ' day' + (interval > 1 ? 's' : '') + ' ago';
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) return interval + ' hour' + (interval > 1 ? 's' : '') + ' ago';
    interval = Math.floor(seconds / 60);
    if (interval >= 1) return interval + ' minute' + (interval > 1 ? 's' : '') + ' ago';

    return Math.floor(seconds) + ' second' + (Math.floor(seconds) > 1 ? 's' : '') + ' ago';
  }

  /**
   * Add loading class to button
   */
  function setButtonLoading(btn, isLoading) {
    if (isLoading) {
      btn.disabled = true;
      btn.style.opacity = '0.6';
    } else {
      btn.disabled = false;
      btn.style.opacity = '1';
    }
  }

  /**
   * Show notification
   */
  function showNotification(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.innerHTML = message;
    alertDiv.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 1000;
      max-width: 400px;
      animation: slideInDown 0.3s ease-out;
    `;

    document.body.appendChild(alertDiv);

    setTimeout(() => {
      alertDiv.style.animation = 'slideOutUp 0.3s ease-in';
      setTimeout(() => alertDiv.remove(), 300);
    }, 3000);
  }

  // ========================================
  // DARK MODE SUPPORT (Optional)
  // ========================================

  /**
   * Initialize dark mode toggle
   */
  function setupDarkMode() {
    const isDarkMode = localStorage.getItem('theme') === 'dark';
    if (isDarkMode) {
      document.documentElement.style.setProperty('--color-background', '#1a1a1a');
      document.documentElement.style.setProperty('--color-background-secondary', '#2a2a2a');
      document.documentElement.style.setProperty('--color-text-primary', '#ffffff');
      document.documentElement.style.setProperty('--color-text-secondary', '#b0b0b0');
    }
  }

  // ========================================
  // PERFORMANCE OPTIMIZATIONS
  // ========================================

  /**
   * Debounce function for resize/scroll events
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Throttle function for frequent events
   */
  function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  // ========================================
  // MODULE EXPORTS
  // ========================================

  // Expose utilities to window for CTFd integration
  window.Theme = {
    showNotification: showNotification,
    setButtonLoading: setButtonLoading,
    formatTimeAgo: formatTimeAgo,
    debounce: debounce,
    throttle: throttle,
  };

  // ========================================
  // INITIALIZATION ON DOM READY
  // ========================================

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})();
