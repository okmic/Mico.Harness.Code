export const site = {
  name: 'Mico.Harness.Code',
  title: 'Практика: обработка лидов',
  description:
    'Mico.Harness.Code — практика: обработка лидов на Node.js и Go, промпт-помощник, чек-лист в действии. Скоро.',
} as const

export const codePreview = {
  brand: {
    name: 'Mico',
    suffix: '.Harness.Code',
  },
  status: 'Скоро',
  eyebrow: 'Mico.Harness.Code',
  title: 'Скоро.',
  lead: 'Готовлю второй туториал серии. Обработка лидов на Node.js и Go, промпт-помощник, чек-лист в действии. Здесь будет код, который можно запустить.',
  note: 'Оставьте закладку — анонс появится здесь.',
  features: [
    'Node.js и Go — один harness, два языка',
    'Промпт-помощник для сборки под задачу',
    'Чек-лист из 5 пунктов в действии',
    'Код, который можно запустить',
  ],
} as const

export const actions = {
  primary: {
    label: 'Код скоро',
  },
  secondary: {
    label: 'К Mico.Harness',
    href: 'https://okmic.github.io/Mico.Harness/',
  },
} as const

export const author = {
  name: 'Mico',
  role: 'Инженер. Пишет Mico.Harness',
  links: [
    { label: 'CV Node.js', href: 'https://okmic.github.io/nodejs_backend_devoloper_cv/' },
    { label: 'CV Go', href: 'https://okmic.github.io/go_cv' },
    { label: 'Проекты', href: 'https://okmic.github.io/MicoProjects/' },
    { label: 'Обо мне', href: 'https://okmic.github.io/MicoEngineer/' },
  ],
} as const

export const footer = {
  copyright: '© 2026 Mico.Harness.Code',
} as const