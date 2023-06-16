import Image from 'next/image'
import styles from './page.module.css'

function Button(){
  axios
  .on("/api/on", {
    on:on
  })

}
export default function Home() {
  return (
    <main>
      <div>
         <button onClick={Button}>key</button>
      </div>
    </main>
  )
}
