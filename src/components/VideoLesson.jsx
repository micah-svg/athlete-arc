export default function VideoLesson({ youtubeId, title }) {
  return (
    <div className="video-lesson">
      <h3>{title}</h3>
      <div className="video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
