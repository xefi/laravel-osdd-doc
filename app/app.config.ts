export default defineAppConfig({
  ui: {
    colors: {
      primary: 'red',
      neutral: 'zinc'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'Laravel OSDD'
  },
  header: {
    title: 'Laravel OSDD',
    to: '/',
    logo: {
      alt: 'Xefi',
      light: '/xefi-light.svg',
      dark: '/xefi-dark.svg'
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/xefi/laravel-osdd',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  footer: {
    credits: `Laravel OSDD • © ${new Date().getFullYear()} Xefi`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/xefi/laravel-osdd',
      'target': '_blank',
      'aria-label': 'Laravel OSDD on GitHub'
    }, {
      'icon': 'i-simple-icons-packagist',
      'to': 'https://packagist.org/packages/xefi/laravel-osdd',
      'target': '_blank',
      'aria-label': 'Laravel OSDD on Packagist'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/xefi/laravel-osdd/edit/main/README.md',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/xefi/laravel-osdd',
        target: '_blank'
      }, {
        icon: 'i-simple-icons-packagist',
        label: 'View on Packagist',
        to: 'https://packagist.org/packages/xefi/laravel-osdd',
        target: '_blank'
      }]
    }
  }
})
