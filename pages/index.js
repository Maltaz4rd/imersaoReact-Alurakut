import { MainGrid } from '../src/components/MainGrid'
import { Box, BoxRelations } from '../src/components/MainGrid/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/components/alura/communs'

function Profile(props) {
  let nome = "Ademir Gama"
  return (
    <>
      <Box >
        <img src={`https://github.com/${props.githubUser}.png`} alt="" />
        <a href="">{nome}</a>
      </Box>
    </>
  )
}


export default function Home() {
  const githubUser = "Maltaz4rd"

  const amigos = [
    'Maltaz4rd',
    'omariosouto',
    'peas',
    'rafaballerini',
    'juunegreiros',
    'marcobrunodev',
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profile-area" style={{ gridArea: "profile-area" }}>
          <Profile githubUser={githubUser} />
        </div>
        <div className="content-area" style={{ gridArea: "content-area" }}>
          <Box >
            <h1>Bem Vindo(a), Ademir</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            oque deseja fazer?
          </Box>
        </div>
        <div className="relations-area" style={{ gridArea: "relations-area" }}>
          <Box>
            Meus Amigos ({amigos.length})

            <BoxRelations>
              <ul>
                {amigos.map((item) => {
                  return (
                    <li>
                      <a href="">
                        <img src={`https://github.com/${item}.png`} />
                        <span>{item}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </BoxRelations>
          </Box>
          <Box>
            Minhas Comunidades
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
