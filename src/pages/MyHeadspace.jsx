import MyHeadspaceNav from '../components/childComponents/MyHeadspaceNav'

import HeadspaceTop from '../components/childComponents/HeadspaceTop'
import "../components/childComponents/MyHeadspace.css"
import HeadspaceContent from '../components/childComponents/HeadspaceContent'
import BottomNav from '../components/childComponents/BottomNav'

// eslint-disable-next-line react/prop-types
const MyHeadspace = ({title}) => {
  return (
    <>
    <MyHeadspaceNav/>
    <div className="headspace-content-container">
      <div className="headspace-content-item">
        <p className="topitem-head">{title}</p>
        <HeadspaceTop/>
        <HeadspaceContent/>
      </div>
    </div>
    <BottomNav/>
    </>
  )
}

export default MyHeadspace