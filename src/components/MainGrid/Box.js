import styled from 'styled-components'

export const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 5px 10px;
  margin-bottom: 10px;
`

export const BoxRelations = styled(Box)`
  ul{
    display: grid;
    list-style: none;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px;
    max-height: 220px;
    img {
      object-fit: cover;
      background-position: center center;
      position: relative;
      width: 100%;
      height: 100%;
    }

    ul, li, a {
      display: inline-block;
      height: 102px;
      position: relative;
      overflow: hidden;
      border-radius: 8px;

      span {
        color: #fff;
        overflow: hidden;
        font-size: 10px;
        position: absolute;
        left: 0;
        bottom: 10px;
        z-index: 2;
        padding: 0 4px;
        text-overflow: ellipsis;
        width: 100%;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        
      }
      &:after{
        content: "";
        display: block;
        position: absolute;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        background-image: linear-gradient(0deg, #00000573, transparent)
      }
    }
  }
`