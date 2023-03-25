import { Text } from "react-native"

import { render, screen } from '@testing-library/react-native'

// Component
const Header = (props) => <Text testID="header-text">{props.title}</Text>

describe("Find with TestID Header Element ", () => {

    it("Finding by Test ID", async () => {
        // ARRANGE
        render(<Header title="Joe" />);

        // ACT
        const textJoe = await screen.findByTestId('header-text');

        // ASSERT
        expect(textJoe).toHaveTextContent("Joe");
    })

})

