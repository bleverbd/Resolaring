import React from 'react'
import GalleryHero from './GalleryHero'
import GalleryCart from './galleryCart'

import cartbg1 from "../../assets/gallery/cartbg.jpg";
import cartbg2 from "../../assets/gallery/bg1.png";
import cartbg3 from "../../assets/gallery/bg2.png";
import cartbg4 from "../../assets/gallery/bg3.png";
import cartbg5 from "../../assets/gallery/bg4.png";
import cartbg6 from "../../assets/gallery/bg5.png";


const products = [
  {
    id: 1,
    cartBackground: cartbg1,
    cartProfile: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d',
    cartProfileName: 'John Doe',
    productName: 'JA Solar 200W',
    productDescription: 'High efficiency, durable solar panel for sustainable energy.'
  },
  {
    id: 2,
    cartBackground: cartbg2,
    cartProfile: 'https://images.unsplash.com/photo-1522199710521-72d69614c702',
    cartProfileName: 'Jane Smith',
    productName: 'Canadian Solar 400W',
    productDescription: 'Reliable module with excellent performance and efficiency.'
  },
  {
    id: 3,
    cartBackground: cartbg3,
    cartProfile: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
    cartProfileName: 'Robert Miles',
    productName: 'Trina Solar TSM-330',
    productDescription: 'Outstanding energy yield under various environmental conditions.'
  },
  {
    id: 4,
    cartBackground: cartbg4,
    cartProfile: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    cartProfileName: 'Emily Johnson',
    productName: 'LONGi Solar LR4 450W',
    productDescription: 'Innovative technology with long-term power output stability.'
  },
  {
    id: 5,
    cartBackground: cartbg5,
    cartProfile: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c',
    cartProfileName: 'Michael Chen',
    productName: 'REC Alpha Pure-R',
    productDescription: 'Premium solar panel with high power density and efficiency.'
  },
  {
    id: 6,
    cartBackground: cartbg6,
    cartProfile: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126',
    cartProfileName: 'Sophia Green',
    productName: 'JA Solar 550W',
    productDescription: 'Ideal for commercial and utility-scale applications.'
  },
  {
    id: 7,
    cartBackground: cartbg1,
    cartProfile: 'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    cartProfileName: 'Daniel Cruz',
    productName: 'Jinko Solar Tiger Neo',
    productDescription: 'Top-tier efficiency with advanced N-type cell technology.'
  },
  {
    id: 8,
    cartBackground: cartbg2,
    cartProfile: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6',
    cartProfileName: 'Ava Patel',
    productName: 'Q Cells Q.PEAK DUO BLK ML-G10+',
    productDescription: 'Excellent performance in low-light and shaded conditions.'
  },
  {
    id: 9,
    cartBackground: cartbg3,
    cartProfile: 'https://images.unsplash.com/photo-1614284723459-5e0ff988a75b',
    cartProfileName: 'Liam Brown',
    productName: 'Panasonic EverVolt 360W',
    productDescription: 'High quality panel designed for residential solar systems.'
  },
  {
    id: 10,
    cartBackground: cartbg4,
    cartProfile: 'https://images.unsplash.com/photo-1614284723460-4d3c3e43d1ec',
    cartProfileName: 'Isabella Lee',
    productName: 'First Solar Series 6',
    productDescription: 'Thin-film panel with excellent temperature performance.'
  },
  {
    id: 11,
    cartBackground: cartbg5,
    cartProfile: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    cartProfileName: 'James Wilson',
    productName: 'SunPower Maxeon 6',
    productDescription: 'Industry-leading efficiency and superior durability.'
  },
  {
    id: 12,
    cartBackground: cartbg6,
    cartProfile: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91',
    cartProfileName: 'Mia Anderson',
    productName: 'Seraphim Blade',
    productDescription: 'Cutting-edge design with dual-glass module construction.'
  },
  {
    id: 13,
    cartBackground: cartbg1,
    cartProfile: 'https://images.unsplash.com/photo-1546525848-3ce03ca516f6',
    cartProfileName: 'Lucas Martin',
    productName: 'Astronergy 375W Mono',
    productDescription: 'Reliable panel with competitive pricing and performance.'
  },
  {
    id: 14,
    cartBackground: cartbg2,
    cartProfile: 'https://images.unsplash.com/photo-1603415526960-f7e0328d1d5b',
    cartProfileName: 'Charlotte Davis',
    productName: 'ZNShine Solar ZXM6',
    productDescription: 'Smart solar modules with high transmittance glass.'
  },
  {
    id: 15,
    cartBackground: cartbg3,
    cartProfile: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce',
    cartProfileName: 'Benjamin Scott',
    productName: 'Leapton Solar 370W',
    productDescription: 'Japanese technology with excellent long-term performance.'
  },
  {
    id: 16,
    cartBackground: cartbg4,
    cartProfile: 'https://images.unsplash.com/photo-1589578527966-456f501c072a',
    cartProfileName: 'Grace Taylor',
    productName: 'Hanwha Q Cells Duo XL',
    productDescription: 'High capacity panel with outstanding yield and durability.'
  },
  {
    id: 17,
    cartBackground: cartbg5,
    cartProfile: 'https://images.unsplash.com/photo-1552058544-f2b08422138a',
    cartProfileName: 'Elijah Moore',
    productName: 'Axitec AC-420MH',
    productDescription: 'Economical panel with robust power output in real conditions.'
  },
  {
    id: 18,
    cartBackground: cartbg6,
    cartProfile: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
    cartProfileName: 'Amelia Thomas',
    productName: 'LG NeON R 380W',
    productDescription: 'Premium performance and elegant black design.'
  },
  {
    id: 19,
    cartBackground: cartbg1,
    cartProfile: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507',
    cartProfileName: 'Matthew Jackson',
    productName: 'Sharp ND-RK 300W',
    productDescription: 'Compact and efficient solar panel for smaller setups.'
  },
  {
    id: 20,
    cartBackground: cartbg2,
    cartProfile: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61',
    cartProfileName: 'Ella Robinson',
    productName: 'Talesun TP6 430W',
    productDescription: 'Affordable solar panel with high performance ratio.'
  }
];




const Gallery = () => {
  return (
    <div>
      <GalleryHero/>
      <div className="flex items-center justify-between mt-[120px] font-Syne max-w-[1520px] my-0 mx-auto">
          <div>
            <p className="text-[#071431] text-5xl font-semibold">
              Anuncia els teus panells solars
            </p>
          </div>

          <div className="flex items-center gap-8 ">
            <div>
              <p className="text-[#6A7283] text-lg font-medium">
                Sort by: Most recent
              </p>
            </div>
            <div className="bg-[#B45C3D] px-5 py-2 rounded-4xl">
              <button className="text-white text-lg font-medium">
                {" "}
                Add Media
              </button>
            </div>
          </div>
        </div>

      {products.map((product,index)=>(<GalleryCart key={index} product={product}/>))}
     
     
  
    </div>
  )
}

export default Gallery
