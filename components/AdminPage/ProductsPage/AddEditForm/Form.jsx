import { useEffect, useRef, useState } from 'react'
import styles from '../../../../styles/Adminpage/ProductsPage/AddEditProduct.module.css'
import Image from 'next/image'
import CropEasy from './crop/CropEasy'
import SelectFilterAndCategory from './SelectFilterAndCategory'
import RemoveUploadedItem from './RemoveUploadedItem'

export default function Form({ title, submitProduct, productDetails, setProductDetails, inStock, setInStock, file, setFile, productColor, setProductColor, productFrameType, setProductFrameType, productBrand, setProductBrand, productCategory, setProductCategory, price, setPrice, mrpPrice, setMrpPrice, totalDiscount, setTotalDiscount, productName, setProductName, productDescription, setProductDescription }) {
  const [detailName, setDetailName] = useState("")
  const [detail, setDetail] = useState("")

  const addDetails = () => {
    if (detailName < 3 || detail < 3) {
      return
    }
    setProductDetails((perv) => [
      {
        name: detailName,
        detail
      },
      ...perv,
    ])
    setDetailName("")
    setDetail("")
  }

  const [imageRemoveModal, setImageRemoveModal] = useState({ item: "", isOpen: false })

  // set crop image only
  const [openCrop, setOpenCrop] = useState(false)
  const [photoURL, setPhotoURL] = useState()

  const fileRef = useRef()
  const selectImage = () => {
    fileRef.current.click()
  }
  const imageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setOpenCrop(true)
      setPhotoURL(URL.createObjectURL(file))
    }
  }


  const removeImage = () => {
    setFile(current => current.filter(img => {
      return img !== imageRemoveModal.img
    }))
    setImageRemoveModal({ img: "", isOpen: false })
  }

  const removeDetail = (detailName) => {
    setProductDetails(current => current.filter(detail => {
      return detail.name !== detailName
    }))
  }

  useEffect(() => {
    if (mrpPrice && price) {
      const totalLess = ((mrpPrice - price) / mrpPrice) * 100
      setTotalDiscount(totalLess.toFixed(2))
    }
  }, [mrpPrice, price])


  return (
    <>
      {openCrop && <div className={styles.cropEasyDiv}><CropEasy setOpenCrop={setOpenCrop} setPhotoURL={setPhotoURL} photoURL={photoURL} setFile={setFile} /></div>}
      {imageRemoveModal.isOpen && <RemoveUploadedItem removeItem={removeImage} setModal={setImageRemoveModal} title="Are sure you want to permanently delete this image?" />}
      <div className={styles.main}>
        <h1>{title}</h1>
        <form className={styles.form}>
          <input type="text" placeholder='Product name...' onChange={e => setProductName(e.target.value)} value={productName} name='name' minLength={5} required />
          <textarea name="description" value={productDescription} onChange={e => setProductDescription(e.target.value)} placeholder='Product description...' minLength={12} required />

          <div className={styles.priceDiv}>
            <div>
              <div className={styles.priceInputDiv}>
                <label htmlFor="mrpPrice">Product MRP</label>
                <input type="number" value={mrpPrice} onChange={e => setMrpPrice(e.target.value)} placeholder='Product Mrp...' name='mrpPrice' required />
              </div>
              <div className={styles.priceInputDiv}>
                <label htmlFor="price">Product Price</label>
                <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder='Product Price...' name='price' required />
              </div>
            </div>
            <h3>Discount on product <span>{totalDiscount}%</span></h3>
          </div>

          <SelectFilterAndCategory
            {...{
              productCategory, setProductCategory, productBrand, setProductBrand, productFrameType, setProductFrameType, productColor, setProductColor
            }}
          />
          <div className={styles.detailDiv}>
            <div>
              <input type="text" value={detailName} onChange={e => setDetailName(e.target.value)} name='detailName' placeholder='Name...' />
              <input type="text" value={detail} onChange={e => setDetail(e.target.value)} name='detail' placeholder='detail...' />
              <input type='button' value='Add' onClick={addDetails} className={styles.addButton} />
            </div>
            <div className={styles.displayDetailDiv}>
              {productDetails?.map((detail, i) => (
                <div key={i}>
                  <h3><span>{detail.name}</span> : <span>{detail.detail}</span></h3>
                  <span onClick={() => removeDetail(detail.name)}><img src="/icon/delete-svgrepo-com.svg" alt="" /></span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.imageDiv}>
            <p className={styles.imageSelectDiv}>
              <input type="file" name="image" ref={fileRef} onChange={imageChange} />
              <span className={styles.imageSelectButton} onClick={selectImage}>
                <svg x="0px" y="0px" fill="#fff"
                  viewBox="0 0 60.364 60.364">
                  <path d="M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269
		          L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91
		          c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z"/> </svg>
              </span>
            </p>
            <span className='capitalize text-sm font-semibold pt-1.5'>* click to add image on product</span>
            <div className={styles.upperImageDiv}>
              {file?.map((image, i) => (
                <div key={i} className={styles.uploadedImageDiv}>
                  <a href={image} target='_blank' rel="noopener noreferrer">
                    <div>
                      <Image src={image} layout="fill" objectFit='contain' />
                    </div>
                  </a>
                  <input type="button" value="Remove" onClick={() => setImageRemoveModal({ item: image, isOpen: true })} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.priceInputDiv}>
            <label htmlFor="price">Product in Stock</label>
            <input type="number" value={inStock} onChange={e => setInStock(e.target.value)} name='inStock' placeholder='Product in stock...' />
          </div>

          <button onClick={submitProduct} type="submit">{title}</button>
        </form>
      </div>
    </>
  )
}
