export default function(func, element, root) {
  const options = {
    root: root || null,
    rootMargin: '0px',
    threshold: 0.3
  }
  const observer = new IntersectionObserver((arr) => {
    const { isIntersecting } = arr[0] // 取得当前观察组中的第一项
    if (isIntersecting) {
      func()
    }
  }, options)
  observer.observe(element) // 观察对应元素
}
