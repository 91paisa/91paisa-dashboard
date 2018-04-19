import {
  ISplitTransaction,
  splitTransactionStatus,
  transactionMode,
} from '../api/transaction-api'

export interface ISplitsWithCount {
  status: splitTransactionStatus
  count: number
}

export const getSplitsWithCount = (
  splits: ISplitTransaction[],
): ISplitsWithCount[] => {
  const splitWithCountMap: any = {}
  if (splits) {
    splits.map(split => {
      const key = splitWithCountMap[split.status]
      // tslint:disable-next-line
      if (!key) {
        splitWithCountMap[split.status] = 1
      } else {
        splitWithCountMap[split.status] = splitWithCountMap[split.status] + 1
      }
    })
    return Object.keys(splitWithCountMap).map((key: string) => {
      const count = splitWithCountMap[key]
      const status = parseInt(key, 10)
      return {
        count,
        status,
      }
    })
  }
  return []
}

export const getModeEmoji = (mode: transactionMode): any => {
  switch (mode) {
    case transactionMode.neft:
      return '🐌'
    case transactionMode.imps:
      return '🏎'
  }
}

export const isTransactionComplete = (splits: ISplitTransaction[]) => {
  return (
    splits.filter(split => split.status !== splitTransactionStatus.success)
      .length === 0
  )
}

export const normalizeEnumKey = (status: string) => {
  return status.split('').map(char => {
    if (char === '_') {
      return ' '
    }
    if (char === char.toUpperCase()) {
      const space = ` `
      return `${space}${char.toLowerCase()}`
    }
    return char
  })
}
