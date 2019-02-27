import Layout from '../components/Layout'
import { Button } from 'antd';

export default () => (
  <Layout>
    <div className="container">
      <div>Hello World.</div>
      <div>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
      </div>
    </div>
  </Layout>
)