import { ColorRing } from  'react-loader-spinner'
import Layout from '../Layout/Layout'

const Loader = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#1C7765', '#212121', '#5A2E98', '#3d3d3d', '#5A2E98']}
      />
    </div>
  )
}

export default Loader
