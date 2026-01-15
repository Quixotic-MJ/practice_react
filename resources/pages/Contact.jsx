import React, {useState} from 'react'

function Contact() {
  const [price, setPrice] = useState(0)
  const [id, setId] = useState()

  const getPrice = () => {
    axios.get(`/product/${id}`).then(res => setPrice(res.data))
  }

  return (
    <div>
      <input type="number"
      placeholder='Enter Product Id'
      onChange={(e) => setId(e.target.value)}
      />
      <br /><br />
      <button onClick={() =>getPrice()}>Get Product Price</button><br /><br />

      <span>{price}</span>
    </div>
  )
}

export default Contact