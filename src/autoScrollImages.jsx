import { useState, useEffect } from "react";
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";

export default function AutoScrollImages() {
    const images = [img1, img2, img3, img4, img5];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % images.length);
        }, 1000); // 10 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={styles.wrapper}>
            <img src={images[index]} alt="slide" style={styles.image} />
        </div>
    );
}

const styles = {
    wrapper: {
        display: "flex",
        justifyContent: "center",  // horizontally center
        alignItems: "center",      // vertically center   // optional
    },

    image: {
        width: "300px",     // set the image size as you want
        height: "300px",     // keeps aspect ratio
        borderRadius: "10px",
        
    }
};