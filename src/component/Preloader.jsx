// components/Preloader.js

const Preloader = () => {
    return (
      <div className="preloader">
        {/* Your loading spinner or animation */}
        <div>Loading...</div>
        <style jsx>{`
          .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: white;
            z-index: 9999;
          }
        `}</style>
      </div>
    );
  };
  
  export default Preloader;
  