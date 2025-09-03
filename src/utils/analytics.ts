// Google Analytics 4 Event Tracking Utility

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'js' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-Y0XWKBQW0M', {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track portfolio interactions
export const trackPortfolioInteraction = (action: string, projectName?: string) => {
  trackEvent(action, 'Portfolio', projectName);
};

// Track contact form submissions
export const trackContactForm = (action: 'start' | 'submit' | 'error') => {
  trackEvent(action, 'Contact Form');
};

// Track skill section views
export const trackSkillView = (skillCategory: string) => {
  trackEvent('view', 'Skills', skillCategory);
};

// Track project clicks
export const trackProjectClick = (projectName: string, action: 'view' | 'demo' | 'github') => {
  trackEvent(action, 'Project', projectName);
};

// Track navigation
export const trackNavigation = (section: string) => {
  trackEvent('navigate', 'Navigation', section);
};

// Track download events
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('download', 'File', `${fileName}.${fileType}`);
};

// Track external link clicks
export const trackExternalLink = (url: string, linkType: 'social' | 'project' | 'other') => {
  trackEvent('click', 'External Link', `${linkType}: ${url}`);
};
