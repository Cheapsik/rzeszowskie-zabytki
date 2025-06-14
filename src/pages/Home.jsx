import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";
import { monuments } from "../utils/consts";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Zabytki</h1>
      <div className={styles.grid}>
        {monuments.map((monument) => (
          <div key={monument.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img src={monument.image} alt={monument.title} className={styles.image} />
            </div>
            <div className={styles.descriptionWrapper}>
              <h2 className={styles.title}>{monument.title}</h2>
              <div className={styles.description}>
                {Array.isArray(monument.description)
                  ? monument.description
                    .filter(block => block.type === "text")
                    .map((block, idx) => <p key={idx}>{block.content}</p>)
                  : monument.description}
              </div>
              <button
                className={styles.button}
                onClick={() => navigate(`/${monument.id}`, { state: monument })}
              >
                Czytaj dalej
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;