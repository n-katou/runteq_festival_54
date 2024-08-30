import Head from "next/head";
import Curve from "../../public/transition/index";

export default function Mick() {
  return (
    <>
      <Curve>
        <></>
      </Curve>
      <div>
        <div className="container">
          <div className="grid">
            <div>
              <h1 className="text-3xl">
                My name is Mick<br/>
                I am office worker
              </h1>
              <div>
                <button className="bg-gradient-to-r from-pink to-blue border-2 border-pink rounded-full px-4 py-2"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
