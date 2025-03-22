import Image from "next/image";

const CustomImage = ({ src, width, height, ...props }) => {
  return (
    <Image
      src={src}
      width={width} // Desired width
      height={height} // Desired height
      // quality={80}
      unoptimized
      {...props}
    />
  );
};

export default CustomImage;
