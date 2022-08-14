import React from 'react';
import { getFileAsset } from '@sanity/asset-utils';
import { Flex, Spinner } from '@sanity/ui';

const PROJECT_ID = process.env.SANITY_STUDIO_PROJECT_ID;
const DATASET = process.env.SANITY_STUDIO_DATASET;

const VideoPreview = (props) => {
  if (props.isLoading || !props.value.video || !props.value.video.asset) {
    return (
      <Flex justify="center">
        <Spinner muted />
      </Flex>
    );
  }
  const videoAsset = getFileAsset(props.value.video, {
    projectId: PROJECT_ID,
    dataset: DATASET,
  });
  return (
    <video loop muted autoPlay playsInline style={{ maxHeight: 350 }}>
      <source src={videoAsset.url} type={`video/${videoAsset.extension}`} />
    </video>
  );
};

export default {
  name: 'video',
  title: 'Video',
  type: 'object',
  fields: [
    // ...
    {
      name: 'fallback',
      title: 'Fallback format',
      type: 'file',
      options: {
        accept: 'video/mp4',
      },
    },
  ],
  preview: {
    select: {
      video: 'fallback',
    },
    component: VideoPreview,
  },
};
