import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function ShimmerCard() {
  return (
    <div className="shimmer-card">
      <div
        style={{
          display: "block",
          width: 220,
          height: 120,
        }}
      >
        {<Skeleton height={120} width={220} />}
      </div>
      <h1>{<Skeleton width={180}/>}</h1>
      {<Skeleton count={2} width={220}/>}
    </div>
  );
}

export default Shimmer = () => {
    const ShimmerCards = Array.from({length: 12}).map(()=>{
        return <ShimmerCard/>;
    })

  return <div className="shimmer-container">
    {
        ShimmerCards
    }
  </div>;
};
