import { Header } from './components/Header';
import { Post } from './components/Post';
import { SideBar } from './components/SideBar';

import './global.css';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post 
          author="Pedro Lucas" 
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates velit voluptatibus unde, sint illum nemo minima. Quibusdam voluptatibus itaque libero alias consequuntur tempore incidunt similique harum atque, ut culpa omnis."/>
          <Post 
          author=""
          content="Sou muito chato"/>
        </main>
      </div>
    </div>
  )
}