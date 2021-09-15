import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
    test("Header 컴포넌트가 잘 렌더링 되는가", () => {
        render(<Header />);
        const headingEl = screen.getByText("Simple Todo"); // Simple Todo 라는 텍스트를 가진 엘리먼트가 있는지 확인

        expect(headingEl).toBeInTheDocument();
    });
});
