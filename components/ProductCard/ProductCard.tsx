import getConfig from 'next/config'
import Image from 'next/image'

const ProductCard = (props: ProductCardProps) => {
  const {publicRuntimeConfig: {IMAGE_HOST}} = getConfig()
  const starsCountArray = Array(5).fill(0).map((i, idx) => props.starCount > idx)
  const imageSrc = props.imageUrl ? (IMAGE_HOST + props.imageUrl) : "https://placehold.jp/500x800.png"
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg min-h-full">
      <Image
        alt="Placeholder"
        className="block h-auto w-full"
        src={imageSrc}
        width={500}
        height={800}
      />
      <header className="flex flex-col md:flex-row items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-base text-center md:text-left">
          {props.title}
        </h1>
        <div className="flex items-center">
          {starsCountArray.map((isStar, idx) => (
            <svg data-testid="star-item" key={idx} aria-hidden="true"
                 className={`w-5 h-5 ${isStar ? "text-yellow-400" : "text-gray-500"}`} fill="currentColor"
                 viewBox="0 0 20 20"
                 xmlns="http://www.w3.org/2000/svg"><title>First star</title>
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </header>

      <footer className="flex items-center justify-center md:justify-end leading-none p-2 md:p-4 mt-auto">
        <p className="text-grey-darker text-xs">
          Release Date: {props.date}
        </p>
      </footer>

    </div>
  )
}

export interface ProductCardProps {
  imageUrl: string
  title: string
  date: string
  starCount: number
}

export default ProductCard