import styled from "styled-components";
import { Card ,Row} from "react-bootstrap";


export const OneCard = styled(Card)`
margin-top: 30px;
:hover{
    cursor: pointer;
}
`


export const CardImg = styled(Card.Img)`
max-height: 200px;
min-height: 200px;
object-fit: cover;
object-position: center center;
`