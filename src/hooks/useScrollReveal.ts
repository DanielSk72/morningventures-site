import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    let raf: number

    const init = () => {
      const els = Array.from(document.querySelectorAll('[data-reveal]')) as HTMLElement[]

      const reveal = (el: HTMLElement) => {
        const delay = el.dataset.delay ?? '0'
        el.style.transitionDelay = `${delay}ms`
        el.classList.add('is-visible')
        observer.unobserve(el)
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) reveal(entry.target as HTMLElement)
          })
        },
        { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
      )

      els.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          reveal(el)
        } else {
          observer.observe(el)
        }
      })

      // Fallback: force-reveal anything still hidden after 2s
      const fallback = setTimeout(() => {
        document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => {
          reveal(el as HTMLElement)
        })
      }, 2000)

      return () => {
        observer.disconnect()
        clearTimeout(fallback)
      }
    }

    // Wait for browser paint so getBoundingClientRect() is accurate
    raf = requestAnimationFrame(() => { init() })

    return () => cancelAnimationFrame(raf)
  }, [])
}
