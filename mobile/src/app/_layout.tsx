/* eslint-disable camelcase */
import { Stack } from 'expo-router'
import { colors } from '@/styles/theme'

import {
  useFonts,
  Rubik_600SemiBold,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
} from '@expo-google-fonts/rubik'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function Layout() {
  useFonts({
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
  })

  return (
    <GestureHandlerRootView>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colors.gray[100],
          },
        }}
      />
    </GestureHandlerRootView>
  )
}
