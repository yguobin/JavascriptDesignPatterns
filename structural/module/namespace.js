const namespace = function() {
  let privateVar = 0;
  let privateMethod = (foo) => { console.log(foo) }
  return {
    publicVar: "foo",
    publicFunction: (bar) => {
      privateVar++
      privateMethod(bar)
    }
  }
}()

console.log(`Public var: ${namespace.publicVar}`)
console.log(`Public method call: `)
namespace.publicFunction('Hello')
