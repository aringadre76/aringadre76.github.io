type SectionHeadingProps = {
  index: string;
  label: string;
  titleFirstLine: string;
  titleSecondLine: string;
};

function SectionHeading({
  index,
  label,
  titleFirstLine,
  titleSecondLine,
}: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <p className="section-label">
        {index} — {label}
      </p>
      <h2 className="section-title">
        <span>{titleFirstLine}</span>
        <span>{titleSecondLine}</span>
      </h2>
    </header>
  );
}

export default SectionHeading;
