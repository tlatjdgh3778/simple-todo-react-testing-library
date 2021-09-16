import { render, screen, waitFor } from "@testing-library/react";
import UserList from "../UserList";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
// axios를 사용할 때 가짜데이터를 넘겨주기 위해 사용함.

describe("UserList", () => {
    const mock = new MockAdapter(axios, { delayResponse: 200 }); // 200ms 가짜 딜레이 설정

    // API 요청에 대하여 응답 미리 정하기
    mock.onGet("https://randomuser.me/api/?results=5").reply(200, {
        results: [
            {
                location: {
                    city: "Ballarat",
                },
                name: {
                    first: "Scarlett",
                    last: "Rodriquez",
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/women/14.jpg",
                },
            },
        ],
    });
    test("첫 번째 user", async () => {
        render(<UserList />);

        const nameEl = await waitFor(() => screen.getByText("Scarlett Rodriquez"));
        expect(nameEl).toBeInTheDocument();
    });

    // test("첫 번째 user가 렌더링 되는가", () => {
    //     render(<UserList />);
    //     const userDivEl = screen.getByTestId("user-0");
    //     expect(userDivEl).toBeInTheDocument();
    // });
    // 이렇게 하면 오류 남 Unable to find an element by: [data-testid="user-0"]
    // => 그 이유는 렌더링 됐을 때에는 아직 받아오는 중이기 때문
    // => async await 사용
    // 하지만 getByTestId 는 await 사용 못해서
    // findByTestId 사용
    // test("첫 번째 user가 렌더링 되는가", async () => {
    //     render(<UserList />);

    //     const userDivEl = await screen.findByTestId("user-0");
    //     expect(userDivEl).toBeInTheDocument();
    // });
});
