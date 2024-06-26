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

}

const NoPageFramerComponent = (props: Props) => any

type VariantsMap = Partial<Record<UnframerBreakpoint, Props['variant']>> & { base: Props['variant'] }

NoPageFramerComponent.Responsive = (props: Omit<Props, 'variant'> & {variants: VariantsMap}) => any

export default NoPageFramerComponent

