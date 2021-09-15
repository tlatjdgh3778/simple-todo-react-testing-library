import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer";

const RouterFooter = () => {
    return (
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
    );
};

describe("Footer", () => {
    test("Footer가 잘 렌더링 되는가", () => {
        render(<RouterFooter footer="todo" />);
        const linkEl = screen.getByTestId("footer-link");

        expect(linkEl).toBeInTheDocument();
    });

    test("Go User Page를 눌렀을 때 잘 이동하는가", () => {
        render(<RouterFooter footer="todo" />);
        const linkEl = screen.getByTestId("footer-link");

        fireEvent.click(linkEl); // Go User Page를 누르면 a태그는 Go Todo Page로 바뀜.. => <a href="/"> 이렇게.

        expect(linkEl).toHaveAttribute("href", "/");
    });
});
