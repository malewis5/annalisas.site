import { DocumentIcon } from '@sanity/icons';

export default {
  name: 'video',
  title: 'Video',
  icon: DocumentIcon,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'webm',
      title: 'WebM format',
      type: 'file',
      options: {
        accept: 'video/webm',
      },
    },
    {
      name: 'fallback',
      title: 'Fallback format',
      type: 'file',
      options: {
        accept: 'video/mp4',
      },
    },
    {
      name: 'aspectratio',
      title: 'Aspect Ratio',
      type: 'number',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'alt',
      title: 'Alternative text (for screen readers)',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
  ],
};
