export const remToPx = (rem: number): number => {
  const elementById = document.getElementById('root') as Element
  return (
    rem * parseFloat(window.getComputedStyle(elementById).fontSize as string)
  )
}
