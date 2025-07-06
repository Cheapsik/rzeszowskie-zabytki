import React, { useState, useEffect } from "react";
import { monuments } from "../utils/consts";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faChevronUp, faChevronDown, faInfo, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import styles from "./Monument.module.scss";

const Monument = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const monument = monuments.find(m => String(m.id) === String(id));

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
        console.log("Point clicked:", point);
        setActivePoint(point);
    };

    const handleCloseDrawer = () => {
        setActivePoint(null);
    };

    return (
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <div>
                    {!footerOpen 
                    ? <button className={styles.backButton} onClick={() => navigate("/", { replace: true })}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    : null
                    }
                </div>
                <img src={monument.image} alt={monument.title} className={styles.image} style={monument.imageOffset} />
                {!footerOpen && monument.points?.map((point) => (
                    <button
                        key={point.id}
                        className={styles.point}
                        style={{ top: point.top, left: point.left }}
                        onClick={() => handlePointClick(point)}
                        aria-label={point.label}
                    >
                        <div className={styles.filler}>
                        <FontAwesomeIcon icon={faInfo} />
                        </div>
                    </button>
                ))}
            </div>
            <div className={`${styles.footer} ${footerOpen ? styles.open : ""}`}>
                <div className={styles.footerContent}>
                    <h1 className={styles.title}>{monument.title}</h1>
                    <hr className={styles.divider}></hr>
                    <div className={styles.description} style={{ overflow: footerOpen ? "hidden auto" : "hidden" }}>
                        {Array.isArray(monument.description)
                            ? monument.description.map((block, idx) => {
                                if (block.type === "text") {
                                    return <p className={styles.blockContent} style={{padding: !footerOpen && "0 0 500px 0"}} key={idx}>{block.content}</p>;
                                }
                                if (block.type === "image") {
                                    return (
                                        <div className={styles.descriptionImageWrapper} key={idx}
                                            style={{
                                                flexFlow: block.flex
                                            }}
                                        >
                                            <img
                                                src={block.src}
                                                alt={block.alt}
                                                style={{
                                                    width: block.width || "100%",
                                                    height: block.height || "auto"
                                                }}
                                            />
                                            {block.caption && (
                                                <div className={styles.caption}>
                                                    {block.caption}
                                                </div>
                                            )}
                                        </div>
                                    );
                                }
                                return null;
                            })
                            : monument.description}
                    </div>
                    <div onClick={handleToggleFooter} className={styles.toggler}>
                        {footerOpen ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}
                    </div>
                </div>
            </div>
            {activePoint && (
                <div className={styles.drawer}>
                    <div className={styles.drawerContent}>
                        <div className={styles.drawerHeader}>
                            <h3>{activePoint.label}</h3>
                            <button className={styles.closeDrawer} onClick={handleCloseDrawer}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>
                        <div className={styles.contentWrapper}>
                        {Array.isArray(activePoint.description)
                            ? activePoint.description.map((block, idx) => {
                                if (block.type === "text") {
                                    return <p className={styles.activePointDescription} key={idx}>{block.content}</p>;
                                }
                                if (block.type === "image") {
                                    return (
                                        <div className={styles.descriptionImageWrapper} key={idx}>
                                            <img
                                                src={block.src}
                                                alt={block.alt}
                                                style={{
                                                    width: block.width || "100%",
                                                    height: block.height || "auto"
                                                }}
                                            />
                                            {block.caption && (
                                                <div className={styles.caption}>
                                                    {block.caption}
                                                </div>
                                            )}
                                        </div>
                                    );
                                }
                                return null;
                            })
                            : activePoint.description}      
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Monument;