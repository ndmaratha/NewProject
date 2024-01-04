import Header from "../Header/Header";
import { render } from "@testing-library/react";
import {StaticRouter} from "react-router-dom/server"
import { Provider } from "react-redux";
import Store from "../../Redux/Store"

test("logo is loding properly or not",()=>{
    const header=render(<StaticRouter>
        <Provider store={Store}>
            <Header/>
        </Provider>
    </StaticRouter>)

    const logo=header.getByTestId("logo")

    expect(logo.src).toBe("http://localhost/dummyLogo")
})