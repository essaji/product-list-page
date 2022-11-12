import {render,screen} from "@testing-library/react";
import Pagination from "./Pagination";

const mockedProps = {
  currentPage: 1,
  totalPages: 1009,
  onClickNext: jest.fn(),
  onClickPrev: jest.fn()
}
const renderComponent = (moreProps = {}) => render(<Pagination {...mockedProps} {...moreProps} />)
describe("Pagination component", () => {
  afterEach(jest.clearAllMocks)
  test("Should render next button only", () => {
    renderComponent()
    expect(screen.getByText('Next')).toBeInTheDocument()
    expect(screen.queryByText('Previous')).not.toBeInTheDocument()
  })

  test("Should not render next button when its last page", () => {
    renderComponent({ ...mockedProps, currentPage: 10, totalPages: 10 })
    expect(screen.queryByText('Next')).not.toBeInTheDocument()
    expect(screen.queryByText('Previous')).toBeInTheDocument()
  })

  test("Should call the next function", () => {
    renderComponent()
    screen.getByText("Next").click()
    expect(mockedProps.onClickNext).toBeCalled()
  })

  test("Should call the previous function", () => {
    renderComponent({ ...mockedProps, currentPage: 2 })
    screen.getByText("Previous").click()
    expect(mockedProps.onClickPrev).toBeCalled()
  })
})