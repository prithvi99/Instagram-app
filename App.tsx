import { View, Text } from 'react-native'
import React from 'react'
import colors from './src/theme/colors'
import fonts from './src/theme/fonts'
import AntDesign from 'react-native-vector-icons/AntDesign'
 
const App = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text style={{color: colors.primary, fontSize: fonts.size.default}} >Hello World
      <AntDesign name='stepforward' size={25}/>
      </Text>
      
    </View>
  )
}

export default App