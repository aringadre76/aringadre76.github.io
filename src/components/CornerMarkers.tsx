type CornerMarkersProps = {
  variant?: "hero" | "diagonal";
};

function CornerMarkers({ variant = "diagonal" }: CornerMarkersProps) {
  if (variant === "hero") {
    return (
      <>
        <span className="corner-marker corner-marker-top-left" aria-hidden="true" />
        <span className="corner-marker corner-marker-top-right" aria-hidden="true" />
      </>
    );
  }

  return (
    <>
      <span className="corner-marker corner-marker-top-left" aria-hidden="true" />
      <span
        className="corner-marker corner-marker-bottom-right"
        aria-hidden="true"
      />
    </>
  );
}

export default CornerMarkers;
