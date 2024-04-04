import {useState} from 'react'
// Write your code here
import {
  Container1,
  Container2,
  Container3,
  Container4,
  Heading1,
  HrLine,
  Con2,
  P1,
  P2,
  P3,
  P4,
  InputElement1,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')

  const getInput1 = event => {
    setNumber(event.target.value)
  }

  const getInput2 = event => {
    setName(event.target.value)
  }

  return (
    <Container1>
      <Container2>
        <Heading1>CREDIT CARD</Heading1>
        <HrLine />
        <Con2 data-testid="creditCard">
          <P1>{number}</P1>
          <P2>CARDHOLDER NAME</P2>
          <P3>{name}</P3>
        </Con2>
      </Container2>
      <Container3>
        <Container4>
          <P4>Payment Method</P4>
          <InputElement1
            value={number}
            onChange={getInput1}
            placeholder="Card Number"
            type="text"
          />
          <InputElement1
            value={name}
            onChange={getInput2}
            placeholder="Cardholder Name"
            type="text"
          />
        </Container4>
      </Container3>
    </Container1>
  )
}

export default CreditCard
