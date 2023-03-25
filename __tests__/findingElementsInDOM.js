import { Text } from "react-native"

import { render, screen } from '@testing-library/react-native'

// Component
const Header = (props) => <Text testID="header-text">{props.title}</Text>

describe("Find Header Element", () => {

    // it is same as test
    it("Finding title", () => {
        // ARRANGE
        render(<Header title="Joe" />);

        // ACT
        const textJoe = screen.getByText('Joe');

        // ASSERT
        expect(textJoe).toHaveTextContent("Joe");
    })

})