import {render, screen} from "@testing-library/react";
import ProductCard, {ProductCardProps} from "./ProductCard";


const mockedProps: ProductCardProps = {
  imageUrl: "image-url-goes-here",
  title: "product card title",
  date: "2022-20-12",
  starCount: 3
}
const renderProductCard = () => render(<ProductCard {...mockedProps} />)
describe("ProductCard component", () => {
  test("Should render the component", () => {
    renderProductCard()
    expect(screen.getByText(mockedProps.title)).toBeInTheDocument()
    expect(screen.getByText(`Release Date: ${mockedProps.date}`)).toBeInTheDocument()
    expect(screen.getAllByTestId("star-item")).toHaveLength(5)
  })

  test("Should highlight three stars", () => {
    renderProductCard()
    expect(screen.getAllByTestId("star-item")[0]).toHaveClass("text-yellow-400")
    expect(screen.getAllByTestId("star-item")[1]).toHaveClass("text-yellow-400")
    expect(screen.getAllByTestId("star-item")[2]).toHaveClass("text-yellow-400")
    expect(screen.getAllByTestId("star-item")[3]).toHaveClass("text-gray-500")
    expect(screen.getAllByTestId("star-item")[4]).toHaveClass("text-gray-500")
  })
})