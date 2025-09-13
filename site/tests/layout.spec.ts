import { describe, it, expect } from 'vitest'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'

describe('Default layout', () => {
  it('should exist', () => {
    const layoutPath = resolve(__dirname, '../layouts/default.vue')
    expect(existsSync(layoutPath)).toBe(true, 'The file layouts/default.vue should exist')
  })
})
