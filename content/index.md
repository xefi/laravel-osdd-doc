---
seo:
  title: Laravel OSDD
  description: Open Source Driven Development — a layered architecture pattern for Laravel applications.
---

::u-page-hero{class="dark:bg-gradient-to-b from-zinc-900 to-zinc-950"}
---
orientation: horizontal
---
#title
Build Laravel apps with [Layered Architecture]{.text-primary}.

#description
**Laravel OSDD** brings Open Source Driven Development to Laravel. Organize your application into independent, composable layers — each a full Composer package with its own models, migrations, seeders, and service providers.

#links
  :::u-button
  ---
  to: /getting-started
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  Get started
  :::

  :::u-button
  ---
  icon: i-simple-icons-github
  color: neutral
  variant: outline
  size: xl
  to: https://github.com/xefi/laravel-osdd
  target: _blank
  ---
  View on GitHub
  :::

#default
  :::prose-pre
  ---
  code: |
    composer require xefi/laravel-osdd

    php artisan osdd:start
  filename: Terminal
  ---

  ```bash [Terminal]
  composer require xefi/laravel-osdd

  php artisan osdd:start
  ```
  :::
::

::u-page-section{class="dark:bg-zinc-950"}
#title
One command to restructure everything

#description
Run `php artisan osdd:start` on a fresh Laravel project and OSDD automatically sets up your layered architecture — no manual wiring required.

#features
  :::u-page-feature
  ---
  icon: i-lucide-layers
  ---
  #title
  Independent Layers

  #description
  Each domain concern lives as its own Composer package inside `functional/` or `technical/`. Layers are isolated, testable, and reusable across projects.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-package
  ---
  #title
  Composer-native

  #description
  Layers are registered as Composer path repositories. Laravel auto-discovers their service providers — no manual bootstrapping needed.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-terminal
  ---
  #title
  Layer-aware Artisan Commands

  #description
  Every standard `make:*` command has an `osdd:*` counterpart. Files land inside the correct layer, not a global `app/` directory.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-database
  ---
  #title
  Cross-layer Seeding

  #description
  Register seeders from any layer's service provider. `php artisan osdd:seed` runs all of them in one go.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-flask-conical
  ---
  #title
  Per-layer Test Suites

  #description
  Run `php artisan osdd:phpunit` to auto-register each layer's test directory in `phpunit.xml`. Test layers individually with `--testsuite`.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-settings-2
  ---
  #title
  Config Override System

  #description
  Use `overrideConfigFrom()` in any layer to deep-merge config values over defaults — layer-level configuration always wins.
  :::
::

::u-page-section{class="dark:bg-zinc-950"}
#title
A clear architecture for every concern

#description
OSDD separates your application into two top-level buckets, keeping business logic and infrastructure concerns cleanly apart.

#features
  :::u-page-feature
  ---
  icon: i-lucide-briefcase
  ---
  #title
  functional/

  #description
  Domain layers that represent business concerns — `functional/users`, `functional/orders`, `functional/billing`. Each owns its own models, migrations, and seeders.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-cpu
  ---
  #title
  technical/

  #description
  Infrastructure layers shared across the application — auth adapters, event buses, queue configuration. Keeps cross-cutting concerns in one place.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-git-branch
  ---
  #title
  Scalable by Design

  #description
  Add new layers without touching existing ones. The architecture scales naturally from a small app to a large monorepo — no big-bang refactors required.
  :::
::

::u-page-section{class="dark:bg-gradient-to-b from-zinc-950 to-zinc-900"}
  :::u-page-c-t-a
  ---
  links:
    - label: Read the docs
      to: '/getting-started'
      trailingIcon: i-lucide-arrow-right
    - label: View on GitHub
      to: 'https://github.com/xefi/laravel-osdd'
      target: _blank
      variant: subtle
      icon: i-simple-icons-github
  title: Ready to layer your Laravel app?
  description: Install Laravel OSDD and bring structure, clarity, and composability to your application architecture.
  class: dark:bg-zinc-950
  ---
  :::
::
