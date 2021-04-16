type MediaSource = {
  mediaSource: string;
  mediaSourceId: string;
};

// Get media source and id from an url
export function getMediaSourceAndIdFromUrl(url: string): MediaSource | null {
  // Youtube
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    //eslint-disable-next-line
    const regex = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/
    const result = url.match(regex) || [];
    const id = result[1];

    if (id) {
      return {
        mediaSource: 'youtube',
        mediaSourceId: id,
      };
    }
  }

  // Vimeo
  if (url.includes('vimeo.com')) {
    //eslint-disable-next-line
    const regex = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/
    const result = url.match(regex) || [];
    const id = result[3];

    if (id) {
      return {
        mediaSource: 'vimeo',
        mediaSourceId: id,
      };
    }
  }

  return null;
}
