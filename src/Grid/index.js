import styled from "styled-components";

export const Grid = styled.div``;

export const Row = styled.div`
    display: flex;
`;

const media = {
    xs: styles => `
    @media only screen and (max-width: 480px){
    ${styles}
    }
    `,
    s: styles => `
    @media only screen and (max-width: 600px){
    ${styles}
    }
    `,
    m: styles => `
    @media screen and (max-width: 768px){
    ${styles}
    }
    `,
    lg: styles => `
    @media screen and (max-width: 1024px){
    ${styles}
    }
    `,
    xlg: styles => `
    @media screen and (min-width: 1024px){
    ${styles}
    }
    `
};
// Breadkpoints
//480px
//600px
//768px
//900px
//1024px
//1200px
export const Container = styled.div`
width:80%;
margin: 0 auto;
`

export const Col = styled.div`
    flex: ${props => props.size};
    ${props =>
        props.collapse &&
        media[props.collapse](`
        display:none
    `)}
`;

export default Grid;
