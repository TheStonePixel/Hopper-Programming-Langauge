/**
 * v-reveal directive: fade + slide-up the element when it scrolls into view.
 * Pairs with the .reveal / .reveal-in CSS classes defined in main.css.
 *
 * Usage:
 *   <div v-reveal>...</div>
 *   <div v-reveal="80">...</div>   // optional delay in ms (staggered grids)
 *
 * Respects prefers-reduced-motion via the global rule in tokens.css —
 * the transition collapses to ~0ms automatically.
 */

const supported = typeof IntersectionObserver !== 'undefined'

export const reveal = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (typeof binding.value === 'number') {
      el.style.transitionDelay = `${binding.value}ms`
    }

    if (!supported) {
      el.classList.add('reveal-in')
      return
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        // Reveal when the element scrolls into view, OR when it is
        // already above the viewport at observation time (e.g. a hard
        // reload restored a scroll position that's past this element).
        // Without the second case those elements would stay at
        // opacity:0 forever, because they'll never *become* intersecting.
        const rect = entry.boundingClientRect
        if (entry.isIntersecting || rect.bottom <= 0) {
          el.classList.add('reveal-in')
          obs.unobserve(entry.target)
        }
      })
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.05,
    })

    observer.observe(el)
    el._revealObserver = observer
  },

  unmounted(el) {
    el._revealObserver?.disconnect()
    el._revealObserver = null
  },
}
