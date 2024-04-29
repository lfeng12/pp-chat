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
    "login"?: Function
    "onEmailChange"?: Function
    "on Password Change"?: Function
    "password"?: string
    "email"?: string
    "on Sign Up"?: Function
    "forget Password"?: Function
}

const EmailLoginFramerComponent = (props: Props) => any

type VariantsMap = Partial<Record<UnframerBreakpoint, Props['variant']>> & { base: Props['variant'] }

EmailLoginFramerComponent.Responsive = (props: Omit<Props, 'variant'> & {variants: VariantsMap}) => any

export default EmailLoginFramerComponent

