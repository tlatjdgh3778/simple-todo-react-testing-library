import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../Todo";

const addTodo = (todos) => {
    const inputEl = screen.getByPlaceholderText("text here");
    const buttonEl = screen.getByTestId("button");

    todos.forEach((task) => {
        fireEvent.change(inputEl, {
            target: {
                value: task,
            },
        });
        fireEvent.click(buttonEl);
    });
};

describe("TodoItem", () => {
    beforeEach(() => {
        render(<Todo />);
    });
    test("input에 입력한 텍스트가 제대로 TodoItem에 출력되는가", () => {
        addTodo(["다이소 가기"]);

        const spanEl = screen.getByText("다이소 가기");

        expect(spanEl).toBeInTheDocument();
    });

    test("완료 버튼을 눌렀을 때 스타일이 변경되는가", () => {
        addTodo(["다이소 가기"]);

        const updateBtn = screen.getByTestId("update-btn");
        const spanEl = screen.getByText("다이소 가기");
        fireEvent.click(updateBtn);

        expect(spanEl).toHaveStyle("textDecoration: line-through");
    });

    test("취소 버튼을 눌렀을 때 스타일이 변경되는가", () => {
        addTodo(["다이소 가기"]);

        const updateBtn = screen.getByTestId("update-btn");
        const spanEl = screen.getByText("다이소 가기");
        fireEvent.click(updateBtn); // 완료 버튼을 누른 후
        fireEvent.click(updateBtn); // 취소 버튼을 누른다

        expect(spanEl).toHaveStyle("textDecoration: none");
    });

    test("삭제 버튼을 눌렀을 때 삭제가 되는가", () => {
        addTodo(["다이소 가기"]);

        const deleteBtn = screen.getByTestId("delete-btn");
        const spanEl = screen.getByText("다이소 가기"); // 원래 존재
        fireEvent.click(deleteBtn); // 삭제 버튼을 클릭하면

        expect(spanEl).not.toBeInTheDocument(); // 사라짐
    });
});
