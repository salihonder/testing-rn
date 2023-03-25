import { render, screen, fireEvent } from '@testing-library/react-native'

// Component
import Counter from "../src/components/Counter"

describe("Test Counter Component", () => {

    it("Counter should be 0 if not clicked", async () => {
        // ARRANGE
        render(<Counter />);
        const counterValue = await screen.findByTestId('counter-text')

        // ACT

        // ASSERT
        expect(counterValue).toHaveTextContent(0);
    })

    it("Counter should be 2 if clicked twice", async () => {
        // ARRANGE
        render(<Counter />);
        const buttonElement = screen.getByText('Increase')
        const counterValue = await screen.findByTestId('counter-text')

        // ACT

        fireEvent.press(buttonElement)
        fireEvent.press(buttonElement)

        // ASSERT
        expect(counterValue).toHaveTextContent(2);
    })

})

