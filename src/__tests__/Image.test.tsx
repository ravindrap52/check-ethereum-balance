import { render, screen } from '@testing-library/preact';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';

import { Image } from '@/components/Image';

describe('Image component', () => {
  const props = {
    src: 'https://example.com/image.jpg',
    height: 100,
    width: 100,
    alt: 'Test Image',
    cssClass: 'custom-class',
  };

  it('should render the image with attributes', () => {
    render(<Image {...props} />);

    const imgElement = screen.getByAltText(props.alt);
    expect(imgElement).toHaveAttribute('src', props.src);
    expect(imgElement).toHaveAttribute('height', String(props.height));
    expect(imgElement).toHaveAttribute('width', String(props.width));
    expect(imgElement).toHaveClass('object-cover custom-class');
  });

  it('should handle onerror event', () => {
    const { container } = render(<Image {...props} />);

    const imgElement = container.querySelector('img');
    if (imgElement) {
      imgElement.onerror = imgElement.onerror;
      imgElement.dispatchEvent(new Event('error'));
      expect(imgElement).toHaveAttribute('src', '');
    }
  });
});
