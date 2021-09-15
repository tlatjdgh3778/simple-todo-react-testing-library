import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../Form";

const addItem = jest.fn();

describe("Form", () => {
    beforeEach(() => {
        render(<Form addItem={addItem} />);
    });

    test("input이 잘 렌더링 되는가", () => {
        const inputEl = screen.getByPlaceholderText("text here");

        expect(inputEl).toBeInTheDocument();
    });

    test("button이 잘 렌더링 되는가", () => {
        const buttonEl = screen.getByTestId("button");

        expect(buttonEl).toBeInTheDocument();
    });

    test("input에 타이핑이 잘 되는지", () => {
        const inputEl = screen.getByPlaceholderText("text here");

        fireEvent.change(inputEl, {
            target: {
                value: "다이소 가기",
            },
        });

        expect(inputEl.value).toBe("다이소 가기");
    });

    test("추가하기 버튼을 눌렀을 때 input이 ''으로 변하는지", () => {
        const inputEl = screen.getByPlaceholderText("text here");
        const buttonEl = screen.getByTestId("button");

        // input에 "다이소 가기" 가 있을 때 button 을 누르면 ''으로 변경
        fireEvent.change(inputEl, {
            target: {
                value: "다이소 가기",
            },
        });

        fireEvent.click(buttonEl);

        expect(inputEl.value).toBe("");
    });
});
