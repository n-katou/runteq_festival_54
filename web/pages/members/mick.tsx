import Head from "next/head";
import Curve from "../../public/transition/index";

export default function Mick() {
  return (
    <>
      <Curve backgroundColor={"pink"}>
        <h1>About ページ</h1>
        <div className ='body'>
        <p>ここに About ページの内容を記述します。</p>
        </div>
      </Curve>
    </>
  );
}
