import { Text } from "react-native";
import { render } from '@testing-library/react-native';

// Components
import MyButton from "../src/components/MyButton";

test("Snapshot test", () => {
    // ARRANGE
    const Header = () => <Text>Something</Text>

    // ACT
    const { toJSON } = render(<Header />);

    // ASSERT
    expect(toJSON()).toMatchSnapshot();
})

test("Snapshot test for Button", () => {
    // ARRANGE
    const alertFunction = jest.fn()
    // ACT
    const { toJSON } = render(<MyButton alert={alertFunction} />);

    // ASSERT
    expect(toJSON()).toMatchSnapshot();
})

