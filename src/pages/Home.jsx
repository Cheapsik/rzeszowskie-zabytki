import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";
import ratuszImg from "../assets/ratusz.jpg";

const monuments = [
  {
    id: 1,
    title: "Ratusz",
    image: ratuszImg,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ex. Culpa, quasi. Omnis eos deleniti veniam eveniet laudantium autem consequuntur odio deserunt pariatur eligendi aliquam iure, voluptates dignissimos inventore placeat sapiente saepe commodi cum neque atque provident illo numquam est! Rerum deserunt aliquid reprehenderit autem excepturi laborum, quis ratione consectetur quae perspiciatis totam distinctio necessitatibus dignissimos! Vel eligendi excepturi alias repellendus, fugiat voluptatem. Optio iste tempore vitae commodi nulla officia similique, placeat quos ratione doloribus dolorem, veniam beatae animi cupiditate sint velit? Sint, est similique! Dolor, temporibus eveniet. Consequatur eos, esse eveniet facere impedit quos nulla obcaecati molestiae culpa corrupti.",
    objectPosition: "60% 45%",
    points: [
      {
        id: 1,
        label: "Drzwi",
        description: "lorem2020 ipsum dolor sit amet consectetur adipisicing elit. Fuga, ex. Culpa, quasi. Omnis eos deleniti veniam eveniet laudantium autem consequuntur odio deserunt pariatur eligendi aliquam iure, voluptates dignissimos inventore placeat sapiente saepe commodi cum neque atque provident illo numquam est! Rerum deserunt aliquid reprehenderit autem excepturi laborum, quis ratione consectetur quae perspiciatis totam distinctio necessitatibus dignissimos! Vel eligendi excepturi alias repellendus, fugiat voluptatem. Optio iste tempore vitae commodi nulla officia similique, placeat quos ratione doloribus dolorem, veniam beatae animi cupiditate sint velit? Sint, est similique! Dolor, temporibus eveniet. Consequatur eos, esse eveniet facere impedit quos nulla obcaecati molestiae culpa corrupti.",
        top: "20%",
        left: "18%",
      },
      {
        id: 2,
        label: "Okno",
        description: "lorem2020 ipsum dolor sit amet consectetur adipisicing elit. Fuga, ex. Culpa, quasi. Omnis eos deleniti veniam eveniet laudantium autem consequuntur odio deserunt pariatur eligendi aliquam iure, voluptates dignissimos inventore placeat sapiente saepe commodi cum neque atque provident illo numquam est! Rerum deserunt aliquid reprehenderit autem excepturi laborum, quis ratione consectetur quae perspiciatis totam distinctio necessitatibus dignissimos! Vel eligendi excepturi alias repellendus, fugiat voluptatem. Optio iste tempore vitae commodi nulla officia similique, placeat quos ratione doloribus dolorem, veniam beatae animi cupiditate sint velit? Sint, est similique! Dolor, temporibus eveniet. Consequatur eos, esse eveniet facere impedit quos nulla obcaecati molestiae culpa corrupti.",
        top: "40%",
        left: "60%",
      },
    ]
  },
  {
    id: 2,
    title: "Zabytek 2",
    image: ratuszImg,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet."
  },
  {
    id: 3,
    title: "Zabytek 3",
    image: ratuszImg,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet."
  },
  {
    id: 4,
    title: "Zabytek 4",
    image: "./assets/ratusz.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet."
  },
  {
    id: 5,
    title: "Zabytek 5",
    image: "./assets/ratusz.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet."
  },
  {
    id: 6,
    title: "Zabytek 6",
    image: "./assets/ratusz.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet."
  }
];

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
              <div className={styles.description}>{monument.description}</div>
              <button
                className={styles.button}
                onClick={() => navigate(`/zabytek/${monument.id}`, { state: monument })}
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