import { Text, View } from "react-native";
import { s } from "./styles";
import { ComponentType } from "react";
import { IconMapPin, IconProps } from "@tabler/icons-react-native";
import { colors } from "@/styles/colors";

type Props = {
  title: string
  description: string
  icon: ComponentType<IconProps>
}

export function Step({ title, description, icon: Icon }: Props) {
  return (
    <View style={s.container}>
      {Icon && (<Icon size={32} color={colors.red.base} />)}
      <View style={s.details}>
        <Text style={s.title}>
          {title}
        </Text>
        <Text style={s.description}>
          {description}
        </Text>
      </View>
    </View>
  )
}