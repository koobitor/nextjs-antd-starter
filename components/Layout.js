import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

import antdStyle from 'antd/dist/antd.css'
import fontawesomeStyle from 'font-awesome/css/font-awesome.css'
import stylesheet from 'styles/index.scss'

const Layout = ({ children, title }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style dangerouslySetInnerHTML={{ __html: antdStyle }} />
      <style dangerouslySetInnerHTML={{ __html: fontawesomeStyle }} />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>
    <Header />
    
    { children }

    <Footer />
  </div>
)

export default Layout