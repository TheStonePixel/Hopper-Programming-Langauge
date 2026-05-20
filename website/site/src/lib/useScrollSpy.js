import { onMounted, onBeforeUnmount, ref } from 'vue'

/**
 * Scroll-spy: as the user scrolls, mark the in-view section's anchor link
 * with the `active` class. Pass a ref to the container holding the anchor
 * links (e.g. a sidebar or TOC bar). The composable will find every
 * `a[href^="#"]` inside it, observe each target, and apply `.active` to
 * the link whose section is currently topmost in the viewport band.
 *
 * @param {Ref<HTMLElement>} rootRef  container element with anchor links
 * @param {object}           [options]
 * @param {string}           [options.rootMargin]  IO rootMargin (default trims top + bottom)
 */
export function useScrollSpy(rootRef, options = {}) {
  const activeId = ref('')
  let observer = null

  onMounted(() => {
    const root = rootRef.value
    if (!root) return

    const linkNodes = root.querySelectorAll('a[href^="#"]')
    if (linkNodes.length === 0) return

    const linkMap = new Map()        // id → <a>
    const targetsInOrder = []        // sections in document order

    linkNodes.forEach(a => {
      const id = a.getAttribute('href').slice(1)
      if (!id) return
      const target = document.getElementById(id)
      if (!target) return
      linkMap.set(id, a)
      targetsInOrder.push(target)
    })

    if (targetsInOrder.length === 0) return

    const visible = new Set()

    observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) visible.add(e.target.id)
        else visible.delete(e.target.id)
      })

      // pick the topmost visible section in document order
      let chosen = null
      for (const t of targetsInOrder) {
        if (visible.has(t.id)) { chosen = t.id; break }
      }
      if (!chosen) return

      activeId.value = chosen
      for (const [id, a] of linkMap) {
        a.classList.toggle('active', id === chosen)
      }
    }, {
      rootMargin: options.rootMargin || '-80px 0px -55% 0px',
      threshold: 0,
    })

    targetsInOrder.forEach(t => observer.observe(t))
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { activeId }
}
