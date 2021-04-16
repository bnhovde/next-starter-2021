import React from 'react';
import classNames from 'classnames';

import { getMediaSourceAndIdFromUrl } from 'utilities/video';

import styles from './VideoEmbed.module.css';

type Props = {
  url: string;
  caption?: string;
  isSquare?: boolean;
};

const VideoEmbed: React.FC<Props> = ({ url, caption, isSquare }) => {
  const videoClass = classNames({
    [styles.embed]: true,
    [styles['-square']]: isSquare,
  });

  const videoData = getMediaSourceAndIdFromUrl(url);

  let videoUrl = `https://www.youtube.com/embed/${videoData?.mediaSourceId}`;
  if (videoData && videoData.mediaSource === 'vimeo') {
    videoUrl = `https://player.vimeo.com/video/${videoData?.mediaSourceId}?title=0&byline=0&portrait=0`;
  }

  return (
    <figure className={videoClass}>
      <div className={styles.inner}>
        <iframe
          title="video"
          className={styles.iframe}
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
};

export default VideoEmbed;
