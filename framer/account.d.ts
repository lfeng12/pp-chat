import * as React from "react"

import { UnframerBreakpoint } from "unframer"

export interface Props {
    children?: React.ReactNode
    style?: React.CSSProperties
    className?: string
    id?: string
    width?: any
    height?: any
    layoutId?: string
    "tap"?: Function
    "tap 2"?: Function
    "tap 3"?: Function
    "tap 4"?: Function
    "tap 5"?: Function
    "tap 6"?: Function
    "tap 7"?: Function
    "tap 8"?: Function
    "tap 9"?: Function
}

const AccountFramerComponent = (props: Props) => any

type VariantsMap = Partial<Record<UnframerBreakpoint, Props['variant']>> & { base: Props['variant'] }

AccountFramerComponent.Responsive = (props: Omit<Props, 'variant'> & {variants: VariantsMap}) => any

export default AccountFramerComponent

