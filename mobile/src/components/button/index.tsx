import { ActivityIndicator, Text, TextProps, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { s } from "./styles";
import { colors } from "@/styles/colors";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";
import { ComponentType } from "react";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean
}

function Button({ children, style, isLoading, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[s.container, style]}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (<ActivityIndicator size="small" color={colors.gray[100]} />) : children}

    </TouchableOpacity>
  )
}

function Title({ children, ...rest }: TextProps) {
  return (
    <Text style={s.title} {...rest}>
      {children}
    </Text>
  )
}

type IconProps = {
  icon: ComponentType<TablerIconProps>
}

function Icon({ icon: Icon }: IconProps) {
  return (
    <Icon size={24} color={colors.gray[100]} />
  )
}

Button.Title = Title
Button.Icon = Icon

export { Button }