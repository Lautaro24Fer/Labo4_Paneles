/* eslint-disable react/prop-types */

export default function Panel({
  isPanelActive,
  backgroundUrl,
  title,
  index,
  changeStatusOfPanels,
}) {
  const handleClick = () => {
    changeStatusOfPanels(index);
  };

  return (
    <section
      onClick={handleClick}
      className={isPanelActive ? "panel active" : "panel"}
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <h3>{title}</h3>
    </section>
  );
}
