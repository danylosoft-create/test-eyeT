import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  retries: 2, // Enable retries to detect flaky tests
  reporter: [
    ['list'],
    ['@practica/test-eyes', {
      dataBranch: 'gh-data',
      deployBranch: 'gh-pages',
      deploy: true
    }]
  ],
  use: {
    trace: 'on-first-retry'
  }
})
