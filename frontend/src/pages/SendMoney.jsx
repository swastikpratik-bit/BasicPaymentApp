import React from 'react'
import Send from "../components/Send"
import { useSearchParams } from 'react-router-dom';

const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  console.log(name);
  console.log(id);
  return (
    <Send name={ name} recid={id} />
  )
}

export default SendMoney;