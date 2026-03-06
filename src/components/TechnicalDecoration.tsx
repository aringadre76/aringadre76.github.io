function TechnicalDecoration() {
  return (
    <svg
      className="hero-decoration"
      viewBox="0 0 380 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="190" cy="190" r="158" className="tech-stroke-amber" />
      <circle cx="190" cy="190" r="118" className="tech-stroke-cyan" />
      <circle cx="190" cy="190" r="78" className="tech-stroke-amber" />
      <circle cx="190" cy="190" r="24" className="tech-stroke-cyan" />
      <path d="M16 190H364" className="tech-stroke-amber" />
      <path d="M190 16V364" className="tech-stroke-cyan" />
      <path d="M58 58L322 322" className="tech-stroke-amber tech-diagonal" />
      <path d="M322 58L58 322" className="tech-stroke-cyan tech-diagonal" />
      <rect
        x="129"
        y="129"
        width="122"
        height="122"
        transform="rotate(45 190 190)"
        className="tech-stroke-amber"
      />
      <circle cx="190" cy="32" r="5" className="tech-fill-cyan" />
      <circle cx="190" cy="348" r="5" className="tech-fill-cyan" />
      <circle cx="32" cy="190" r="5" className="tech-fill-amber" />
      <circle cx="348" cy="190" r="5" className="tech-fill-amber" />
      <circle cx="190" cy="190" r="5" className="tech-fill-amber" />
    </svg>
  );
}

export default TechnicalDecoration;
