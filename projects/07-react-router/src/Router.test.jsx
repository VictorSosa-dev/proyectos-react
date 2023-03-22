import { describe, it, expect, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { Router } from './Router'
import { beforeEach } from 'vitest'
import { getCurrentPath } from './utils.js'

vi.mock('./utils.js', () => ({
  getCurrentPath: vi.fn()
}))

describe('Router', () => {
  beforeEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  it('should work', () => {
    render(<Router routes={[]} />)
    expect(true).toBe(true)
  })

  it('should render 404 if no route matches', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    expect(screen.getByText('404')).toBeTruthy()
    console.log(screen.debug())
  })

  it('should render the component of the first route that matches', () => {
    getCurrentPath.mockReturnValue('/about')

    const routes = [
      {
        path: '/',
        Component: () => <h1>Home</h1>
      },
      {
        path: '/about',
        Component: () => <h1>About</h1>
      }
    ]

    render(<Router routes={routes} />)
    expect(screen.getByText('About')).toBeTruthy()
  })
})
