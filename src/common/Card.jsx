import ImageFallback from "./ImageFallback"

const Card = ({ title, description, price, imageUrl, onClick }) => {
    return (
        <div onClick={onClick} className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
            <div>
                <ImageFallback src={imageUrl} alt={'no image'} className={'w-full aspect-3/4 object-cover object-center'}/>
            </div>
            <div className="p-4">
                {/* image details */}
                <h2 className="font-semibold text-lg text-gray-900">{title}</h2>
                <p className="text-sm text-gray-500 mt-1 line-clamp-1">{description}</p>
                <span className="text-sm text-gray-500 mt-1">Price: ${price}</span>
            </div>
        </div>
    )
}

export default Card