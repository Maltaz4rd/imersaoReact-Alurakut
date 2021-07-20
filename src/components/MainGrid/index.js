import styled from 'styled-components'

export const MainGrid = styled.main`
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 16px;
  .profile-area{
    display: none;
    @media(min-width: 860px){
      display: block;
    }
  }
  
  @media(min-width:860px){
    display: grid;
    max-width: 1110px;
    grid-template-areas: "profile-area content-area relations-area";
    grid-template-columns: 160px 1fr 318px;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10%;
  }
`

