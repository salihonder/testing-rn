import { useState } from "react"
import { Text, View, Button } from "react-native"

const Counter = () => {
    const [counter, setCounter] = useState(0)
    return <View>
        <Text
            testID="counter-text">{counter}</Text>
        <Button
            title="Increase"
            onPress={() => setCounter(counter + 1)}
        />
    </View>
}

export default Counter;