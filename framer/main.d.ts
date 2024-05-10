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
}

const MainFramerComponent = (props: Props) => any

type VariantsMap = Partial<Record<UnframerBreakpoint, Props['variant']>> & { base: Props['variant'] }

MainFramerComponent.Responsive = (props: Omit<Props, 'variant'> & {variants: VariantsMap}) => any

export default MainFramerComponent

