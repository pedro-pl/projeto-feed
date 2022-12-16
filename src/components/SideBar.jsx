import { PencilLine } from 'phosphor-react'
import styles from './SideBar.module.css';

export function SideBar(){
    return(
        <aside className={styles.sideBar}>
            <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1448518340475-e3c680e9b4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=100" />

            <div className={styles.profile}>
                <img 
                className={styles.avatar}
                src="https://i.pinimg.com/280x280_RS/66/6c/43/666c430d2785ba66cb839aea1bbdd686.jpg" />

                <strong>Pedro Lucas</strong>
                <span>Desenvolvedor</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}