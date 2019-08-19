import { Header, Head } from '../components'

const Layout = props => (
  <div>
    <Head />
    <Header />
    {props.children}
  </div>
)

export default Layout
