import { Card } from "@/entities/card"
import './globals.css'
import { Inputform } from "@/entities/inputForm"


export default function Home() {
  return (
    <>
      <Inputform/>
      <Card header="ПеКарня" body="Персональные трусы" />
    </>
  )
}
