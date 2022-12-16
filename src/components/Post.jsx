import { Comment } from './comment';
import styles from './Post.module.css';

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://i.pinimg.com/280x280_RS/66/6c/43/666c430d2785ba66cb839aea1bbdd686.jpg" />
                    <div className={styles.authorInfo}>
                        <strong>Pedro Lucas</strong>
                        <span>Desenvolvedor</span>
                    </div>
                </div>

                <time title='15 de Dezembro às 15:00h' dateTime='2022-15-12 15:00:21'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href=""> #novoprojeto</a> 
                    <a href=""> #nlw</a>
                    <a href=""> #rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    );
}