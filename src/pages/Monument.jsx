import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCircleDot, faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styles from "./Monument.module.scss";

const Monument = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const monument = location.state;

    useEffect(() => {
        if (!monument) {
            navigate("/", { replace: true });
        }
    }, [monument, navigate]);

    const [footerOpen, setFooterOpen] = useState(false);
    const [activePoint, setActivePoint] = useState(null);

    if (!monument) return null;

    const handleToggleFooter = (e) => {
        e.stopPropagation();
        setFooterOpen((prev) => !prev);
    };

    const handlePointClick = (point) => {
        setActivePoint(point);
    };

    const handleCloseDrawer = () => {
        setActivePoint(null);
    };

    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <img src={monument.image} alt={monument.title} className={styles.image} style={monument.imageOffset} />
                {monument.points?.map((point) => (
                    <button
                        key={point.id}
                        className={styles.point}
                        style={{ top: point.top, left: point.left }}
                        onClick={() => handlePointClick(point)}
                        aria-label={point.label}
                    >
                        <FontAwesomeIcon icon={faCircleDot} />
                    </button>
                ))}
            </div>
            <div className={`${styles.footer} ${footerOpen ? styles.open : ""}`}>
                <div className={styles.footerContent}>
                    <h1 className={styles.title}>{monument.title}</h1>
                    <hr className={styles.divider}></hr>
                    <div className={styles.description}>{monument.description}</div>
                    <div onClick={handleToggleFooter} className={styles.toggler}>
                        {footerOpen ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}
                    </div>
                </div>
            </div>
            {activePoint && (
                <div className={styles.drawer}>
                    <button className={styles.closeDrawer} onClick={handleCloseDrawer}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <h3>{activePoint.label}</h3>
                    <p>{activePoint.description}</p>
                </div>
            )}
        </div>
    );
};

export default Monument;