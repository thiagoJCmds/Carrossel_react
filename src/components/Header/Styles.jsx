import styled from 'styled-components'

export const Hd = styled.header`
background-color: grey;
height: 90px;
`
export const Title = styled.h1`
color: #fff;
font-family: 'Roboto', sans-serif;
`
export const Container = styled.div`
max-width: ${(prop) => prop.largura ? prop.largura : '1024px'};
width: 100%;
height: ${(prop) => prop.tamanho ? prop.tamanho : '90px'};
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
`
export const Lista = styled.ul`
display: flex;
list-style: none;
`
export const Li = styled.li`
font-weight: bold;
list-style: none;
`