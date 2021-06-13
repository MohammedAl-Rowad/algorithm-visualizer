import { memo, FC, useState } from 'react'
import { useSprings } from 'react-spring'
import { Flex, Button } from '@chakra-ui/react'
import { useCustomColors } from 'app/hooks'
import { factArr } from 'app/factories'
import { ArrayAnimatedElement } from 'dump'
import { bubbleSort } from './algo'

const array = factArr()

const BubbleSortViz: FC = () => {
  const [leftIndex, setLeft] = useState<number | null>(null)
  const [rightIndex, setRight] = useState<number | null>(null)
  const [started, setStarted] = useState<boolean>(false)
  const { saltBox, persimmon, tidal } = useCustomColors()

  const springs = useSprings(
    array.length,
    array.map((_, index) => ({
      backgroundColor:
        leftIndex === index || rightIndex === index ? saltBox : persimmon,
      color: '#F2F2F2',
      width: '10%',
      boxShadow:
        index === leftIndex || index === rightIndex
          ? `5px 10px ${tidal}`
          : `0px 0px ${tidal}`,
      opacity: 1,
      height: 60,
      from: { opacity: 0, height: 120 },
    }))
  )

  const startAlgo = async () => {
    setStarted(true)
    await bubbleSort(array, setLeft, setRight)
    setStarted(false)
    setLeft(null)
    setRight(null)
  }

  return (
    <>
      <Flex>
        <Button
          m="1rem"
          onClick={startAlgo}
          disabled={started}
          isLoading={started}
        >
          START!
        </Button>
      </Flex>
      <Flex fontWeight="bold" flexWrap="wrap">
        {springs.map((props: any, i) => {
          return (
            <ArrayAnimatedElement key={i} style={props}>
              {array[i]}
            </ArrayAnimatedElement>
          )
        })}
      </Flex>
    </>
  )
}

export default memo(BubbleSortViz)
