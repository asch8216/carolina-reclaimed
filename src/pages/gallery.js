import React from "react"
import Img from "gatsby-image"
import Gallery from "react-grid-gallery"

import Layout from "../components/layout"
import SEO from "../components/seo"

class SecondPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      images: this.props.images,
    }
  }
  render() {
    return (
      <Layout pageInfo={{ pageName: "gallery" }}>
        <SEO title="Gallery" />
        <div className="photocontainer">
          <div
            style={{
              display: "block",
              minHeight: "1px",
              width: "100%",
              border: "1px solid #ddd",
              overflow: "auto",
            }}
          >
            <Gallery
              images={this.state.images}
              enableLightbox={true}
              enableImageSelection={false}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

SecondPage.defaultProps = {
  images: [
    {
      src: require("../images/cabinet.jpg"),
      thumbnail: require("../images/cabinet.jpg"),
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: require("../images/roundtable.jpg"),
      thumbnail: require("../images/roundtable.jpg"),
      thumbnailWidth: 320,
      thumbnailHeight: 183,
      //caption: "37H (gratispgraphy.com)",
    },
    {
      src: require("../images/coffeetable.jpg"),
      thumbnail: require("../images/coffeetable.jpg"),
      thumbnailWidth: 271,
      thumbnailHeight: 320,
      // caption: "Orange Macro (Tom Eversley - isorepublic.com)",
    },
    {
      src: require("../images/desk.jpg"),
      thumbnail: require("../images/desk.jpg"),
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      //  caption: "201H (gratisography.com)",
    },
    // {
    //   src: require("../images/door.jpg"),
    //   thumbnail: require("../images/door.jpg"),
    //   thumbnailWidth: 320,
    //   thumbnailHeight: 213,
    //   caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
    // },
    {
      src: require("../images/endtable.jpg"),
      thumbnail: require("../images/endtable.jpg"),
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      //caption: "Man on BMX (Tom Eversley - isorepublic.com)",
    },
    {
      src: require("../images/fireplace2.jpg"),
      thumbnail: require("../images/fireplace2.jpg"),
      thumbnailWidth: 320,
      thumbnailHeight: 213,
      //caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)",
    },
    // {
    //   src: require("../images/hallway.jpg"),
    //   thumbnail: require("../images/hallway.jpg"),
    //   thumbnailWidth: 257,
    //   thumbnailHeight: 320,
    //   //caption: "A photo by 贝莉儿 NG. (unsplash.com)",
    // },
    // {
    //   src: require("../images/hallwaytable.jpg"),
    //   thumbnail: require("../images/hallwaytable.jpg"),
    //   thumbnailWidth: 257,
    //   thumbnailHeight: 320,
    //   caption: "A photo by 贝莉儿 NG. (unsplash.com)",
    // },
    {
      src: require("../images/longtable.jpg"),
      thumbnail: require("../images/longtable.jpg"),
      thumbnailWidth: 257,
      thumbnailHeight: 320,
      // caption: "A photo by 贝莉儿 NG. (unsplash.com)",
    },
    {
      src: require("../images/mudroom.jpg"),
      thumbnail: require("../images/mudroom.jpg"),
      thumbnailWidth: 257,
      thumbnailHeight: 320,
      // caption: "A photo by 贝莉儿 NG. (unsplash.com)",
    },
    {
      src: require("../images/fireplace.jpg"),
      thumbnail: require("../images/fireplace.jpg"),
      thumbnailWidth: 257,
      thumbnailHeight: 320,
      //caption: "A photo by 贝莉儿 NG. (unsplash.com)",
    },
    {
      src: require("../images/picnictable.jpg"),
      thumbnail: require("../images/picnictable.jpg"),
      thumbnailWidth: 257,
      thumbnailHeight: 320,
      // caption: "A photo by 贝莉儿 NG. (unsplash.com)",
    },
    {
      src: require("../images/sidetable.jpg"),
      thumbnail: require("../images/sidetable.jpg"),
      thumbnailWidth: 257,
      thumbnailHeight: 320,
      caption: "A photo by 贝莉儿 NG. (unsplash.com)",
    },
    {
      src: require("../images/slidecabinet.jpg"),
      thumbnail: require("../images/slidecabinet.jpg"),
      thumbnailWidth: 257,
      thumbnailHeight: 320,
      // caption: "A photo by 贝莉儿 NG. (unsplash.com)",
    },
    {
      src: require("../images/wine.jpg"),
      thumbnail: require("../images/wine.jpg"),
      thumbnailWidth: 257,
      thumbnailHeight: 320,
      // caption: "A photo by 贝莉儿 NG. (unsplash.com)",
    },
    {
      src: require("../images/winecabinet.jpg"),
      thumbnail: require("../images/winecabinet.jpg"),
      thumbnailWidth: 257,
      thumbnailHeight: 320,
      // caption: "A photo by 贝莉儿 NG. (unsplash.com)",
    },
  ],
}

export default SecondPage
