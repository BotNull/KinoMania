import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width="100%"
    height="500"
    viewBox="0 0 100% 500"
    backgroundColor="#313943"
    foregroundColor="#262c33"
    {...props}
  >
    <rect x="0" y="0" rx="6" ry="6" width="83" height="43" /> 
    <rect x="100" y="0" rx="6" ry="6" width="83" height="43" />
    <rect x="200" y="0" rx="6" ry="6" width="83" height="43" />
    <rect x="0" y="73" rx="6" ry="6" width="100%" height="300px" />
    <rect x="0" y="403" rx="6" ry="6" width="83" height="43" /> 
    <rect x="100" y="403" rx="6" ry="6" width="83" height="43" />
    <rect x="200" y="403" rx="6" ry="6" width="83" height="43" />
    <rect x="300" y="403" rx="6" ry="6" width="83" height="43" />
  </ContentLoader>
)

export default Skeleton

