import { isPhoneOrTable } from '../styles/screenSize'

export const remToPx = (rem: number): number => {
  const elementById = document.getElementById('root') as Element
  return (
    rem * parseFloat(window.getComputedStyle(elementById).fontSize as string)
  )
}

export const getRowHeightForIVRLogItem = () =>
  isPhoneOrTable() ? remToPx(4.5) : remToPx(3.5)
