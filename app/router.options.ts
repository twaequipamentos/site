export default {
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      if (savedPosition) {
        return resolve(savedPosition)
      }

      const offset = 40 // ajuste aqui para o valor que você precisa

      if (to.hash) {
        const attemptScroll = () => {
          const el = document.querySelector(to.hash)
          if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - offset
            resolve({ top, behavior: 'smooth' })
          } else {
            setTimeout(attemptScroll, 100)
          }
        }

        attemptScroll()
      } else {
        resolve({ top: 0, behavior: 'smooth' })
      }
    })
  }
}
