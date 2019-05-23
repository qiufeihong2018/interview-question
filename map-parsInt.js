function part(fn) {
    return (...rest) => {
        return fn.call(this, rest[0])
    }
}
let a = ['1', '2', '3']
a.map(part(parseInt))
//  [1, 2, 3]