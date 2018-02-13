import React from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ images, maxHeight, altText = 'Screenshot' }) => {
    return (
      <div className='carousel-container-outer' style={{ overflowX: 'hidden'}}>
        <div
          className='carousel-container-inner'
          style={{
              maxHeight: maxHeight ? maxHeight : '450px',
              overflowX: 'scroll',
              overflowY: 'hidden',
              whiteSpace: 'nowrap'
          }}
        >
          {
            images && images.map(( el, i ) => !!el && (
              <div className='carousel-image-container' key={i} style={{ display: 'inline-block', verticalAlign: 'bottom' }}>
                <img alt={`${altText} - ${i}`}
                    className='carousel-image'
                    src={el}
                    style={{ maxHeight: maxHeight ? `${maxHeight}px` : '450px' }}
                />
              </div>
            ))
          }
        </div>
      </div>
    );
};

Carousel.propTypes = {
    altText: PropTypes.string,
    images: PropTypes.array,
    maxHeight: PropTypes.string
}

export default Carousel;