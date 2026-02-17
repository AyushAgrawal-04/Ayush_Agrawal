import { useEffect, useState } from "react";
import styles from "./Loading.module.css"

function Loading({onComplete}) {
  const [text, setText] = useState("");
  const fullText = "Ayush Agrawal";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col justify-center items-center">
      <div className="mb-4 text-4xl text-red-500 font-bold">
        <div className={`${styles.mrs}`}>
       &lt; <span>{text}</span> /&gt;
       </div>
      </div>

    </div>
  );
}

export default Loading;
