import styled from "styled-components"

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
`

const ImageButtons = styled.div`
    display: flex;
    gap: 10px;
    flex-grow: 0;
    margin-top: 20px;
`
const ImageButton = styled.div`
    border: 1px solid #ddd;
    border-radius: 10px;
    cursor: pointer;
    width: 100px;
    padding: 2px;
`

export default function ProductImages({ images }){
    return (
        <>
            <Image src={images?.[0]} />
            <ImageButtons>
                {images.map((image, index) => (
                    <ImageButton key={index}>
                        <Image src={image} alt="" />
                    </ImageButton>
                ))}
            </ImageButtons>
        </>
    )
}