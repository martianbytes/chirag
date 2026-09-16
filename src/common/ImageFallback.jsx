const ImageFallback = ({ src, alt, ...props }) => {
  const fallbackPlaceholder = 'https://static.designboom.com/wp-content/uploads/2021/03/exposed-carbon-fiber-mclaren-720s-1016-INDUSTRIES-designboom-12.jpg'
  return (
    <img
      {...props}
      src={src || fallbackPlaceholder}
      alt={alt || "Image"}
      onError={(e) => {
        e.target.src = fallbackPlaceholder;
      }}
    />
  );
};

export default ImageFallback;
