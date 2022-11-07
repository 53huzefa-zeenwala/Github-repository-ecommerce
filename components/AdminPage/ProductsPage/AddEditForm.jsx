import React, { useEffect, useRef, useState } from 'react'
import { categoriesList, filter } from '../../../utils/fakedata'
import styles from '../../../styles/Adminpage/ProductsPage/AddEditProduct.module.css'
import Image from 'next/image'
import CropEasy from './crop/CropEasy'

export default function AddEditForm({ title }) {

  // set crop image only
  const [openCrop, setOpenCrop] = useState(false)
  const [photoURL, setPhotoURL] = useState()
  const [file, setFile] = useState()
  const fileRef = useRef()
  const selectImage = () => {
    fileRef.current.click()
  }
  const imageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      console.log(file)
      setOpenCrop(true)
      setPhotoURL(URL.createObjectURL(file))
    }
    e.target.values = ''
  }


  // useEffect(() => {
  //   if (product.mrpPrice) {
  //     const totalLess = ((product.mrpPrice - product.price) / product.mrpPrice) * 100
  //     setDiscountPercent(totalLess)
  //   }
  // }, [product.mrpPrice])
  console.log(photoURL, file)
  const productDetails = [
    {
      name: "category",
      detail: "Sunglass",
    },
    {
      name: "color",
      detail: "black",
    }]
  const image = [
    {
      url: "/sunglasses.jpg",
    },
    {
      url: "/Square.jpg",
    },]
  return (
    <>
      {openCrop && <div className={styles.cropEasyDiv}><CropEasy setOpenCrop={setOpenCrop} setPhotoURL={setPhotoURL} photoURL={photoURL} setFile={setFile}/></div>}
      <div className={styles.main}>
        <h1>{title}</h1>
        <form className={styles.form}>
          <input type="text" placeholder='Product name...' name='name' minLength={5} required />
          <textarea name="description" placeholder='Product description...' minLength={12} required />
          <div className={styles.priceDiv}>
            <div>
              <input type="number" placeholder='Product Price...' name='price' required />
              <input type="number" placeholder='Product Mrp...' name='mrpPrice' required />
            </div>
            <h1>Discount on product <span>20%</span></h1>
          </div>

          <select name="category" required>
            {categoriesList?.map((category, i) => (
              <option key={i} value={category}>{category}</option>
            ))}
          </select>

          <select name="color" required >
            {filter.colors.map((color, i) => (
              <option key={i} value={color}>{color}</option>
            ))}
          </select>

          <select name="brand" required >
            {filter.brands.map((brand, i) => (
              <option key={i} value={brand}>{brand}</option>
            ))}
          </select>

          <select name="frameType" required >
            {filter.frameTypes.map((frameType, i) => (
              <option key={i} value={frameType}>{frameType}</option>
            ))}
          </select>

          <div className={styles.detailDiv}>
            <div>
              <input type="text" name='detailName' placeholder='Name...' />
              <input type="text" name='detail' placeholder='detail...' />
              <button>Add</button>
            </div>
            <div className={styles.displayDetailDiv}>
              {productDetails?.map((detail, i) => (
                <h1 key={i}><span>{detail.name}</span> : <span>{detail.detail}</span></h1>
              ))}
            </div>
          </div>

          <div className={styles.imageDiv}>
            <p className={styles.imageSelectDiv}>
              <input type="file"  accept="image/*" name="image" ref={fileRef} onChange={imageChange} required />
              <span>
                <svg x="0px" y="0px"
                  viewBox="0 0 60.364 60.364">
                  <path d="M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269
		          L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91
		          c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z"/> </svg>
              </span>
              <input type='button' className={styles.imageSelectButton} onClick={selectImage} />
            </p>
            <div>
              {image?.map((image, i) => (
                <div key={i}>
                  <div>
                    <Image src={image.url} layout="fill" objectFit='contain' />
                  </div>
                  <a href={image?.url} target='_blank' rel="noopener noreferrer">{image.url}</a>
                </div>
              ))}
            </div>
          </div>

          <input type="number" name='inStock' placeholder='Product in stock...' />

          <button type="submit">Add Product</button>
        </form>
      </div>
    </>
  )
}
