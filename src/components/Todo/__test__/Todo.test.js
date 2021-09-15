import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

// 하위 컴포넌트에서 Link를 사용중임
// <Todo /> 만 사용하면 BrowserRouter로 감싸져있지 않아서 오류가 난다.
const RouterTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    );
};

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

describe("Todo", () => {
    beforeEach(() => {
        render(<RouterTodo />);
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
