type port = { img: string; title: string; text: string };

export default function BlogPreview(vals: port) {
  return (
    <div className="project">
      <img src={vals.img} />
      <div className="project-description">
        <h2>{vals.title}</h2>
        <p>{vals.text}</p>
      </div>
    </div>
  );
}
