import React from "react";
import Thumbnail from "../../../components/Thumbnail/Thumbnail";

import "./_ExampleLivingRooms.scss";

const ExampleLivingRooms = () => (
  <main className="ExampleLivingRooms">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Heading */}
          <p className="text-center mb-0">Projekty</p>
          <h1 className="display-3 display-md-1 mb-5 text-center">Salony</h1>

          {/* Cards */}
          <div className="grid-container">
            <div className="grid-item">
              <Thumbnail
                imgSrc="http://www.design-corps.co.uk/wp-content/uploads/3DA-Living-Room-Day-Final.jpg"
                title="Salon 1"
                href="/projekty/salony/przykładowy-salon"
              />
            </div>
            <div className="grid-item">
              <Thumbnail
                imgSrc="https://cdn.dribbble.com/users/2415290/screenshots/4830802/800.jpg"
                title="Salon 2"
                href="/projekty/salony/przykładowy-salon"
              />
            </div>
            <div className="grid-item">
              <Thumbnail
                imgSrc="https://static1.squarespace.com/static/5b93e7f596e76fc3f7a8a12d/t/5b94106740ec9a30c74489a1/1536430197524/02.jpg"
                title="Salon 3"
                href="/projekty/salony/przykładowy-salon"
              />
            </div>
            <div className="grid-item">
              <Thumbnail
                imgSrc="https://www.viscato.com/wp-content/uploads/2016/06/interior_090006.jpg"
                title="Salon 4"
                href="/projekty/salony/przykładowy-salon"
              />
            </div>
            <div className="grid-item">
              <Thumbnail
                imgSrc="http://www.vrtisan.co.uk/wp-content/uploads/2016/02/VRtisan-Res1-720x380.jpg"
                title="Salon 5"
                href="/projekty/salony/przykładowy-salon"
              />
            </div>
            <div className="grid-item">
              <Thumbnail
                imgSrc="http://www.cgarchitect.com/content/portfolioitems/2017/10/141118/interior-design-render-elegant-living-room_large.jpg"
                title="Salon 6"
                href="/projekty/salony/przykładowy-salon"
              />
            </div>
            <div className="grid-item">
              <Thumbnail
                imgSrc="https://cdna.artstation.com/p/assets/covers/images/001/159/528/large/jaka-kosec-studio-room-final.jpg?1441276013"
                title="Salon 7"
                href="/projekty/salony/przykładowy-salon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default ExampleLivingRooms;
