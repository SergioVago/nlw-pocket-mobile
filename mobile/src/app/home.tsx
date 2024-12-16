import { Categories, CategoriesProps } from '@/components/categories'
import { PlaceProps } from '@/components/place'
import { Places } from '@/components/places'
import { api } from '@/services/api'
import { useCallback, useEffect, useState } from 'react'
import { Alert, View } from 'react-native'

type MarketsProps = PlaceProps

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([])
  const [category, setCategory] = useState('')
  const [markets, setMarkets] = useState<MarketsProps[]>([])

  async function fetchCategories() {
    try {
      const { data } = await api.get('/categories')

      setCategories(data)
      setCategory(data[0].id)
    } catch (error) {
      console.error(error)
      Alert.alert('Categorias', 'Não foi possível carregar as categorias')
    }
  }

  const fetchMarkets = useCallback(async () => {
    if (!category) {
      return
    }

    try {
      const { data } = await api.get('/markets/category/' + category)

      setMarkets(data)
    } catch (error) {
      console.error(error)
      Alert.alert('Locais', 'Não foi possível carregar os locais')
    }
  }, [category])

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    fetchMarkets()
  }, [category, fetchMarkets])

  return (
    <View style={{ flex: 1 }}>
      <Categories
        data={categories}
        selected={category}
        onSelect={setCategory}
      />

      <Places data={markets} />
    </View>
  )
}
