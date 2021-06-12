import { ALGOS } from 'app/const'
import { NamedExoticComponent } from 'react'
import { SelectionSortViz, BubbleSortViz } from './VizComponent'

const map: Record<string, NamedExoticComponent> = Object.freeze({
  [ALGOS.SELECTION_SORT]: SelectionSortViz,
  [ALGOS.BUBBLE_SORT]: BubbleSortViz,
})

export default map
