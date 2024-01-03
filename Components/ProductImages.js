import { useState } from "react";
import styled from "styled-components";

const BigImage = styled.img`
  max-width: 100%;
`;

const BigImageWrapper = styled.div`
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const ImageButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-grow: 0;
  margin-top: 20px;
  flex-wrap: wrap;
`;
const ImageButton = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  cursor: pointer;
  width: 100px;
  padding: 2px;
  ${(props) =>
    props.active
      ? `
      border-color: #ccc;
  `
      : `
    border-color: transparent;
  `}
`;

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);
  return (
    <>
      <BigImageWrapper>
        <BigImage src={activeImage} />
      </BigImageWrapper>
      <ImageButtons>
        {images.map((image, index) => (
          <ImageButton
            key={index}
            active={image === activeImage}
            onClick={() => setActiveImage(image)}
          >
            <Image src={image} alt="" />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}
