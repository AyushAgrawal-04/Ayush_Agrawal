import { useEffect, useState } from "react";
import styles from "./Loading.module.css";

function Loading({ onComplete }) {
  const fullText = "ayushAgrawal";
  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(typingInterval);

        // pause before finishing
        setTimeout(() => {
          onComplete();
        }, 700);
      }
    }, 90);

    return () => clearInterval(typingInterval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      <div className="text-4xl sm:text-5xl font-bold text-red-500 tracking-wider">
        <div className={styles.neonderthaw}>
          &lt;<span>{text}</span>/&gt;
        </div>
      </div>
    </div>
  );
}

export default Loading;