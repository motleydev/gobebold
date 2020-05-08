import Link from "next/link";
import { GraphQLClient } from "graphql-request";

export default () => {
  return (
    <>
      <div className="bg">
        <h1>Go Be Bold.</h1>
      </div>
      <style global jsx>{`
        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%:
          height: 100%;
          background: #1d1f21;
        }
        #__next {
          height: 100vh;
        }
        .bg {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        h1 {
          font-weight: bold;
          font-size: 5rem;
          color: white;
          font-family: Helvetica, Verdana;
        }
      `}</style>
    </>
  );
};
