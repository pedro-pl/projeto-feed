import { Header } from './components/Header';
import { Post } from './components/Post';
import { SideBar } from './components/SideBar';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://i.pinimg.com/280x280_RS/66/6c/43/666c430d2785ba66cb839aea1bbdd686.jpg',
      name: 'Pedro Lucas',
      role: 'Desenvolvedor'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-12-19 15:20:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}