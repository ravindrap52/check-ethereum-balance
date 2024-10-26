import { h } from 'preact';

import { cn } from '@/lib/utils';
import { ImageProps } from '@/types/interface';

export function Image({ src, height, width, alt, cssClass }: ImageProps): h.JSX.Element {
  return (
    <img
      src={src}
      height={height}
      width={width}
      alt={alt}
      class={cn(`object-cover ${cssClass}`)}
      loading="lazy"
      onError={(e) => {
        // TODO: add a place holder image
        e.currentTarget.src = '';
      }}
    />
  );
}
