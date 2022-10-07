import React, { useState, useEffect } from 'react';
// import { submitComment } from '../services';
import styles from '../../styles/Productpage/CommentForm.module.css'

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", comment: "", storeData: false });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('email'),
      storeData: window.localStorage.getItem('name') || window.localStorage.getItem('email'),
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

//   const handlePostSubmission = () => {
//     setError(false);
//     const { name, email, comment, storeData } = formData;
//     if (!name || !email || !comment) {
//       setError(true);
//       return;
//     }
//     const commentObj = {
//       name,
//       email,
//       comment,
//       slug,
//     };

//     if (storeData) {
//       localStorage.setItem('name', name);
//       localStorage.setItem('email', email);
//     } else {
//       localStorage.removeItem('name');
//       localStorage.removeItem('email');
//     }

//     submitComment(commentObj)
//       .then((res) => {
//         if (res.createComment) {
//           if (!storeData) {
//             formData.name = '';
//             formData.email = '';
//           }
//           formData.comment = '';
//           setFormData((prevState) => ({
//             ...prevState,
//             ...formData,
//           }));
//           setShowSuccessMessage(true);
//           setTimeout(() => {
//             setShowSuccessMessage(false);
//           }, 3000);
//         }
//       });
//   };
  return (
    <div className={styles.mainDiv}>
      <h3>Leave a Reply</h3>
      <div className={styles.textareaDiv}>
        <textarea value={formData.comment} onChange={onInputChange} name="comment" placeholder="Comment" />
      </div>
      <div className={styles.inputDiv}>
        <input type="text" value={formData.name} onChange={onInputChange} placeholder="Name" name="name" />
        <input type="email" value={formData.email} onChange={onInputChange} placeholder="Email" name="email" />
      </div>
      <div className={styles.checkboxDiv}>
        <div>
          <input checked={formData.storeData} onChange={onInputChange} type="checkbox" id="storeData" name="storeData" value="true" />
          <label htmlFor="storeData"> Save my name, email in this browser for the next time I comment.</label>
        </div>
      </div>
      {error && <p className={styles.error}>All fields are mandatory</p>}
      <div>
        <button type="button"
        //  onClick={handlePostSubmission}
          className={styles.submitButton}>Post Comment</button>
        {showSuccessMessage && <span className={styles.successMessage}>Comment submitted for review</span>}
      </div>
    </div>
  );
};

export default CommentsForm;