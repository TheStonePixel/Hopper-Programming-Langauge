import { ref, onMounted, onBeforeUnmount } from 'vue'

const STORAGE_KEY = 'hopper-theme'

// Module-level singleton ref so every caller observes the same value.
const _theme = ref(
  typeof document !== 'undefined'
    ? document.documentElement.getAttribute('data-theme') || 'light'
    : 'light'
)

function apply(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  _theme.value = theme
}

/**
 * Reactive theme handle. Returns the current theme ref ('light' | 'dark'),
 * a setter, a toggle, and a hasUserPreference helper for showing "Match
 * system" UI affordances.
 */
export function useTheme() {
  let mq = null
  let mqHandler = null

  onMounted(() => {
    // Track system preference changes only when the user hasn't pinned a value.
    if (typeof window === 'undefined' || !window.matchMedia) return
    mq = window.matchMedia('(prefers-color-scheme: dark)')
    mqHandler = (e) => {
      if (localStorage.getItem(STORAGE_KEY)) return  // user has explicit pref
      apply(e.matches ? 'dark' : 'light')
    }
    mq.addEventListener?.('change', mqHandler)
  })

  onBeforeUnmount(() => {
    mq?.removeEventListener?.('change', mqHandler)
  })

  function setTheme(theme) {
    try { localStorage.setItem(STORAGE_KEY, theme) } catch {}
    apply(theme)
  }

  function toggleTheme() {
    setTheme(_theme.value === 'dark' ? 'light' : 'dark')
  }

  return {
    theme: _theme,
    setTheme,
    toggleTheme,
  }
}
