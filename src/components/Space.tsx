import * as React from 'react'

export enum SpaceEnum {
  s = '4px',
  m = '8px',
  l = '12px',
  xl = '16px',
}
interface IProps {
  width?: SpaceEnum
  height?: SpaceEnum
}

const Space: React.SFC<IProps> = ({ width, height }: IProps) => (
  <div
    style={{
      height: height ? height.valueOf() : '0',
      width: width ? width.valueOf() : '0',
    }}
  />
)

export default Space
