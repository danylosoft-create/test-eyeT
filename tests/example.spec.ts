import { test, expect } from '@playwright/test'

test.describe('auth', () => {
  test('should login successfully', async () => {
    // Fast test - always passes
    expect(1 + 1).toBe(2)
  })

  test('should logout successfully', async () => {
    // Fast test - always passes
    expect(true).toBe(true)
  })
})

test.describe('payments', () => {
  test('should process payment', async () => {
    // Slow test - simulates API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    expect('payment').toBe('payment')
  })

  test('should refund payment', async () => {
    // Medium speed test
    await new Promise(resolve => setTimeout(resolve, 500))
    expect('refund').toBe('refund')
  })
})

test.describe('profile', () => {
  test('should load user data', async () => {
    // Flaky test - fails ~50% of the time
    const random = Math.random()
    expect(random > 0.5).toBe(true)
  })

  test('should update profile', async () => {
    // Another flaky test - fails ~30% of the time
    const random = Math.random()
    expect(random > 0.3).toBe(true)
  })
})

test.describe('notifications', () => {
  test('should send email notification', async () => {
    // Fast test - always passes
    expect('email').toContain('mail')
  })

  test('should send push notification', async () => {
    // Fast test - always passes
    expect(['push', 'email']).toContain('push')
  })
})
