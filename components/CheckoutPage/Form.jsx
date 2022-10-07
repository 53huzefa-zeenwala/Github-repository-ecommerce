import styles from '../../styles/Checkoutpage/Form.module.css'

export default function Form({ formInputListData, setFormData, formData }) {
    const onInputChange = (e) => {
        const { target } = e;
            setFormData((prevState) => ({
                ...prevState,
                [target.name]: target.value,
            }));
    };

    return (
        <div className={styles.mainDiv}>
            {formInputListData.map((data, i) => (
                <div className={styles.formDiv} key={i}>
                    <label htmlFor={data.htmlName}>
                        {data.name}
                        {data.required === true && <span className='text-red-600 text-sm'> *</span>}
                    </label>
                    {data.type === 'input' && data.required && <input type={data.typeName} name={data.htmlName} value={formData.typeName} onChange={onInputChange} maxLength={data.maxlength ? data.maxlength : null} required />}
                    {data.type === 'input' && data.required === false && <input type={data.typeName} name={data.htmlName} value={formData.typeName} onChange={onInputChange} maxLength={data.maxlength ? data.maxlength : null} />}
                    {data.type === 'textarea' && <textarea type={data.typeName} name={data.htmlName} value={formData.typeName} onChange={onInputChange} />}

                    {data.type === 'radio' &&
                        <div id={data.htmlName} className={styles.radio} value={formData.prefer} onChange={onInputChange}>
                            {data.option.map((option, i) => (
                                <div key={i}>
                                    <input type={data.typeName} name={data.htmlName} value={option} required/>
                                    <label htmlFor={data.htmlName}>{option}</label>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            ))}

        </div>
    )
}
