import { isDesktop, isPhone, isPhoneOrTable } from '../styles/screenSize'

export const PhoneOrTabletBrowser = (props: any) => {
  if (isPhoneOrTable()) {
    return props.children
  }
  return null
}

export const PhoneBrowser = (props: any) => {
  if (isPhone()) {
    return props.children
  }
  return null
}

export const DesktopBrowser = (props: any) => {
  if (isDesktop()) {
    return props.children
  }
  return null
}
