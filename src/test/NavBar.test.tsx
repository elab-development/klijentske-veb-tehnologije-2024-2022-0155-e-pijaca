import App from "../App";
import {render, screen} from "@testing-library/react"

test("da li se NavBar renderuje",()=>{
    render(<App/>)
    const message= screen.queryByText("VOĆE")
    expect(message).toBeVisible()
})

test("da li se u NavBar-u prikazuje  link ka stranici Povrce",()=>{
    render(<App/>)
    const message= screen.queryByText("POVRĆE")
    expect(message).toBeVisible()
})


test("da li se u NavBar-u prikazuje  link ka stranici Recepti",()=>{
    render(<App/>)
    const message= screen.queryByText("RECEPTI")
    expect(message).toBeVisible()
})


test("da li se u NavBar-u prikazuje  link ka stranici SignUp",()=>{
    render(<App/>)
    const message= screen.queryByText("Sign Up")
    expect(message).toBeVisible()
})