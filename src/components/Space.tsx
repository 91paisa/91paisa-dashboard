import * as React from 'react'

export enum SpaceEnum {
  xxxs = '0.1rem',
  xxs = '0.25rem',
  xs = '0.5rem',
  s = '0.75rem',
  m = '1rem',
  l = '1.25rem',
  xl = '1.5rem',
  xxl = '1.75rem',
  xxxl = '2rem',
}
interface IProps {
  width?: SpaceEnum
  height?: SpaceEnum
}

const Space: React.SFC<IProps> = ({ width, height }: IProps) => (
  <span
    style={{
      height: height ? height.valueOf() : '0',
      width: width ? width.valueOf() : '0',
    }}
  />
)

export default Space
