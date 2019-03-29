import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _0fe530d1 = () => interopDefault(import('..\\client\\pages\\basketball.vue' /* webpackChunkName: "pages_basketball" */))
const _20fac879 = () => interopDefault(import('..\\client\\pages\\football.vue' /* webpackChunkName: "pages_football" */))
const _e578e0a2 = () => interopDefault(import('..\\client\\pages\\hockey.vue' /* webpackChunkName: "pages_hockey" */))
const _12cb9381 = () => interopDefault(import('..\\client\\pages\\horse.vue' /* webpackChunkName: "pages_horse" */))
const _51e6fbe7 = () => interopDefault(import('..\\client\\pages\\tennis.vue' /* webpackChunkName: "pages_tennis" */))
const _43bf7df6 = () => interopDefault(import('..\\client\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/tips',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/basketball",
      component: _0fe530d1,
      name: "basketball"
    }, {
      path: "/football",
      component: _20fac879,
      name: "football"
    }, {
      path: "/hockey",
      component: _e578e0a2,
      name: "hockey"
    }, {
      path: "/horse",
      component: _12cb9381,
      name: "horse"
    }, {
      path: "/tennis",
      component: _51e6fbe7,
      name: "tennis"
    }, {
      path: "/",
      component: _43bf7df6,
      name: "index"
    }],

    fallback: false
  })
}
