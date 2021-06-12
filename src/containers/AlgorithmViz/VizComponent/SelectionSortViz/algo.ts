import { store } from 'app/store'
import { ALGOS } from 'const'

export const selectionSort = async (
  arr: Array<number>,
  setI: (n: number) => void,
  setJ: (n: number) => void,
  setMinIdx: (n: number) => void,
  stepSpeed: number = 1000
) => {
  let minIdx: any
  for (let i = 0; i < arr.length; i++) {
    minIdx = i
    for (let j = i + 1; j < arr.length; j++) {
      try {
        await new Promise<void>((res, rej) =>
          setTimeout(() => {
            if (store.getState().algorithm !== ALGOS.SELECTION_SORT) {
              rej()
            } else {
              res()
            }
          }, stepSpeed)
        )
      } catch {
        throw new Error('Nothing')
      }
      setI(i)
      setJ(j)
      setMinIdx(minIdx)
      if (arr[j] < arr[minIdx]) {
        minIdx = j
      }
    }
    ;[arr[minIdx], arr[i]] = [arr[i], arr[minIdx]]
  }
  return arr
}
