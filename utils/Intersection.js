let observer

export function observeElement(func, element, root, store) {
  const options = {
    root: root || null,
    rootMargin: '0px',
    threshold: 0.2
  }
  observer = new IntersectionObserver((arr) => {
    store.commit('SET_isBottom_false')
    const { isIntersecting } = arr[0] // 取得当前观察组中的第一项
    if (isIntersecting) {
      store.commit('SET_isBottom_true')
      func()
    }
  }, options)
  observer.observe(element) // 观察对应元素
}

export function unobserveElement(element) {
  observer.unobserve(element)
}
