export default function(context) {
  console.log(context)
  if (context.form && context.from.path === '/') {
    setTimeout(() => {
      context.next()
    }, 2000)
  }
}