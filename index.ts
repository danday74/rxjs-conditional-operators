import { timer, take, pipe, map, mergeMap, iif, of } from 'rxjs'

const double = () => {
  return pipe(
    map((x: number) => x * 2)
  )
} 

const triple = () => {
  return pipe(
    map((x: number) => x * 3)
  )
}

timer(0, 1000).pipe(
  take(4),
  mergeMap(x => iif(() => x <= 1, of(x).pipe(double()), of(x).pipe(triple())))
).subscribe(x => {
  console.log('output', x)
})

// import { timer, take, pipe, map } from 'rxjs'

// const condition = false

// const double = () => {
//   return pipe(
//     map((x: number) => x * 2)
//   )
// } 

// const triple = () => {
//   return pipe(
//     map((x: number) => x * 3)
//   )
// }

// timer(0, 1000).pipe(
//   take(4),
//   condition ? double() : triple()
// ).subscribe(x => {
//   console.log('output', x)
// })
